<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PageResource\Pages;
use App\Models\Page;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Forms\Get;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Support\Str;

class PageResource extends Resource
{
    protected static ?string $model = Page::class;

    protected static ?string $navigationIcon = 'heroicon-o-document-text';

    protected static ?string $navigationGroup = 'Content';

    protected static ?int $navigationSort = 1;

    public static function canAccess(): bool
    {
        return auth()->user()?->hasAnyRole(['Super Admin', 'Staff']) ?? false;
    }

    // -------------------------------------------------------------------------
    // Block Builder Schemas — Each returns the fields for a specific block type.
    // All fields here map directly into the `content` JSON column via statePath.
    // -------------------------------------------------------------------------

    private static function heroBlockSchema(): array
    {
        return [
            Forms\Components\TextInput::make('title')
                ->label('Hero Title')
                ->required()
                ->maxLength(255),

            Forms\Components\TextInput::make('subtitle')
                ->label('Subtitle / Tagline')
                ->maxLength(255),

            Forms\Components\FileUpload::make('background_image_url')
                ->label('Background Image')
                ->image()
                ->directory('blocks/hero')
                ->helperText('Recommended size: 1920x1080px'),

            Forms\Components\Grid::make(2)->schema([
                Forms\Components\TextInput::make('button_text')
                    ->label('CTA Button Text')
                    ->placeholder('e.g., Explore Our Projects'),

                Forms\Components\TextInput::make('button_link')
                    ->label('CTA Button URL')
                    ->url()
                    ->placeholder('https://...'),
            ]),
        ];
    }

    private static function brandsBlockSchema(): array
    {
        return [
            Forms\Components\Repeater::make('brands_list')
                ->label('Brand Items')
                ->schema([
                    Forms\Components\TextInput::make('brand_name')
                        ->label('Brand Name')
                        ->required(),

                    Forms\Components\FileUpload::make('logo_url')
                        ->label('Brand Logo')
                        ->image()
                        ->directory('blocks/brands')
                        ->required(),

                    Forms\Components\TextInput::make('website_link')
                        ->label('Website URL')
                        ->url()
                        ->placeholder('https://...'),
                ])
                ->columns(3)
                ->addActionLabel('Add Brand')
                ->defaultItems(0)
                ->reorderable()
                ->collapsible(),
        ];
    }

    private static function servicesBlockSchema(): array
    {
        return [
            Forms\Components\TextInput::make('section_title')
                ->label('Section Title')
                ->required()
                ->maxLength(255),

            Forms\Components\TextInput::make('section_subtitle')
                ->label('Section Subtitle')
                ->maxLength(255),

            Forms\Components\Repeater::make('services_list')
                ->label('Service Cards')
                ->schema([
                    Forms\Components\TextInput::make('icon')
                        ->label('Icon (SVG class or name)')
                        ->placeholder('e.g., heroicon-o-home'),

                    Forms\Components\TextInput::make('title')
                        ->label('Service Title')
                        ->required(),

                    Forms\Components\Textarea::make('description')
                        ->label('Service Description')
                        ->rows(3),
                ])
                ->columns(2)
                ->addActionLabel('Add Service Card')
                ->defaultItems(0)
                ->reorderable()
                ->collapsible(),
        ];
    }

    private static function contactBlockSchema(): array
    {
        return [
            Forms\Components\TextInput::make('heading')
                ->label('Contact Section Heading')
                ->required()
                ->maxLength(255),

            Forms\Components\TextInput::make('subtext')
                ->label('Subtext / Description')
                ->maxLength(500),

            Forms\Components\TextInput::make('form_email_destination')
                ->label('Form Submission Email')
                ->email()
                ->required()
                ->placeholder('contact@yourcompany.com'),
        ];
    }

    // -------------------------------------------------------------------------
    // Form Definition
    // -------------------------------------------------------------------------

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                // Left column: Main content + Block Builder
                Forms\Components\Group::make()
                    ->schema([
                        Forms\Components\Section::make('Page Details')
                            ->schema([
                                Forms\Components\TextInput::make('title')
                                    ->required()
                                    ->maxLength(255)
                                    ->live(onBlur: true)
                                    ->afterStateUpdated(
                                        fn (string $state, Forms\Set $set) => $set('slug', Str::slug($state))
                                    ),

                                Forms\Components\TextInput::make('slug')
                                    ->required()
                                    ->maxLength(255)
                                    ->unique(ignoreRecord: true)
                                    ->helperText('Auto-generated from title. Must be unique.'),

                                Forms\Components\Toggle::make('is_published')
                                    ->label('Published')
                                    ->default(false)
                                    ->onColor('success')
                                    ->offColor('warning')
                                    ->helperText('Toggle to make this page visible on the frontend.'),
                            ])
                            ->columns(2),

                        // -----------------------------------------------------------------
                        // THE BLOCK BUILDER — Core Feature
                        // Binds to the HasMany `blocks` relationship.
                        // `orderColumn` gives native drag-and-drop reordering.
                        // `statePath('content')` maps all block-type-specific fields
                        // directly into the `content` JSON column on `page_blocks`.
                        // -----------------------------------------------------------------
                        Forms\Components\Section::make('Page Block Builder')
                            ->description('Build the page by stacking blocks. Drag to reorder. Each block type saves its data to the content JSON column.')
                            ->schema([
                                Forms\Components\Repeater::make('blocks')
                                    ->relationship('blocks')
                                    ->orderColumn('display_order')
                                    ->label('Content Blocks')
                                    ->itemLabel(function (array $state): string {
                                        $labels = [
                                            'hero'     => '🎯 Hero Block',
                                            'brands'   => '🏢 Brands Block',
                                            'services' => '⚙️  Services Block',
                                            'contact'  => '📩 Contact Block',
                                        ];
                                        return $labels[$state['type'] ?? ''] ?? '📦 New Block';
                                    })
                                    ->collapsible()
                                    ->collapsed(false)
                                    ->reorderable()
                                    ->addActionLabel('+ Add Block')
                                    ->schema([
                                        // The `type` column is set directly on the page_blocks table
                                        Forms\Components\Select::make('type')
                                            ->label('Block Type')
                                            ->options([
                                                'hero'     => '🎯 Hero Block',
                                                'brands'   => '🏢 Brands Block',
                                                'services' => '⚙️ Services Block',
                                                'contact'  => '📩 Contact Block',
                                            ])
                                            ->required()
                                            ->live()
                                            ->afterStateUpdated(
                                                // Reset content fields when the block type changes
                                                fn (Forms\Set $set) => $set('content', [])
                                            ),

                                        // The `content` field is a Group with statePath.
                                        // All child fields write directly into the `content` JSON column.
                                        Forms\Components\Group::make()
                                            ->statePath('content')
                                            ->schema(fn (Get $get): array => match ($get('type')) {
                                                'hero'     => static::heroBlockSchema(),
                                                'brands'   => static::brandsBlockSchema(),
                                                'services' => static::servicesBlockSchema(),
                                                'contact'  => static::contactBlockSchema(),
                                                default    => [],
                                            }),
                                    ]),
                            ]),
                    ])
                    ->columnSpan(['lg' => 2]),

                // Right column: SEO Sidebar
                Forms\Components\Group::make()
                    ->schema([
                        Forms\Components\Section::make('SEO Settings')
                            ->icon('heroicon-o-magnifying-glass')
                            ->schema([
                                Forms\Components\TextInput::make('meta_title')
                                    ->label('Meta Title')
                                    ->maxLength(70)
                                    ->placeholder('Defaults to page title if empty')
                                    ->helperText('Recommended: 50–70 characters.'),

                                Forms\Components\Textarea::make('meta_description')
                                    ->label('Meta Description')
                                    ->rows(4)
                                    ->maxLength(160)
                                    ->helperText('Recommended: 120–160 characters.'),
                            ]),
                    ])
                    ->columnSpan(['lg' => 1]),
            ])
            ->columns(3);
    }

    // -------------------------------------------------------------------------
    // Table Definition
    // -------------------------------------------------------------------------

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('slug')
                    ->badge()
                    ->color('gray'),

                Tables\Columns\IconColumn::make('is_published')
                    ->label('Published')
                    ->boolean()
                    ->trueColor('success')
                    ->falseColor('warning'),

                Tables\Columns\TextColumn::make('blocks_count')
                    ->label('Blocks')
                    ->counts('blocks')
                    ->badge()
                    ->color('info'),

                Tables\Columns\TextColumn::make('updated_at')
                    ->label('Last Modified')
                    ->dateTime()
                    ->sortable(),
            ])
            ->filters([
                Tables\Filters\TernaryFilter::make('is_published')
                    ->label('Published Status'),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index'  => Pages\ListPages::route('/'),
            'create' => Pages\CreatePage::route('/create'),
            'edit'   => Pages\EditPage::route('/{record}/edit'),
        ];
    }
}
