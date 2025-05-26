<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{ asset('css/Admin/login.css?v=1.0') }}">
    <title>Admin Login</title>
</head>
<body>
    <div class="container" id="container">
        <form method="post" id="login-form" action="/LMS/admin/adminLoginAuthentication" class="form">
            <h2>Admin Login</h2>
            <div class="input-group">
                <label for="login-user">Username</label>
                <input type="text" id="login-user" name="username" required>
            </div>
            <div class="input-group">
                <label for="login-password">Password</label>
                <div style="position: relative;">
                    <input type="password" id="login-password" name="password" required>
                    <span class="toggle-password" onclick="togglePassword('login-password')"><img id="show-hide-password" src="{{ asset('images/hide_password.png') }}" width="18"></span>
                </div>
            </div>
            <button type="submit">Log In</button>
        </form>
    </div>
    <script src="{{ asset('js/main.js?v=1.0') }}"></script>
</body>
</html>