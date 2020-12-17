<!-- Har Har Mahadev -->
#### Step 1: Install Laravel 6.0 using composer
    composer create-project laravel/laravel ProjectName "6.0"
                vs
    composer create-project laravel/laravel ProjectName "6.0.*"
    
> install Laravel 6.20.0

#### Step 2: Install Laravel in scaffolding of vue
https://laravel.com/docs/7.x/frontend

    composer require laravel/ui:^2.4
    
Error generated Because laravel 6 and Ui-2.4 is not perfect combination --> work only laravel-7.0 in ui-2
> so, Laravel 6 in Ui-1.2 worked 
    
    composer require laravel/ui:^1.0 --dev
    php artisan ui vue
             

#### step 3: Install npm
     npm install
     npm run dev
          
> layouts > app.blade.php
> pages > home.blade.php

> Js Vue Scaffolding
    
####step 4: app.js
```javascript
require('./bootstrap');
window.Vue = require('vue');
import App from "./components/App";

const app = new Vue({
    el: '#app',
    components: {
        'vish-component': App
    }        
});
```

####step 4.1: bootstrap.js
> don't touch this file and not change any line of code.

###step 5: App.vue
```vue
<template>
    <div class="row">
        <div class="col-md-2">
        </div>
        <div class="layout-column col-md-10">
            <div id="main">
                <!--<headerComponent></headerComponent>-->
                Test App.vue Is Working                    
            </div>
        </div>
    </div>
</template>

<script>
    /*import headerComponent from "./common/headerComponent";*/

    export default {
        name: "App",
        mounted() {
            console.log('Component mounted.')
        }
        /*components: {
                    'headerComponent': headerComponent
        },*/

    }
</script>

<style scoped>
    #main {
        width: 1000px;
    }
</style>
```

### step 6: views of Laravel Blade Engine Create index File 
>views> layouts> app.blade.php

```html
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <!-- todo: Step 1.0 Add Mixin css File -->
    <link rel="stylesheet" href="{{asset('css/app.css')}}" type="text/css">
    {{--Last Step miss--}}
</head>

<body>
<!--todo: Step 2.0 div in Add id like - id="app"
this id use in app.js in vue instance in     
components: {el:'app'}
-->
<div id="app">
<!--todo: step 2.1 Add Component in index file refer to app.js instance-->       
<!--Method 1 direct write here-->
<vish-component></vish-component>    

<!--Method 2 yield using-->
<!--@yield('content')-->
</div>

<!-- todo: Step 1.1 Add Mixin js File -->
<script type="text/javascript" rel="script" src="{{asset('js/app.js')}}"></script>
{{--Last Step js--}}
</body>
</html>

```

### step 7: if Method 2 use - yield using component declare
```blade
@extends('layouts.app')
@section('content')
    <vish-component></vish-comp>
@endsection
```   

#### step 8: PageController Create and router using pass index page
    php artisan make:controller PageController

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PageController extends Controller
{
    public function index(){
        return view('pages.home');
    }
}
```      

#### step 9: web.php in route declare
> all route declaration remove only add this

    Route::get('/{view?}', 'PageController@index')->where('view', '(.*)')->name('landing');
 




---
---
---
---
Finally working Vue Front End in chrome 

---

##step 10: Vue-router Install using Npm
> Add Vue router using npm
  https://router.vuejs.org/installation.html

    npm install vue-router
    
> app.js in add vue router
```javascript
/*todo : s1 import */
    import VueRouter from 'vue-router'
    import Routes from "./routes";

/*todo : s2 use */
    Vue.use(VueRouter)

/*todo : s3 instance create */
   const routeConst = new VueRouter({
        routes: Routes,
        mode: 'history',
    });

/*todo : s4 router declare in vue Instance */
const app = new Vue({
    router: routeConst,
});
```

  
  
    

    
 
    
---
```javascript
require('./bootstrap');
window.Vue = require('vue');
import App from "./components/App";

import VueRouter from "vue-router";
import Routes from "./routes";

Vue.use(VueRouter);

const routeConst = new VueRouter({
    routes: Routes,
    mode: 'history',
});

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);
const app = new Vue({
    el: '#app',
    components: {
        'vish-component': App
    },
    router: routeConst,
});

```

####step 11: routes.js
```javascript
import loginComponent from "./components/pages/loginComponent";
import registerComponent from "./components/pages/registerComponent";

export default [
    {path: '/', component: loginComponent},
    {path: '/register', component: registerComponent},
]

```

#### Step 12: App.vue
    
    <router-view class="col-md-12"></router-view>
    

####Step 13: headerComponent.vue 
>resources >js >components >common >headerComponent.vue
```vue
<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Login Vue</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <router-link to="/" class="nav-link">
                            Login
                        </router-link>
                        <!--                        <a class="nav-link" href="#">Login <span class="sr-only">(current)</span></a>-->
                    </li>
                    

                    <li class="nav-item">
                        <router-link to="/register" class="nav-link"> Reg</router-link>
                        <!--<a class="nav-link" href="#">Register</a>-->
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "headerCustom"
    }
</script>

<style scoped>

</style>
```


#### step 14: App.vue in Add router-view & locally Component
```vue


<div id="main">
    <headerComponent></headerComponent>
    <router-view class="col-md-12"></router-view>
</div>

<script>
    import headerComponent from "./common/headerComponent";

    export default {
        name: "App",
        components: {
            'headerComponent': headerComponent
        }
    }
</script>
```

#### step 15: loginComponent.vue
```vue
<template>
    <div class="bg-black">
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>
            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "loginComponent"
    }
</script>
```

#### step 16: registerComponent.vue
```vue
code
```

### step 17 : Database Migration

> 2014_10_12_000000_create_users_table.php
```
public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            $table->integer('phone')->unique();
            $table->rememberToken();
            $table->timestamps();
        });
    }

 public function down()
    {
        Schema::dropIfExists('users');
    }
```

>defaultStringLength(191) set in AppServiceProvider  
>path --> app -- Providers -- AppServiceProvider.php in boot()
```
use Illuminate\Support\Facades\Schema;

public function boot()
    {
        Schema::defaultStringLength(191);
    }
}
```

>.env file in database configuration add
  
     php artisan migrate



---------
#### step 18: This Database store Route declare in web.php
```
Route::group(['api' => 'api'], function () {
    Route::group(['prefix' => 'database'], function () {
        Route::post('/store', 'DatabaseController@store')->name('databaseStore');      // done
    });
});

Route::get('/{view?}', 'PagesController@landing')->where('view', '(.*)')->name('landing');

// vue router in only front end view  -- route declare
// databse connection get post router declare in web.php
``` 

#### step 19:  axios POST by default add laravel vue scaffolding
```
 axios.post('/database/store', {
                    table: currentObj.tableName,
                    modelStatus: currentObj.createModel,
                    rowData: currentObj.columns
                }).then(function (response) {
                    console.log(JSON.stringify(response));
                    currentObj.output = response.data;
                }).catch(function (error) {
                    console.log(error);
                });
```


```
//Database Routes
    Route::get('/databaseAPI', 'DatabaseController@viewIndex');
    Route::get('/viewSchema/{tableName}', 'DatabaseController@viewSchema');

```

#### step 20:  axios Get by default add laravel vue scaffolding
```
getPost() {
        axios.get('/databaseAPI')
            .then(response => {
                let tables = this.differenciate(response.data.table, response.data.dataType);
                let dataType = this.differenciate(response.data.table, tables);

                this.tables = tables;
                this.dataTypes = dataType;
                // confirm(tables); confirm(dataType);
                // console.log(JSON.stringify(response.data.table));
                // console.log(JSON.stringify(response.data.dataType));
                // console.log('working axios');
            })
            .catch(error => {
                console.log(error);
            });
        //.then(function (response) {
        /*this.posts = response.data.data;
        this.breadatas = response.data.dataType;*/
    },
```

#### web.php
```
Route::group(['api' => 'api'], function () {
    Route::get('/databaseAPI', 'DatabaseController@viewIndex');
});
```
