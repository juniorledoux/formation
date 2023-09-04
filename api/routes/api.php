<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FormulaireController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/formulaire',[FormulaireController::class,'cliquer'])->middleware('guest')->name('formulaire'
);
Route::get('/formulaire',[FormulaireController::class,'index'])->middleware('guest')->name('inf');

Route::put('/formulaire/{id}',[FormulaireController::class,'modifier'])->middleware('guest')->name('updated');
Route::delete('/formulaire/{id}',[FormulaireController::class,'supprimer'])->middleware('guest')->name('deleted');
// Route::resource('/formulaire',FormulaireController::class);