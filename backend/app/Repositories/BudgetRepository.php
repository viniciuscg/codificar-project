<?php

namespace App\Repositories;
use Carbon\Carbon;
use App\Models\Budget;
use Illuminate\Http\Request;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\Validator;

class BudgetRepository
{
    public function get(Request $request) {
        $page = $request->query('page');
        $nameSeller =  $request->query('nameSeller');
        $nameCustomer = $request->query('nameCustomer');
        $initialDate =  $request->query('initialDate');
        $finalDate =  $request->query('finalDate');
        $dates = $initialDate && $finalDate;

        Paginator::currentPageResolver(fn() => $page);

        return Budget::when($nameSeller, function($query) use ($nameSeller) {
            return $query->where('name_seller', 'like' , '%'. $nameSeller .'%');
        })->when($nameCustomer, function($query) use ($nameCustomer) {
            return $query->where('name_customer', 'like' , '%'. $nameCustomer .'%');
        })->when($dates, function($query) use ($initialDate, $finalDate) {
            return $query->whereBetween('date', [$initialDate, $finalDate]);
        })->orderBy('id', 'desc')->paginate(5);
    }

    public function create(Request $request) {
        $budget = new Budget();

        $messages = [
            'nameCustomer' => 'O nome do cliente não pode conter tantos caracteres.',
            'nameSeller' => 'O nome do vendedor não pode conter tantos caracteres.',
            'value' => 'O valor não pode conter tantos caracteres.',
            'description' => 'A descrição não pode ser conter tantos caracteres.',
        ]; 

        $validated = $request->validate([
            'nameCustomer' => 'required|max:191',
            'nameSeller' => 'required|max:191',
            'value' => 'required',
            'date' => 'required',
            'description' => 'required|max:191',
        ], $messages);

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
        
        $messages = [
            'nameCustomer' => 'O nome do cliente não pode conter tantos caracteres.',
            'nameSeller' => 'O nome do vendedor não pode conter tantos caracteres.',
            'value' => 'O valor não pode conter tantos caracteres.',
            'description' => 'A descrição não pode ser conter tantos caracteres.',
        ]; 

        $validated = $request->validate([
            'nameCustomer' => 'required|max:191',
            'nameSeller' => 'required|max:191',
            'value' => 'required',
            'date' => 'required',
            'description' => 'required|max:191',
        ], $messages);

        $budget->name_customer =  $request->nameCustomer;
        $budget->name_seller = $request->nameSeller;
        $budget->value = $request->value;
        $budget->date = $request->date;
        $budget->description = $request->description;

        $budget->save();

        return $budget;
    }

}