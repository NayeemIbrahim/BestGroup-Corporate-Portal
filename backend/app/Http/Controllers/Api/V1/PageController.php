<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\V1\BlockResource;
use App\Http\Resources\Api\V1\PageResource;
use App\Http\Resources\Api\V1\ThemeResource;
use App\Models\Page;
use App\Models\Setting;
use App\Models\Theme;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class PageController extends Controller
{
    /**
     * Get published page data with active theme, blocks, and global settings by slug.
     *
     * @param string $slug
     * @return JsonResponse
     */
    public function show(string $slug): JsonResponse
    {
        // 1. Fetch the published page with its ordered blocks
        $page = Page::where('slug', $slug)
            ->where('is_published', true)
            ->with(['blocks' => function ($query) {
                $query->orderBy('display_order', 'asc');
            }])
            ->first();

        if (!$page) {
            return response()->json([
                'success' => false,
                'message' => "Page with slug '{$slug}' not found or is unpublished.",
            ], Response::HTTP_NOT_FOUND);
        }

        // 2. Fetch the currently active theme
        $activeTheme = Theme::active()->first();

        // 3. Fetch all global settings and format as key-value pairs
        $settings = Setting::all()->pluck('value', 'key');

        // 4. Return formatted response
        return response()->json([
            'success' => true,
            'data'    => [
                'page'     => new PageResource($page),
                'theme'    => $activeTheme ? new ThemeResource($activeTheme) : null,
                'settings' => $settings,
                'blocks'   => BlockResource::collection($page->blocks),
            ],
        ], Response::HTTP_OK);
    }
}
