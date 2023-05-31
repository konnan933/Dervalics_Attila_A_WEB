<?php

use App\Http\Controllers\KategoriaController;
use App\Http\Controllers\TesztController;
use App\Models\teszt;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('tesztek', [TesztController::class, "index"]);
Route::get('tesztek/kategoria/{kategoriaId}', [TesztController::class, "kategoriaTesztek"]);
Route::get('kategoria', [KategoriaController::class, "index"]);
