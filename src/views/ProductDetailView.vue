<template>
  <main id='detailpagina'>
    <div v-if='addedToCart && product.stock != 0 && !maxStockReached' class='venster'>Je hebt
      {{ this.amount }} x {{ this.product.title }} toegevoegd

      <router-link to='/winkelmand'>GA NAAR WINKELMAND</router-link>
    </div>

    <div v-else-if='addedToCart && maxStockReached' class='venster'>Deze auto is UITVERKOCHT</div>
    <div id='container'>
      <router-link to='/overzicht'>
        <KnopComponent>Terug naar overzicht</KnopComponent>
      </router-link>

      <div class='product-details'>
        <div class='productImg'>
          <img :src='loadImg(product.image)' alt='' />
        </div>
        <div class='productDesc'>
          <h1>{{ product.title }}</h1>
          <p>
            {{ product.description }}
          </p>

          <div class='addToCar  t'>
            <p class='outOfStockLabel' v-if='product.stock === 0'>UITVERKOCHT!</p>
            <p class='inStockLabel' v-else>In stock: {{ product.stock }}</p>
            <p class='priceCard'>€{{ product.price }}</p>
            <small>Excl. btw (BTW: {{ product.btw }}%)</small><br><br>
            <input v-model='amount' min='1' :max='product.stock' type='number' id='amount' name='amount'>
            <KnopComponent @click="addToCart">Koop</KnopComponent>
          </div>

        </div>
      </div>
    </div>
  </main>
</template>
<script>
import product1 from '@/assets/products/product1.jpg'
import product2 from '@/assets/products/product2.jpg'
import product3 from '@/assets/products/product3.jpg'
import product4 from '@/assets/products/product4.jpg'
import product5 from '@/assets/products/product5.jpg'
import product6 from '@/assets/products/product6.jpg'
import product7 from '@/assets/products/product7.jpg'
import product8 from '@/assets/products/product8.jpg'
import product9 from '@/assets/products/product9.jpg'
import product10 from '@/assets/products/product10.jpg'
import product11 from '@/assets/products/product11.jpg'
import product12 from '@/assets/products/product12.jpg'
import product13 from '@/assets/products/product13.jpg'
import product14 from '@/assets/products/product14.jpg'
import product15 from '@/assets/products/product15.jpg'
import product16 from '@/assets/products/product16.jpg'
import product17 from '@/assets/products/product17.jpg'
import product18 from '@/assets/products/product18.jpg'
import product19 from '@/assets/products/product19.jpg'
import product20 from '@/assets/products/product20.jpg'

const imageMap = {
  'product1.jpg': product1,
  'product2.jpg': product2,
  'product3.jpg': product3,
  'product4.jpg': product4,
  'product5.jpg': product5,
  'product6.jpg': product6,
  'product7.jpg': product7,
  'product8.jpg': product8,
  'product9.jpg': product9,
  'product10.jpg': product10,
  'product11.jpg': product11,
  'product12.jpg': product12,
  'product13.jpg': product13,
  'product14.jpg': product14,
  'product15.jpg': product15,
  'product16.jpg': product16,
  'product17.jpg': product17,
  'product18.jpg': product18,
  'product19.jpg': product19,
  'product20.jpg': product20
}

import KnopComponent from '@/components/KnopComponent.vue'

export default {
  name: 'ProductDetailView',
  components: {
    KnopComponent
  },
  props: {
    productProp: {
      id: Number,
      title: String,
      description: String,
      image: String,
      price: Number,
      vat: Number,
      stock: Number,
      brand: String
    }
  },
  data() {
    return {
      maxStockReached: false,
      product: {},
      amount: 1,
      addedToCart: false
    }
  },
  mounted() {
    this.product = this.$store.getters.getProductId(this.$route.params.id)[0]
  },
  methods: {
    venster() {
      let currentCartAmountOfProduct = this.$store.getters.getProductAmountInCart(this.$route.params.id)
      if (currentCartAmountOfProduct >= this.product.stock) {
        this.maxStockReached = true
      }
      return setTimeout(() => this.addedToCart = false, 3000)
    },

    addToCart() {
      if (this.amount > this.product.stock) {
        console.error("");
        return;
      }

      this.addedToCart = true;
      this.venster();
      this.$store.commit('addToCart', { product: this.product, amount: this.amount });
    },

    loadImg(imgPath) {
      if (Object.prototype.hasOwnProperty.call(imageMap, imgPath)) {
        return imageMap[imgPath]
      } else {
        console.error('Geen afbeelding:', imgPath)
        return '@/assets/placeholder.jpg'
      }
    },
  }
}
</script>
<style scoped>
main#detailpagina {
  padding: 50px 0;
  position: relative;
  display: flex;
  justify-content: center;
}

div#container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

div.product-details {
  background: #f9f9f9;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
}

p.priceCard {
  color: #333;
  background: #e0e0e0;
  padding: 1.5rem;
  width: fit-content;
  border-radius: 12px;
  margin-top: 20px;
}

p.inStockLabel,
p.outOfStockLabel {
  font-size: 18px;
  font-weight: 500;
  padding: 1.5rem;
  width: fit-content;
  border: 2px solid #4CAF50;
  border-radius: 12px;
  margin-top: 20px;
}

p.outOfStockLabel {
  color: #e74c3c;
  border: 2px solid #e74c3c;
}

input {
  margin-bottom: 1rem;
  padding: 1.5rem;
  background-color: #e0e0e0;
  border-radius: 12px;
  border: none;
  width: 80px;
}

div.venster {
  background: #012050;
  color: #ffffff;
  padding: 25px;
  border-radius: 20px;
  min-width: 80%;
  position: absolute;
  top: 110px;
  transition: opacity 0.5s ease-in-out;
  opacity: 1;
}

a {
  color: #4CAF50;
}

main#detailpagina #container .product-details div.productImg img {
  width: 100%;
}

main#detailpagina #container .product-details {
  width: 100%;
  display: flex;
  gap: 30px;
}

main#detailpagina #container .product-details div.productImg {
  overflow: hidden;
  width: 40%;
}
</style>
