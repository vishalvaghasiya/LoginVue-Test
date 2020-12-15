import loginComponent from "./components/pages/loginComponent";
import ExampleComponent from "./components/ExampleComponent";
import registerComponent from "./components/pages/registerComponent";
import headerComponent from "./components/common/headerComponent";
export default [
    {path: '/', component: ExampleComponent},
    {path: '/login', component: loginComponent},
    {path: '/register', component: registerComponent},
    {path: '/header', component: headerComponent},
]
