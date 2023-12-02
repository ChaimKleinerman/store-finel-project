const ROUTES = {
    HOME: '/store',
    LOGIN: '/store/login',
    REGISTER: '/store/register',
    CATEGORY: '/store/category/:cname',
    PRODUCT: '/store/product/:pid',
    CART: '/store/cart',
    COMPARE: '/store/compare/:pid1/:pid2',
    DEFAULT: '*',
    ACCOUNT:'/store/account',
    ADDRESS:'/store/address',
    SERVICE:'/store/service',
    ORDERS:'/store/orders',
    SHIPMENT:'/store/shipment',
    CHECKOUT: "/store/checkout/:totalAmount",
    CONNECT: "/store/connect",
};

export default ROUTES;