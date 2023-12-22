<template>
  <div class='gekocht' :class="{ 'animated': animated }">
    <div class='product-img'>
      <img class='product-img' :src='loadImg(product.image)' alt='afbeelding' />
    </div>

    <div class='product-details'>
      <h3>{{ product.title }}</h3>

      <div class='price-info'>
        <div><b>€{{ product.price }}</b><br /><small>Excl. btw</small></div>
        <div><b>€{{ (product.price * btw()).toFixed(2) }}</b><br /><small>Incl. btw</small></div>
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
  name: 'CartNaBetalingComponent',
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
  data() {
    return {
      animated: false
    }
  },
  methods: {
    btw() {
      return this.product.btw / 100 + 1
    },
    loadImg(imgPath) {
      if (Object.prototype.hasOwnProperty.call(imageMap, imgPath)) {
        return imageMap[imgPath]
      } else {
        console.error('Geen afbeelding:', imgPath)
        return '@/assets/placeholder.jpg'
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.animated = true
    })
  }
}
</script>

<style scoped>
div.gekocht {
  border-radius: 5px;
  border: 3px solid #368858;
  display: flex;
  padding: 20px;
  justify-content: space-around;
  gap: 20px;
  box-shadow: 0 0 10px rgba(0, 100, 0, 1);
  transition: all 0.3s ease;
  text-align: left;
  align-items: center;
  margin: 0 auto;
  background-color: #fff;
}

div.gekocht.animated {
  transform: scale(1.1);
}

div.product-img {
  height: 90px;
  width: 90px;
  overflow: hidden;
  border-radius: 50%;
  border: 2px solid #368858;
}

img.product-img {
  height: 100%;
  width: 100%;
  transition: transform 0.3s ease;
}

div.product-details {
  flex-grow: 1;
}

.price-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

h3 {
  color: #368858;
  margin-right: 100px;
}
</style>
