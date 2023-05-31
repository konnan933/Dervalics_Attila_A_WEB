<?php

use App\Models\teszt;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('teszt', function (Blueprint $table) {
            $table->id();
            $table->string('kerdes');
            $table->string('v1');
            $table->string('v2');
            $table->string('v3');
            $table->string('v4');
            $table->string('helyes')->default("teszt.v1");
            $table->foreignId('kategoriaId')->references("id")->on("kategoria");
            $table->timestamps();
        });


        teszt::create(['kerdes' =>"Melyik a állat tud emberi hangot utánozni?",
        'v1'  => "Kutya",
        'v2' => "Macska",
        'v3' => "Panda",
        'v4' => "Papagáj",
        'helyes' => "Papagáj",
        'kategoriaId' =>1,]);
        teszt::create(['kerdes' =>"Melyik medve?",
        'v1'  => "Panda",
        'v2' => "Macska",
        'v3' => "Rigó",
        'v4' => "Papagáj",
        'helyes' => "Panda",
        'kategoriaId' =>1,]);
        teszt::create(['kerdes' =>"Melyik autómárka ad el csak elektromos autókat?",
        'v1'  => "BMW",
        'v2' => "Tesla",
        'v3' => "WV",
        'v4' => "Mercedes",
        'helyes' => "Tesla",
        'kategoriaId' =>2,]);
        teszt::create(['kerdes' =>"Melyik autó legrádább?",
        'v1'  => "Lamborghini",
        'v2' => "Tesla",
        'v3' => "Bugatti",
        'v4' => "Roll Rolyce",
        'helyes' => "Bugatti",
        'kategoriaId' =>2,]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('teszts');
    }
};
