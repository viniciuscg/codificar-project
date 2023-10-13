<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Budget extends Model
{
    public $timestamps = false;
    
    protected $table = 'budget';

    protected $fillable = [
        'id',
        'name_customer',
        'name_seller',
        'value',
        'date',
        'description'
    ];

}
