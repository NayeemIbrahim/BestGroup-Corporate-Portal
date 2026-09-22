<?php

namespace App\Filament\Resources\InvestmentReportResource\Pages;

use App\Filament\Resources\InvestmentReportResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditInvestmentReport extends EditRecord
{
    protected static string $resource = InvestmentReportResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
