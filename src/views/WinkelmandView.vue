<template>
  <main id='main-cart'>
    <div id='cart-wrapper'>

      <div class='cart-empty' v-if='$store.state.cart.length === 0'>
        <p>Er is nog niks in je winkelmand</p>
        <br>
        <router-link to='/overzicht'>
          <KnopComponent>VERDER shoppen</KnopComponent>
        </router-link>
      </div>

      <div class='cart-item'>
        <CartProductComponent
          v-for='cartItem in $store.state.cart'
          :key='cartItem.product.id'
          :product='cartItem.product'
          :amount='cartItem.amount'
        />
      </div>

      <div id='cartTotal'>
        <h1>Totaal</h1>
        <hr>
        <div class='total'>
          <p>({{ $store.state.cart.length }} product(en))</p>
          <div>
            <p><b>€{{ getCartTotal }}</b></p>
            <small>Incl. BTW</small>
          </div>
        </div>
        <router-link to='/checkout'>
          <KnopComponent v-if='$store.state.cart.length !== 0'>Checkout</KnopComponent>
        </router-link>
      </div>
    </div>
  </main>
</template>

<script>
import CartProductComponent from '@/components/CartProductComponent.vue'
import KnopComponent from '@/components/KnopComponent.vue'

export default {
  name: 'WinkelmandView',
  components: {
    CartProductComponent,
    KnopComponent
  },
  data() {
    return {
      btw: 1.21
    }
  },
  computed: {
    getCartTotal() {
      let total = 0
      for (let i = 0; i < this.$store.state.cart.length; i++) {
        let cartItem = this.$store.state.cart[i]
        total += cartItem.amount * cartItem.product.price * this.btw
      }
      return total.toFixed(2)
    }
  }
}
</script>

<style>
main#main-cart {
  display: flex;
  justify-content: center;
  padding: 20px;
  background: #f5f5f5;
}

div#cart-wrapper {
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

div.cart-empty {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border-radius: 10px;
  padding: 20px;
}

div.cart-item {
  background: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
}

div#cartTotal {
  flex: 1;
  background: #ffffff;
  border-radius: 10px;
  padding: 20px;
  height: fit-content;
}

h2,
hr {
  margin-bottom: 0.5em;
}

div.total {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;
  padding-bottom: 1em;
}
</style>