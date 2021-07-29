import Master from "../components/backend/layouts/Master";
import categoryComponent from "../components/backend/categoryComponent";
import LoginComponent from "../components/auth/LoginComponent";
import productComponent from "../components/backend/productComponent";
import HomeComponent from "../components/frontend/HomeComponent";
import ProductDetails from "../components/frontend/ProductDetails";
import RegistrationComponent from "../components/auth/RegistrationComponent";

const index = [
    {
        path: '/',
        name: 'home',
        meta: {dataUrl: 'api/products', pageTitle: 'General Store', requiresAuth : false},
        component: HomeComponent,
    },
    {
        path: '/products',
        name: 'home',
        meta: {dataUrl: 'api/products', pageTitle: 'General Store', requiresAuth : false},
        component: HomeComponent,
    },
    {
        path: '/products/:product_id',
        name: 'product_details',
        meta: {dataUrl: 'api/products', pageTitle: 'General Store', requiresAuth : false},
        component: ProductDetails,
    },
    {
        path: '/login',
        name: 'login',
        meta: {dataUrl: 'api/login', pageTitle: 'Admin Login', requiresAuth : false},
        component: LoginComponent,
    },
    {
        path: '/registration',
        name: 'registration',
        meta: {dataUrl: 'api/registration', pageTitle: 'Admin Registration', requiresAuth : false},
        component: RegistrationComponent,
    },
    {
        path: '/admin',
        name: 'admin',
        component: Master,
        meta : {requiresAuth:true},
        children: [{
            path: 'dashboard',
            name: 'dashboard',
            meta: {dataUrl: 'api/auth/categories', pageTitle: 'Category List',requiresAuth:true},
            component: categoryComponent,
        },{
            path: 'category',
            name: 'category',
            meta: {dataUrl: 'api/auth/categories', pageTitle: 'Category List', requiresAuth:true},
            component: categoryComponent,
        },
            {
            path: 'product',
            name: 'product',
            meta: {dataUrl: 'api/auth/products', pageTitle: 'Product List', requiresAuth:true},
            component: productComponent,
        }]
    }];

export default index;
