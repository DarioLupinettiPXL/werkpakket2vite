<template>
  <main>
    <div class='wrapper'>

      <div class='container bestelling'>
        <h1>Bestelling:</h1>
        <hr>
        <div class='OrderItems'>
          <div>
            <CheckoutCartProductenComponent
              v-for='cartItem in $store.state.cart'
              v-bind:key='cartItem.product.id'
              :product='cartItem.product'
              :amount='cartItem.amount' />
          </div>
          <hr>
          <div class='flex'>
            <p>Totaal BTW:</p>
            <b>{{ getBTWTotal }}</b>
          </div>
          <div class='flex'>
            <b>Totaal</b>
            <b>€{{ getTotal }}</b>
          </div>
          <div class='btn'>
            <router-link to='/naBetaling'>
              <KnopComponent>Bevestig & betalen</KnopComponent>
            </router-link>
          </div>
        </div>
      </div>
      <div class='container verzending'>
        <form class='formBox'>
          <h1>Verzending</h1>
          <hr>
          <label>Adres details:</label>
          <input type='text' placeholder='Voornaam' :value='this.$store.state.userInfo.user.name' required />
          <input type='text' placeholder='Achternaam' :value='this.$store.state.userInfo.user.lastname' required />
          <input type='text' placeholder='Adres' :value='this.$store.state.userInfo.user.address' />
          <div class='inline-block'>
            <input type='text' placeholder='Stad' :value='this.$store.state.userInfo.user.city' required />
            <input type='text' placeholder='Postcode' :value='this.$store.state.userInfo.user.postalcode' required />
          </div>
          <label :for='vehicle1'><input type='checkbox' id='billing' name='billing' v-model='billingChecked' />Factuurgegevens
            wijken af van mijn adresgegevens</label><br>
        </form>
        <form v-if='billingChecked' class='formBox'>
          <label>Adres details:</label>
          <input type='text' placeholder='Voornaam' required />
          <input type='text' placeholder='Achternaam' required />
          <input type='text' placeholder='Adres' required />
          <input type='text' placeholder='Stad' required />
          <input type='text' placeholder='Postcode' required />
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import CheckoutCartProductenComponent from '@/components/CheckoutCartProductenComponent.vue'
import KnopComponent from '@/components/KnopComponent.vue'

export default {
  name: 'CheckOutView',
  components: {
    KnopComponent,
    CheckoutCartProductenComponent
  },
  props: {
    product: {
      id: Number,
      title: String,
      description: String,
      image: String,
      price: Number,
      vat: Number,
      stock: Number,
      brand: String
    },
    amount: Number
  },
  data() {
    return {
      billingChecked: false,
      btw: 1.21
    }
  },
  computed: {

    getBTWTotal() {
      let BTWtotal = 0
      for (let i = 0; i < this.$store.state.cart.length; i++) {
        let cartItem = this.$store.state.cart[i]
        BTWtotal += (cartItem.amount * (cartItem.product.price * this.btw)) - (cartItem.amount * cartItem.product.price)
      }
      return BTWtotal.toFixed(2)
    },
    getTotal() {
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

<style scoped>
main {
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 50px 0;
  background: #fcfcfc;
}

div.wrapper {
  min-width: 1200px;
  display: flex;
  gap: 20px;
  justify-content: center;
}

div.container {
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 35px;
  background: #fff;
}

form.formBox {
  display: flex;
  flex-direction: column;
  height: fit-content;
  background: #fff;
  gap: 14px;
}

div.inline-block {
  display: flex;
  gap: 10px;
  justify-content: stretch;
}

div#form,
div.OrderItems {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

div.flex {
  display: flex;
  gap: 10px;
  justify-content: space-between;
}

input {
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  background-color: #fcfcfc;
  border-radius: 5px;
  border: none;
}

.verzending {
  width: 50%;
}

.bestelling {
  width: 50%;
}

div.btn {
  margin-top: 20px;
  align-self: flex-end;
  display: inline;
}
</style>