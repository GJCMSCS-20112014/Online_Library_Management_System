<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Home Page</title>
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            color: #fff;
            border: solid 1px gray;
            overflow-x: hidden;
            box-sizing: border-box;
        }
        .container {
            text-align: center;
            background-color: #ffffff;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
            border-radius: 12px;
            animation: fadeIn 0.5s ease;
            width: 600px;
            padding: 0px 0px 40px 0px;
        }
        p {
            font-size: 2.2rem;
            color: #333;
            margin-bottom: 25px;
            line-height: 1.4;
            font-family: Georgia;
        }
        .button-container {
            display: flex;
            flex-direction: column;
            gap: 20px;
            margin-top: 20px;
        }
        .btn {
            padding: 14px;
            font-size: 1rem;
            text-decoration: none;
            color: #fff;
            background: #6a11cb;
            border: none;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
            transition: all 0.3s ease;
            cursor: pointer;
            display: block;
            text-align: center;
            width: 490px;
            margin: 0px auto;
        }
        .btn:hover {
            background: #2575fc;
            transform: translateY(-2px);
            box-shadow: 0 6px 14px rgba(0, 0, 0, 0.2);
        }
        .btn:active {
            background: #1b5dbf;
            transform: translateY(0);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        }
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <p><span>Welcome</span> <br> <span>to</span> <br> <span style="font-weight: bold;">Library Management System</span></p>
        <div class="button-container">
            <a href="{{ route('admin.login') }}" class="btn">Go to Admin Login</a>
            <a href="{{ route('student.login') }}" class="btn">Go to Student Login</a>
        </div>
    </div>
</body>
</html>