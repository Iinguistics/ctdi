import vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import HelloWorld from '@/components/HelloWorld'
// import Profile from '@/components/Profile'
// import Login from '@/components/Login'


vue.use(Router)

export default new Router({
    routes: [
        {
            path:'/',
            name: 'Home',
            component: Home,
        },
        {
            path:'/helloworld',
            name: 'HelloWorld',
            component: HelloWorld,
        },
       

    ]
});