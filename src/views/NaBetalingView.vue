<template>
  <main>
    <div class='wrapper'>
      <h1>Betaling gelukt!</h1>
      <div class='orderedItems'>
        <CartNaBetalingComponent
          v-for='cartItem in cartBeforePayment'
          v-bind:key='cartItem.product.id'
          :product='cartItem.product'
          :amount='cartItem.amount' />
      </div>
    </div>
  </main>
</template>

<script>
import CartNaBetalingComponent from '@/components/CartNaBetalingComponent.vue'

export default {
  name: 'NaBetalingView',
  components: {
    CartNaBetalingComponent,
  },

  data() {
    return {
      cartBeforePayment: Object.assign({}, this.$store.state.cart)
    }
  },
  methods: {
    emptyCart() {
      return this.$store.state.cart.length = 0
    }
  },
  mounted() {
    this.emptyCart()
  }
}
</script>
<style scoped>
main {
  display: flex;
  padding: 35px 0;
  justify-content: center;
  background: #fcfcfc;
}

div.orderedItems {
  border-radius: 10px;
  padding: 20px;
  width: 60%;
  margin: 0 auto;
  background: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

div.wrapper {
  background: #fff;
  padding: 35px;
  min-width: 1200px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

h1, p {
  margin-bottom: 1em;
}

</style>

