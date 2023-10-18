<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::defaultStringLength(191);
        Schema::create('budget', function (Blueprint $table) {
            $table->id('id');
            $table->string('name_customer');
            $table->string('name_seller');
            $table->double('value');
            $table->date('date');
            $table->string('description');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('budget');
    }
};
