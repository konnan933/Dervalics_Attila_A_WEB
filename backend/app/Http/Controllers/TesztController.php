<?php

namespace App\Http\Controllers;

use App\Models\teszt;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TesztController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return  DB::table("teszt")->select("*")
        ->join("kategoria","kategoria.id", "=", "teszt.kategoriaId")
        ->get();;
    }
    public function kategoriaTesztek($kategoriaId)
    {
        $tesztek = DB::table("teszt")->select("*")
        ->where("kategoriaId", $kategoriaId)
        ->get();
        return $tesztek;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(teszt $teszt)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(teszt $teszt)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, teszt $teszt)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(teszt $teszt)
    {
        //
    }
}
