<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\StudentController;

// Home Page
Route::get('/', [HomeController::class, 'gotoHomePage'])->name('home');
Route::get('/home', [HomeController::class, 'gotoHomePage'])->name('home');

// Admin Routes
Route::get('/admin/login', [AdminController::class, 'gotoLogin'])->name('admin.login');

// Student Routes
Route::get('/student/login', [StudentController::class, 'gotoLogin'])->name('student.login');