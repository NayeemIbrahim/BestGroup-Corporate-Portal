<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PageBlock extends Model
{
    use HasFactory;

    protected $fillable = [
        'page_id',
        'type',
        'content',
        'display_order',
    ];

    protected $casts = [
        'content'       => 'array',  // Automatically encode/decode JSON
        'display_order' => 'integer',
    ];

    /**
     * A block belongs to a single page.
     */
    public function page()
    {
        return $this->belongsTo(Page::class);
    }
}
