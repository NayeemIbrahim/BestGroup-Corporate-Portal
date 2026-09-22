<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Theme extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'directory_name',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    /**
     * Scope to get only the active theme.
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * When saving a theme as active, automatically deactivate all others.
     * This enforces the single-active-theme business rule at the model level.
     */
    protected static function booted(): void
    {
        static::saving(function ($theme) {
            if ($theme->is_active) {
                static::where('id', '!=', $theme->id ?? 0)->update(['is_active' => false]);
            }
        });
    }
}
