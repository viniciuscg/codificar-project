<?php

namespace App\Repositories;
use Carbon\Carbon;
use App\Models\Budget;
use Illuminate\Http\Request;
use Illuminate\Pagination\Paginator;


class BudgetRepository
{
    public function get(Request $request)
    {
        $page = $request->query('page');
        $nameSeller =  $request->query('nameSeller');
        $nameCustomer = $request->query('nameCustomer');
        $initialDate =  $request->query('initialDate');
        $finalDate =  $request->query('finalDate');

        Paginator::currentPageResolver(fn() => $page);

        return Budget::when($nameSeller, function($query) use ($nameSeller) {
            return $query->where('name_seller', 'like' , '%'. $nameSeller .'%');
        })->when($nameCustomer, function($query) use ($nameCustomer) {
            return $query->where('name_customer', 'like' , '%'. $nameCustomer .'%');
        })->when($initialDate, function($query) use ($initialDate){
            return $query->whereBetween('date', [$initialDate, $finalDate]);
        })->paginate(15);
    }

    public function create(Request $request) {
        $budget = new Budget();
        
        $budget->name_customer = $request->nameCustomer;
        $budget->name_seller = $request->nameSeller;
        $budget->value = $request->value;
        $budget->date = $request->date;
        $budget->description = $request->description;

        $budget->save();

        return $budget;
    }

    public function delete(Request $request) {
        $budget = Budget::find($request->id);
        $budget->delete();
    }

    public function edit(Request $request) {
        $budget = Budget::find($request->id);
        
        $budget->name_customer =  $request->nameCustomer;
        $budget->name_seller = $request->nameSeller;
        $budget->value = $request->value;
        $budget->date = $request->date;
        $budget->description = $request->description;

        $budget->save();

        return $budget;
    }

}