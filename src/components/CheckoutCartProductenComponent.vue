<template>
  <div class='checkOutCart flex'>
    <p class='margin'>{{ product.title }} (x{{ amount }})</p>
    <b>€{{ product.price }}</b>
  </div>
</template>

<script>
export default {
  name: 'CheckoutCartProductenComponent',
  props: {
    product: {
      id: Number,
      title: String,
      description: String,
      image: String,
      price: Number,
      btw: Number,
      stock: Number,
      brand: String
    },
    amount: Number
  },
  methods: {
    btw() {
      return this.product.btw / 100 + 1
    }
  }
}
</script>

<style scoped>
div.checkOutCart {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

p.margin {
  margin-bottom: 10px;
}
</style>