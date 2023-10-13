<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Budget;

class BudgetSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        factory(Budget::class, 10)->create();
    }
}
