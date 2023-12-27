<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vrsta extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'naziv'
    ];

    public function pica(){
        return $this->hasMany(Pice::class);
    }
}
