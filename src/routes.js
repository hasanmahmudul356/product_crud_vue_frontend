import Master from "./components/backend/layouts/Master";
import categoryComponent from "./components/backend/categoryComponent";
import LoginComponent from "./components/auth/LoginComponent";
import productComponent from "./components/backend/productComponent";

const routes = [
    {
        path: '/login',
        name: 'api/login',
        meta: {dataUrl: 'api/login', pageTitle: 'Admin Login', requiresAuth : false},
        component: LoginComponent,
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

export default routes;
