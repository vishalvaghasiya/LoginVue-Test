import loginComponent from "./components/pages/loginComponent";
import registerComponent from "./components/pages/registerComponent";

/*
import ExampleComponent from "./components/ExampleComponent";
import headerComponent from "./components/common/headerComponent";*/
export default [
    {path: '/', component: loginComponent},
    {path: '/register', component: registerComponent},
    /*{path: '/header', component: headerComponent},*/
]
