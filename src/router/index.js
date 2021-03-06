import vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Solutions from '@/components/Solutions'
import Locations from '@/components/Locations'
import CorpCulture from '@/components/CorpCulture'
import Leadership from '@/components/Leadership'
import JerryParsonsBio from '@/components/JerryParsonsBio'
import LeoParsonsBio from '@/components/LeoParsonsBio'
import DavidBurtBio from '@/components/DavidBurtBio'
import JonathanFriedmanBio from '@/components/JonathanFriedmanBio'
import RonHartzBio from '@/components/RonHartzBio'
import DieterHollenbachBio from '@/components/DieterHollenbachBio'
import ChristopherHoweBio from '@/components/ChristopherHoweBio'
import DuaneKnechtBio from '@/components/DuaneKnechtBio'
import EricMillerBio from '@/components/EricMillerBio'
import JamesHaraBio from '@/components/JamesHaraBio'
import BrianParsonsBio from '@/components/BrianParsonsBio'
import KevinParsonsBio from '@/components/KevinParsonsBio'
import MichaelParsonsBio from '@/components/MichaelParsonsBio'
import MonikaRuthBio from '@/components/MonikaRuthBio'
import QingWangBio from '@/components/QingWangBio'
import BarryYoungBio from '@/components/BarryYoungBio'
import CtdiCares from '@/components/CtdiCares'
import Procurement from '@/components/Procurement'
import Quality from '@/components/Quality'
import Sustainability from '@/components/Sustainability'
import Environment from '@/components/Environment'
import Zero from '@/components/Zero'
import Diversity from '@/components/Diversity'
import Community from '@/components/Community'
import Ethics from '@/components/Ethics'
import StbCpe from '@/components/StbCpe'
import Mobile from '@/components/Mobile'
import Deployment from '@/components/Deployment'
import Product from '@/components/Product'
import Network from '@/components/Network'
import Awards from '@/components/Awards'
<<<<<<< HEAD

=======
>>>>>>> c2d25f7b08804bed6d6512379d565ae66e4cfb13


vue.use(Router)


export default new Router({
    routes: [ 
        {
            path:'/',
            name: 'Home',
            component: Home,
        },
        {
            path:'/solutions',
            name: 'Solutions',
            component: Solutions,
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
            path:'/cares',
            name: 'CtdiCares',
            component: CtdiCares,
        },
        {
            path:'/procurement',
            name: 'Procurement',
            component: Procurement,
        },
        {
            path:'/quality',
            name: 'Quality',
            component: Quality,
        },
        {
            path:'/sustainability',
            name: 'Sustainability',
            component: Sustainability,
        },
        {
            path:'/sustainability/environment',
            name: 'Environment',
            component: Environment,
        },
        {
            path:'/sustainability/environment/zero',
            name: 'Zero',
            component: Zero,
        },
        {
            path:'/diversity',
            name: 'Diversity',
            component: Diversity,
        },
        {
            path:'/sustainability/community',
            name: 'Community',
            component: Community,
        },
        {
            path:'/sustainability/ethics',
            name: 'Ethics',
            component: Ethics,
        },
        {
            path:'/leadership',
            name: 'Leadership',
            component: Leadership,
        },
        {
            path:'/leadership/jerry-parsons',
            name: 'JerryParsonsBio',
            component: JerryParsonsBio,
        },
        {
            path:'/leadership/leo-parsons',
            name: 'LeoParsonsBio',
            component: LeoParsonsBio,
        },
         {
            path:'/leadership/david-burt',
            name: 'DavidBurtsBio',
            component: DavidBurtBio,
        },
         {
            path:'/leadership/jonathan-friedman',
            name: 'JonathanFriedmanBio',
            component: JonathanFriedmanBio,
        },
        {
            path:'/leadership/ron-hartz',
            name: 'RonHartzBio',
            component: RonHartzBio,
        },
        {
            path:'/leadership/dieter-hollenbach',
            name: 'DieterHollenbachBio',
            component: DieterHollenbachBio,
        },
        {
            path:'/leadership/christopher-howe',
            name: 'ChristopherHoweBio',
            component: ChristopherHoweBio,
        },
        {
            path:'/leadership/duane-knecht',
            name: 'DuaneKnechtBio',
            component: DuaneKnechtBio,
        },
        {
            path:'/leadership/eric-miller',
            name: 'EricMillerBio',
            component: EricMillerBio,
        },
        {
            path:'/leadership/james-o-hara',
            name: 'JamesHaraBio',
            component: JamesHaraBio,
        },
        {
            path:'/leadership/brian-parsons',
            name: 'BrianParsonsBio',
            component: BrianParsonsBio,
        },
        {
            path:'/leadership/kevin-parsons',
            name: 'KevinParsonsBio',
            component: KevinParsonsBio,
        },
        {
            path:'/leadership/michael-parsons',
            name: 'MichaelParsonsBio',
            component: MichaelParsonsBio,
        },
        {
            path:'/leadership/monika-ruth',
            name: 'MonikaRuthBio',
            component: MonikaRuthBio,
        },
        {
            path:'/leadership/qing-wang',
            name: 'QingWangBio',
            component: QingWangBio,
        },
        {
            path:'/leadership/barry-young',
            name: 'BarryYoungBio',
            component: BarryYoungBio,
        },
        {
            path:'/services/stb-cpe',
            name: 'StbCpe',
            component: StbCpe,
        },
        {
            path:'/services/mobile',
            name: 'Mobile',
            component: Mobile,
        },
        {
            path:'/services/deployment',
            name: 'Deployment',
            component: Deployment,
        },
        {
            path:'/services/product',
            name: 'Product',
            component: Product,
        },
        {
            path:'/services/network',
            name: 'Network',
            component: Network,
        },
        {
            path:'/quality/awards',
            name: 'Awards',
            component: Awards,
        },
       
    ]
});

