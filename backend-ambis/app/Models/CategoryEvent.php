<?php

namespace App\Models;

use App\Models\Event;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CategoryEvent extends Model
{
    use HasFactory;
    protected $table = 'category_event';
    protected $guarded = [];
    public $timestamps = false;
    public function event(){
        return $this->hasMany(Event::class, 'id');
    }
}
