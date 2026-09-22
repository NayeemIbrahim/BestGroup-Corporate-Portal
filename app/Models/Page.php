<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'meta_title',
        'meta_description',
        'seo_title',
        'seo_description',
        'is_published',
    ];

    protected $casts = [
        'is_published' => 'boolean',
    ];

    /**
     * A page has many blocks, ordered by display_order.
     */
    public function blocks()
    {
        return $this->hasMany(PageBlock::class)->orderBy('display_order');
    }
}
