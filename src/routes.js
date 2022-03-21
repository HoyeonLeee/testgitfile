import Login from './pages/Login';
import Shopping from './pages/Shopping';
import SingUp from './pages/SingUp';
import Basket from './pages/Basket';
import Menw from './pages/Menu';
import AddItem from './pages/AddItem';
import MembersList from './pages/MemberList';
import User from './pages/User';
import Users from './pages/Users';

export default [
    {
        path: '/',
        component: Login
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/shopping',
        component: Shopping
    },
    {
        path: '/singup',
        component: SingUp
    },
    {
        path: '/basket',
        component: Basket
    },
    {
        path: '/menu',
        component: Menw
    },
    {
        path: '/additem',
        component: AddItem
    },
    {
        path: '/memberslist',
        component: MembersList
    },
    {
        path: '/users',
        component: Users
    },
    {
        path: '/users/:id',
        component: User
    }
];