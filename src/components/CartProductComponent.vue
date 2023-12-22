<template>
  <div class='cartItemBox'>
    <div class='deleteBtn'>
      <button @click='removeProductFromCart'>
        <div class='deleteIcon'>
          <img src='@/assets/bin.png' alt='vuilbak' />
        </div>
      </button>
    </div>

    <div class='cart-head'>
      <p>Sub-Totaal</p>
      <p>BTW 21%</p>
      <p>Aantal</p>
      <p>Totaal</p>
    </div>
    <div class='cartItem'>
      <div class='img-cart-item'>
        <img class='product-img' :src='loadImg(product.image)' alt='product' />
      </div>
      <div class='cartItemDetails'>
        <div class='title-desc'>
          <h3>{{ product.title }}</h3>
          <p>{{ product.description }}</p>
        </div>
        <b>€{{ product.price }}</b>
        <b>€{{ (product.price * btw() - product.price).toFixed(2) }}</b>

        <input
          :value='amount'
          min='1'
          :max='product.stock'
          placeholder='amount'
          @input='updateCartItem'
          type='number'
          name='amount'
          id='amount'
        />

        <b>€{{ (amount * product.price * btw()).toFixed(2) }}</b>
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
  name: 'CartProductComponent',
  data() {
    return {}
  },
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
    },

    loadImg(imgPath) {
      if (Object.prototype.hasOwnProperty.call(imageMap, imgPath)) {
        return imageMap[imgPath]
      } else {
        console.error('Geen afbeelding:', imgPath)
        return '@/assets/placeholder.jpg'
      }
    },

    updateCartItem(event) {
      const newAmount = Number(event.target.value)

      if (newAmount > this.product.stock) {
        console.error('Aantal is te hoog')
        return
      }

      this.$store.dispatch('updateCartItemAmount', {
        productId: this.product.id,
        newAmount
      })
    },

    removeProductFromCart() {
      let productId = this.product.id
      let that = this
      return this.$store.state.cart.forEach(function(cartItem, index) {
        console.log(index)
        if (cartItem.product.id === productId) {
          that.$store.state.cart.splice(index, 1)
        }
      })
    }
  }
}
</script>

<style scoped>
button {
  border-radius: 5px;
  background: #5cb85c;
  border: none;
  transition: background 0.3s ease;
}

div.deleteIcon {
  height: 25px;
  width: 25px;
  transition: transform 0.3s ease;
}

div.deleteIcon > img {
  width: 100%;
}

button:hover .deleteIcon {
  transform: scale(1.2);
}

div.cart-head {
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  color: #333;
}

div.cartItemBox {
  height: fit-content;
  border-radius: 15px;
  padding: 25px 60px 25px 35px;
  width: 100%;
  gap: 20px;
  background: #f5f5f5;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

div.deleteBtn {
  position: absolute;
  top: 10px;
  right: 10px;
}

div.cartItem {
  width: 100%;
  display: flex;
  gap: 20px;
}

div.img-cart-item {
  display: flex;
  height: 120px;
  align-items: center;
  align-self: center;
}

img.product-img {
  height: 100%;
  width: auto;
}

div.cartItemDetails {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
}

</style>