<?php

namespace App\Http\Controllers;

use App\Models\Budget;
use Illuminate\Http\Request;
use App\Repositories\BudgetRepository;

class BudgetController extends Controller
{
    private $budgetRepository;

    public function __construct(BudgetRepository $budgetRepository) {
        $this->budgetRepository = $budgetRepository;
    }

    public function get(Request $request) {
        $budget = $this->budgetRepository->get($request);
        return response()->json($budget);
    }

    public function create(Request $request) {
        $budget = $this->budgetRepository->create($request);
        return response()->json($budget);
    }

    public function delete(Request $request) {
        $budget = $this->budgetRepository->delete($request);
        return response()->json($budget);
    }

    public function edit(Request $request) {
        $budget = $this->budgetRepository->edit($request);
        return response()->json($budget);
    }
}