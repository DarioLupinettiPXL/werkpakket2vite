import { createStore } from 'vuex'
import json from "@/assets/products.json";

export default createStore({
  state: {
    products: json.products,
    cart: [],
    userLoggedIn: false,
    userInfo: {}
  },
  getters: {
    getLoggedInUser(state){
      return state.userInfo.name
    },
    getProductId: (state) => (id) => {
      return state.products.filter(
        function(item){
          return item.id == id
        })
    },
    getProductAmountInCart:(state) => (id) => {
      let amountValue = 0;
      state.cart.forEach(
        function(cartItem){
          if(cartItem.product.id == id){
            amountValue = cartItem.amount
          }
      })
      return amountValue;
    },
    getProductsStock(state){
      return state.products.sort(function(a,b){
        if(a.stock > b.stock){
          return -1
        }
      })
    },
    getAllBrands(state){
      let brands = [];
      state.products.forEach(function(product){
        if(brands.indexOf(product.brand) === -1){
          brands.push(product.brand);
        }
      });
      return brands;
    }
  },
  mutations: {
    loginUser(state, payload){
      state.userLoggedIn = true;
      state.userInfo = payload;
    },
    addToCart(state,payload){
      let amount = payload.amount;
      let product = payload.product;

      let index = state.cart.findIndex(item => {
        return item.product.id === product.id})
      if(index!= -1 && index!= undefined){

        if(product.stock < state.cart[index].amount + amount){
          return
        }
        state.cart[index].amount += amount;
      }else{
        if(product.stock < amount){
          return
        }
        state.cart.push({amount: amount, product: product})
      }
      console.log(state.cart)
    }
  },
  actions: {
    logoutUser(){
      console.log(this.state.userInfo.user.name + " is nu uitgelogd");
      this.state.userLoggedIn = false;
      this.state.userInfo = {}
    }
  },
})
