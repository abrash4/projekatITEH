<?php

namespace Database\Seeders;

use App\Models\Pice;
use Illuminate\Database\Seeder;

class PiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Pice::create(['image'=>'https://www.calix.rs/uploads/store/products/thumbnails/tmb-viski-glen-moray-classic-07l-60ec2524ca632.webp', 'naziv'=>'Viski glen moray classic', 'cena'=>6500, 'kolicina'=>0, 'vrsta'=>2,'proizvodjac'=>'Canadian club distillery']);
        Pice::create(['image'=>'https://www.calix.rs/uploads/store/products/thumbnails/tmb-aviation-american-gin-60ec255ad0672.webp', 'naziv'=>'aviation american gin',   'cena'=>2100, 'kolicina'=>0, 'vrsta'=>1,'proizvodjac'=>'Brugal company']);
        Pice::create(['image'=>'https://www.calix.rs/uploads/store/products/thumbnails/tmb-barcelo-imperial-premium-blend-30-godina-60ec2513bef9a.webp', 'naziv'=>'barcelo imperial premium blend 30 godina',   'cena'=>3300, 'kolicina'=>0, 'vrsta'=>3,'proizvodjac'=>'Archers']);
        Pice::create(['image'=>'https://www.calix.rs/uploads/store/products/thumbnails/tmb-biter-aromatic-angostura-60ec256389b00.webp', 'naziv'=>'Biter aromatin angostura',   'cena'=>69900, 'kolicina'=>0, 'vrsta'=>4,'proizvodjac'=>'Canadian club distillery']);
        Pice::create(['image'=>'https://www.calix.rs/uploads/store/products/thumbnails/tmb-biter-carpano-60ec25644f1a6.webp', 'naziv'=>'Biter carpano ',   'cena'=>164990, 'kolicina'=>0, 'vrsta'=>4,'proizvodjac'=>'1423 APS']);
        Pice::create(['image'=>'https://www.calix.rs/uploads/store/products/thumbnails/tmb-biter-select-pilla-60ec25660d200.webp', 'naziv'=>' biter select pilla',   'cena'=> 120000, 'kolicina'=>0, 'vrsta'=>4,'proizvodjac'=>'AMBRA S.A.']);
        Pice::create(['image'=>'https://www.calix.rs/uploads/store/products/thumbnails/tmb-brendi-torres-5-godina-60ec255d85eeb.webp', 'naziv'=>'Brendi torres 5 godina ',   'cena'=> 120000, 'kolicina'=>0, 'vrsta'=>4,'proizvodjac'=>'Aleksici DOO']);



    }
}
