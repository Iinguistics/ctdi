import vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Locations from '@/components/Locations'
import CorpCulture from '@/components/CorpCulture'
import Leadership from '@/components/Leadership'
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
            path:'/locations',
            name: 'Locations',
            component: Locations,
        },
        {
            path:'/culture',
            name: 'CorpCulture',
            component: CorpCulture,
        },
        {
            path:'/leadership',
            name: 'Leadership',
            component: Leadership,
        },
       

    ]
});

