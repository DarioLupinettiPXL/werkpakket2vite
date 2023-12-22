<template>
  <div>
    <main id="home">
      <div class="titelproducten">
        <h1 class="titelaanbevolen">Aanbevolen producten</h1>
      </div>
      <section class="highlights">
        <ProductCardComponent
            v-bind:key="product.name"
            v-for="product in sortStock"
            :product="product"
            class="product-card"
        />
      </section>
    </main>
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
import ProductCardComponent from "@/components/ProductCardComponent.vue";
export default {
  name: "PopularProductsComponent",
  components: {
    ProductCardComponent,
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
  data() {
    return {
      featured: [
        { title: "String", image: "String", desc: "String" },
        { title: "String", image: "String", desc: "String" },
        { title: "String", image: "String", desc: "String" },
        { title: "String", image: "String", desc: "String" },
        { title: "String", image: "String", desc: "String" },
      ],
    };
  },
  computed: {
    sortStock() {
      let list = [];
      list = this.$store.getters.getProductsStock;
      return list.slice(0, 3);
    },
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
#home {
  margin: 20px 0 25px 0;

  .titelproducten {
    text-align: center;
    margin-bottom: 50px;

    .titelaanbevolen {
      font-size: 4em;
      color: darkgoldenrod;
    }
  }

  .highlights {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px;

    .product-card {
      width: calc(25% - 20px);
      margin: 10px;
      transition: transform 0.3s;

      img {
        width: 100%;
        height: auto;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s;
      }

      h3 {
        font-size: 1.5em;
        margin-top: 10px;
        color: #333;
      }

      p {
        font-size: 1.2em;
        color: #555;
      }

      &:hover {
        transform: scale(1.05);

        img {
          transform: scale(1.1);
        }
      }
    }
  }
}
</style>

