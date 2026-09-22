<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\ExternalERPService;
use Illuminate\Http\Request;

class IntegrationController extends Controller
{
    protected $erpService;

    public function __construct(ExternalERPService $erpService)
    {
        $this->erpService = $erpService;
    }

    public function sync(Request $request)
    {
        // Example logic requiring a valid API key (e.g. from n8n or Odoo)
        $apiKey = $request->header('X-API-KEY');
        if ($apiKey !== env('EXTERNAL_INTEGRATION_KEY', 'secret-key-123')) {
            return response()->json(['error' => 'Unauthorized. Invalid API Key.'], 401);
        }

        // Call our external service to pull or push data
        $result = $this->erpService->syncData();

        return response()->json([
            'message' => 'Sync completed successfully',
            'data' => $result,
        ]);
    }
}
