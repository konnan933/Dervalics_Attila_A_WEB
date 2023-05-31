<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class kategoria extends Model
{
    use HasFactory;

    public $table = "kategoria";

    protected $fillable = [
        'name',
        'kategorianev',
    ];
}
