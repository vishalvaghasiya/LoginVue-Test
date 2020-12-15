<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Login Vue</title>
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

    {{--Last Step miss--}}
    <link rel="stylesheet" href="{{asset('css/app.css')}}" type="text/css">

</head>

<body>
<div id="app">
    @yield('content')
</div>

{{--Last Step js--}}
<script type="text/javascript" rel="script" src="{{asset('js/app.js')}}"></script>
</body>
</html>
