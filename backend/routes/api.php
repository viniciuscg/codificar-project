<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BudgetController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/budget', [BudgetController::class, 'get']);
Route::post('/budget', [BudgetController::class, 'create']);
Route::delete('/budget/{id}', [BudgetController::class, 'delete']);
Route::post('/budget/{id}', [BudgetController::class, 'edit']);
