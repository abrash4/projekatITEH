<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStavkaKorpesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('stavka_korpes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('korpa_id');
            $table->foreignId('pice_id');
            $table->integer('kolicina'); 
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
        Schema::dropIfExists('stavka_korpes');
    }
}
