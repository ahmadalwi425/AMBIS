<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/signin', [App\Http\Controllers\AuthController::class, 'signin']);
Route::post('/register', [App\Http\Controllers\AuthController::class, 'register']);
Route::get('/unauth/event', [App\Http\Controllers\eventController::class, 'index']);
Route::get('/unauth/event/{id}', [App\Http\Controllers\eventController::class, 'show']);
Route::get('/unauth/event/create', [App\Http\Controllers\eventController::class, 'create']);
