<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BudgetController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/budget', [BudgetController::class, 'get']);
Route::post('/budget', [BudgetController::class, 'create']);
Route::post('/budget/{id}', [BudgetController::class, 'edit']);
Route::delete('/budget/{id}', [BudgetController::class, 'delete']);
