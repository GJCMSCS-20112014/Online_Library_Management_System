<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function gotoLogin() {
        return view('admin.login');
    }
}
