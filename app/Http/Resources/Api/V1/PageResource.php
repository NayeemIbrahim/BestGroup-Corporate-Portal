<?php

namespace App\Http\Resources\Api\V1;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PageResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'               => $this->id,
            'title'            => $this->title,
            'slug'             => $this->slug,
            'meta_title'       => $this->meta_title ?? $this->title,
            'meta_description' => $this->meta_description ?? '',
            'is_published'     => (bool) $this->is_published,
            'blocks'           => BlockResource::collection($this->whenLoaded('blocks')),
        ];
    }
}
