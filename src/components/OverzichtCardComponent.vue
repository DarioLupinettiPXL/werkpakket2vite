<template>
  <div class='productCard'>
    <div class='label' v-if='product.stock === 0'>Uitverkocht</div>
    <div class='inCartLabel' v-if='$store.state.cart.amount === 0'>In jouw winkelmand</div>
    <div class='productImg'>

      <router-link :to="{name:'product', params:{id:product.id}}">
        <img id='p1' :src='loadImg(product.image)' alt='Supercar' />
      </router-link>

      <div class='productDesc'>
        <h3>{{ product.title }}</h3>
        <b class='shop-price'>€{{ product.price }}</b>
      </div>
    </div>
  </div>
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

export default {
  name: 'OverzichtCardComponent',
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
    }
  },
  data() {
    return {
      amount: 1
    }
  },
  methods: {
    loadImg(imgPath) {
      if (Object.prototype.hasOwnProperty.call(imageMap, imgPath)) {
        return imageMap[imgPath];
      } else {
        console.error('Image not found:', imgPath);
        return '@/assets/placeholder.jpg';
      }
    }
  }
}
</script>

<style scoped>
div.productDesc {
  display: flex;
  justify-content: space-between;
}

b.shop-price {
  font-size: 1.5em;
}

div.productCard {
  position: relative;
}

div.label {
  position: absolute;
  top: 0;
  color: white;
  left: 0;
  padding: 10px;
  background: #ff6666;
  border-radius: 5px 5px 0 0;
  width: 100%;
  text-align: center;
  font-weight: bold;
}

div.inCartLabel {
  position: absolute;
  top: 0;
  color: #D3F6DB;
  left: 15px;
  padding: 10px;
  background: #045D5D;
  border-radius: 0 0 5px 5px;
}


section#products div#products_gallery div.productCard div.productDesc {
  color: #3d3d3d;
  padding: 25px;
  flex-wrap: wrap;
  width: 100%;
  position: relative;
}

section#products div#products_gallery div.productCard div.productImg img#p1 {
  width: 100%;
  padding: 10px;
  max-width: 250px;
  height: 250px;
}
</style>
