<?php

use App\Http\Controllers\Api\V1\PageController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes - V1
|--------------------------------------------------------------------------
|
| All routes defined here are automatically prefixed with '/api' by Laravel.
| Versioning is grouped under 'v1'.
|
*/

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\IntegrationController;

Route::post('/login', [AuthController::class, 'login'])->name('api.login');
Route::post('/integration/sync', [IntegrationController::class, 'sync'])->name('api.integration.sync');

Route::prefix('v1')->group(function () {
    // Single robust endpoint to get complete page CMS payload
    Route::get('/page/{slug}', [PageController::class, 'show'])->name('api.v1.page.show');
});
