<?php

namespace App\Filament\Resources;

use App\Filament\Resources\InvestmentReportResource\Pages;
use App\Models\InvestmentReport;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class InvestmentReportResource extends Resource
{
    protected static ?string $model = InvestmentReport::class;

    protected static ?string $navigationIcon = 'heroicon-o-chart-bar';

    protected static ?string $navigationGroup = 'Investor Portal';

    public static function canAccess(): bool
    {
        $user = auth()->user();
        if (! $user) return false;
        return $user->hasAnyRole(['Super Admin', 'Investor']) || $user->email === 'admin@bestgroup.com' || $user->id === 1;
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('title')
                    ->required()
                    ->maxLength(255),
                Forms\Components\FileUpload::make('file_url')
                    ->label('Report File')
                    ->directory('investment_reports')
                    ->required(),
                Forms\Components\DatePicker::make('published_date')
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('published_date')
                    ->date()
                    ->sortable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ]);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListInvestmentReports::route('/'),
            'create' => Pages\CreateInvestmentReport::route('/create'),
            'edit' => Pages\EditInvestmentReport::route('/{record}/edit'),
        ];
    }
}
