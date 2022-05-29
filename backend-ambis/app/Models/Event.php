<?php

namespace App\Models;

use App\Models\CategoryEvent;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Event extends Model
{
    use HasFactory;
    protected $table = 'event';
    protected $guarded = [];
    public function category_event(){
        return $this->belongsTo(CategoryEvent::class, 'id_category');
    }
}
