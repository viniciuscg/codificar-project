<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Budget;
use Illuminate\Support\Facades\DB;

class BudgetSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('budget')->insert([
            [
                'name_customer' => 'Vinicius Carneiro Gonçalves',
                'name_seller' => 'Codifica',
                'value' => rand(1000, 100000),
                'date' => date('2023-10-15'),
                'description' => 'Descrição do orçamento',
            ],
            [
                'name_customer' => 'Wesley da Silva',
                'name_seller' => 'Vinicius',
                'value' => rand(1000, 100000),
                'date' => date('2023-10-12'),
                'description' => 'Descrição do orçamento',
            ],
            [
                'name_customer' => 'Lucas Santiago',
                'name_seller' => 'Vinicius',
                'value' => rand(1000, 100000),
                'date' => date('2023-10-13'),
                'description' => 'Descrição do orçamento',
            ],
            [
                'name_customer' => 'Guilherme Batista',
                'name_seller' => 'Davi Doener',
                'value' => rand(1000, 100000),
                'date' => date('2023-10-15'),
                'description' => 'Descrição do orçamento',
            ],
            [
                'name_customer' => 'James Hetfield',
                'name_seller' => 'Kirk Lores',
                'value' => rand(1000, 100000),
                'date' => date('2023-10-10'),
                'description' => 'Descrição do orçamento',
            ],
            [
                'name_customer' => 'Davi Doener',
                'name_seller' => 'Guilherme Batista',
                'value' => rand(1000, 100000),
                'date' => date('2023-10-10'),
                'description' => 'Descrição do orçamento',
            ],
            [
                'name_customer' => 'Levi das Chargas',
                'name_seller' => 'Vini teste',
                'value' => rand(1000, 100000),
                'date' => date('2023-10-10'),
                'description' => 'Descrição do orçamento',
            ],
        ]);
    }
}
