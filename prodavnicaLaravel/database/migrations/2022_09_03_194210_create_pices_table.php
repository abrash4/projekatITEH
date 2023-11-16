<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pices', function (Blueprint $table) {
            $table->id();
            $table->string('image');
            $table->string('naziv');
            $table->string('proizvodjac');

            $table->double('cena');
            $table->integer('kolicina')->default(0);
            $table->foreignId('vrsta');
            $table->string('zemlja_porekla')->default("Srbija");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pices');
    }
}
