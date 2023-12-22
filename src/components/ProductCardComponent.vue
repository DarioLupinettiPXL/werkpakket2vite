<template>
  <div class="product-card">
    <div class="product-image-container">
      <router-link :to="{ name: 'product', params: { id: product.id } }">
        <img class="product-image" :src="loadImg(product.image)" alt="Supercar" />
      </router-link>
    </div>

    <div class="product-details">
      <h3>{{ product.title }}</h3>
      <p class="price">€{{ product.price }}</p>
      <router-link :to="{ name: 'product', params: { id: product.id } }">
        <KnopComponent>Ga naar product</KnopComponent>
      </router-link>
    </div>
  </div>
</template>

<script>
import product1 from "@/assets/products/product1.jpg";
import product2 from "@/assets/products/product2.jpg";
import product3 from "@/assets/products/product3.jpg";
import product4 from "@/assets/products/product4.jpg";
import product5 from "@/assets/products/product5.jpg";
import product6 from "@/assets/products/product6.jpg";
import product7 from "@/assets/products/product7.jpg";
import product8 from "@/assets/products/product8.jpg";
import product9 from "@/assets/products/product9.jpg";
import product10 from "@/assets/products/product10.jpg";
import product11 from "@/assets/products/product11.jpg";
import product12 from "@/assets/products/product12.jpg";
import product13 from "@/assets/products/product13.jpg";
import product14 from "@/assets/products/product14.jpg";
import product15 from "@/assets/products/product15.jpg";
import product16 from "@/assets/products/product16.jpg";
import product17 from "@/assets/products/product17.jpg";
import product18 from "@/assets/products/product18.jpg";
import product19 from "@/assets/products/product19.jpg";
import product20 from "@/assets/products/product20.jpg";

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
  'product20.jpg': product20,
};
import KnopComponent from '@/components/KnopComponent.vue';

export default {
  name: "ProductCardComponent",
  components:{
    KnopComponent,
  },
  props: {
    product:{
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
  methods: {
    loadImg(imgPath) {
      if (Object.prototype.hasOwnProperty.call(imageMap, imgPath)) {
        return imageMap[imgPath]
      } else {
        console.error('Geen afbeelding:', imgPath)
        return '@/assets/placeholder.jpg'
      }
    },
  },
};
</script>

<style scoped lang="scss">
.product-card {
  display: flex;
  flex-direction: column;
  border: 2px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
  }

  .product-image-container {
    height: 200px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .product-details {
    padding: 20px;
    flex: 1;
    display: flex;
    flex-direction: column;

    h3 {
      font-size: 1.5em;
      margin-bottom: 10px;
      color: #333;
    }

    .price {
      font-size: 1.2em;
      color: #009688;
      margin-bottom: 15px;
    }

  }
}

</style>
