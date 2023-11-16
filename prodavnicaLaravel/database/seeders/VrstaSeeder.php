<?php

namespace Database\Seeders;

use App\Models\Vrsta;
use Illuminate\Database\Seeder;

class VrstaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $v1 = new Vrsta();
        $v1->naziv="Rakija";
        $v1->save();

        $v2 = new Vrsta();
        $v2->naziv="Rum";
        $v2->save();

        $v3 = new Vrsta();
        $v3->naziv="Tekila";
        $v3->save();

        $v4 = new Vrsta();
        $v4->naziv="Vermunt";
        $v4->save();

        $v5 = new Vrsta();
        $v5->naziv="Votka";
        $v5->save();
    }
}
