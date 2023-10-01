import { createRouter, createWebHashHistory } from 'vue-router';


const open = { template: '<div>Open</div>' };
const login = { template: '<div>Login</div>' };
const register = { template: '<div>Register</div>' };
const home = { template: '<div>Home</div>' };
const search = { template: '<div>Search</div>' };
const menubar = { template: '<div>Menubar</div>' };
const productlist = { template: '<div>ProductList</div>' };
const productdetails = { template: '<div>ProductDetails</div>' };
const productcart = { template: '<div>ProductCart</div>' };
const placeorder = { template: '<div>PlaceOrder</div>' };
const orderpayment = { template: '<div>OrderPayment</div>' };
const orderplaced = { template: '<div>OrderPlaced</div>' };
const control = { template: '<div>Control</div>' };
const adddevice = { template: '<div>AddDevice</div>' };
const humidifier = { template: '<div>Humidifier</div>' };
const selecthumid = { template: '<div>SelectHumid</div>' };
const connecting = { template: '<div>Connecting</div>' };
const smartconnect = { template: '<div>SmartConnect</div>' };
const settings = { template: '<div>Settings</div>' };
const orders = { template: '<div>Orders</div>' };
const trackorder = { template: '<div>TrackOrder</div>' };
const service = { template: '<div>Service</div>' };



const routes = [
  { path: '/', component: open },   
  { path: '/login', component: login, name:'login'},
  { path: '/register', component: register, name:'register'},
  { path: '/home', component: home, name:'home'},
  { path: '/search', component: search, name:'search'},
  { path: '/menubar', component: menubar, name:'menubar'},
  { path: '/productlist', component: productlist, name:'productlist'},
  { path: '/productdetails', component: productdetails, name:'productdetails'},
  { path: '/productcart', component: productcart, name:'productcart'},
  { path: '/placeorder', component: placeorder, name:'placeorder'},
  { path: '/orderpayment', component: orderpayment, name:'orderpayment'},
  { path: '/orderplaced', component: orderplaced, name:'orderplaced'},
  { path: '/control', component: control, name:'control'},
  { path: '/adddevice', component: adddevice, name:'adddevice'},
  { path: '/selecthumid', component: selecthumid, name:'selecthumid'},
  { path: '/humidifier', component: humidifier, name:'humidifier'},
  { path: '/connecting', component: connecting, name:'connecting'},
  { path: '/smartconnect', component: smartconnect, name:'smartconnect'},
  { path: '/settings', component: settings, name:'settings'},
  { path: '/orders', component: orders, name:'orders'},
  { path: '/trackorder', component: trackorder, name:'trackorder'},
  { path: '/service', component: service, name:'service'},

];


const router = createRouter({
  history:createWebHashHistory(),
  routes,   
})

const app = Vue.createApp({})

app.use(router)

app.mount('#app')

