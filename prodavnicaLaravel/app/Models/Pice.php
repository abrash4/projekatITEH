<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pice extends Model
{
    use HasFactory;
    protected $fillable = [
        'image',
        'naziv',
        'proizvodjac',
        'cena',
        'kolicina',
        'vrsta',
        'zemlja_porekla'
      ];
 



    public function vrsta()
    {
       return $this->belongsTo(Vrsta::class);
    }
    public function stavke()
    {
       return $this->belongsTo(StavkaKorpe::class);
    }
}
