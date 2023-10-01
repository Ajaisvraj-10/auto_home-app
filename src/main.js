import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import Open from './pages/Open.vue';
import Login from './pages/Login.vue'
import Register from './pages/Register.vue'
import Home from './pages/Home.vue'
import Search from './pages/Search.vue'
import Menubar from './pages/Menubar.vue'
import ProductList from './pages/ProductList.vue'
import ProductDetails from './pages/ProductDetails.vue'
import ProductCart from './pages/ProductCart.vue'
import PlaceOrder from './pages/PlaceOrder.vue'
import OrderPayment from './pages/OrderPayment.vue'
import OrderPlaced from './pages/OrderPlaced.vue'
import Control from './pages/Control.vue'
import AddDevice from './pages/AddDevice.vue'
import Humidifier from './pages/Humidifier.vue'
import SelectHumid from './pages/SelectHumid.vue'
import Connecting from './pages/Connecting.vue'
import SmartConnect from './pages/SmartConnect.vue'
import Settings from './pages/Settings.vue'
import Orders from './pages/Orders.vue'
import TrackOrder from './pages/TrackOrder.vue'
import Service from './pages/Service.vue'



const routes = [
  { path: '/', component: Open },
  { path: '/login', component: Login, name:'login' },
  { path: '/register', component: Register, name:'register' },
  { path: '/home', component: Home, name:'home' },
  { path: '/search', component: Search, name:'search' },
  { path: '/menubar', component: Menubar, name:'menubar' },
  { path: '/productlist', component: ProductList, name:'productlist' },
  { path: '/productdetails', component: ProductDetails, name:'productdetails' },
  { path: '/productcart', component: ProductCart, name:'productcart' },
  { path: '/placeorder', component: PlaceOrder, name:'placeorder' },
  { path: '/orderpayment', component: OrderPayment, name:'orderpayment' },
  { path: '/orderplaced', component: OrderPlaced, name:'orderplaced' },
  { path: '/control', component: Control, name:'control' },
  { path: '/adddevice', component: AddDevice, name:'adddevice' },
  { path: '/humidifier', component: Humidifier, name:'humidifier' },
  { path: '/selecthumid', component: SelectHumid, name:'selecthumid' },
  { path: '/connecting', component: Connecting, name:'connecting' },
  { path: '/smartconnect', component: SmartConnect, name:'smartconnect' },
  { path: '/settings', component: Settings, name:'settings' },
  { path: '/orders', component: Orders, name:'orders' },
  { path: '/trackorder', component: TrackOrder, name:'trackorder' },
  { path: '/service', component: Service, name:'service' },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,   
});

const app = createApp(App);

app.use(router);

app.mount('#app');
