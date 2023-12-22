<template>
  <main id='homepage'>
    <section id='filter'>
      <div id='filter_container'>
        <label v-bind:for="'merk'">Merk:</label>
        <select v-model='selectedBrand' id='merk' @change='mutateShopProductsView'>
          <option value='All'>Alles</option>
          <option v-for='brand in brands' :key='brand' :value='brand'>{{ brand }}</option>
        </select>

        <label v-bind:for="'prijs'">Prijs:</label>
        <select v-model='selectedPrijs' id='prijs' @change='mutateShopProductsView'>
          <option value='1'>onder €200,000</option>
          <option value='2'>€200,000 - €1,000,000</option>
          <option value='3'>€1,000,000 - €2,000,000</option>
          <option value='4'>€2,000,000+</option>
        </select>
      </div>
    </section>

    <section id='pagination'>
      <div class='pagination'>
        <a
          v-for='page in totalPages'
          :key='page'
          @click='goToPage(page)'
          :class='{ active: currentPage === page }'
        >
          {{ page }}
        </a>
      </div>
    </section>

    <section id='products'>
      <div id='products_gallery'>
        <OverzichtCardComponent v-for='product in displayedProducts' :key='product.id' :product='product' />
      </div>
    </section>
  </main>
</template>

<script>
import OverzichtCardComponent from '@/components/OverzichtCardComponent.vue'

export default {
  name: 'OverzichtsView',
  components: {
    OverzichtCardComponent
  },
  data() {
    return {
      currentSelectedProducts: this.$store.state.products,
      displayedProducts: [],
      selectedBrand: '',
      brands: [],
      selectedPrijs: '',
      productsPerPage: 8,
      currentPage: 1,
      totalPages: 0
    }
  },
  mounted() {
    this.brands = this.$store.getters.getAllBrands
    this.updatePagination()
  },
  methods: {
    filterProductsByBrand() {
      let selectedBrand = this.selectedBrand
      return this.currentSelectedProducts.filter(function(product) {
        return product.brand === selectedBrand
      })
    },
    filterProductsByPrijs() {
      let selectedPrijs = this.selectedPrijs
      return this.currentSelectedProducts.filter(function(product) {
        switch (selectedPrijs) {
          case '1':
            return product.price <= 200000
          case '2':
            return product.price >= 200000 && product.price <= 1000000
          case '3':
            return product.price >= 1000000 && product.price <= 2000000
          case '4':
            return product.price >= 2000000

          default:
            return product.price
        }
      })
    },
    mutateShopProductsView() {
      this.currentSelectedProducts = this.$store.state.products
      if (this.selectedBrand !== '' && this.selectedBrand !== 'All') {
        this.currentSelectedProducts = this.filterProductsByBrand()
      }
      if (this.selectedPrijs !== '') {
        this.currentSelectedProducts = this.filterProductsByPrijs()
      }
      this.updatePagination()
    },
    updatePagination() {
      const filteredProducts = this.filterProducts()
      const totalProducts = filteredProducts.length
      this.totalPages = Math.ceil(totalProducts / this.productsPerPage)

      this.currentPage = Math.max(1, Math.min(this.currentPage, this.totalPages))

      const startIndex = (this.currentPage - 1) * this.productsPerPage
      const endIndex = startIndex + this.productsPerPage

      this.displayedProducts = filteredProducts.slice(startIndex, endIndex)
    },

    filterProducts() {
      let filteredProducts = this.$store.state.products

      if (this.selectedBrand !== '' && this.selectedBrand !== 'All') {
        filteredProducts = this.filterProductsByBrand()
      }
      if (this.selectedPrijs !== '') {
        filteredProducts = this.filterProductsByPrijs()
      }
      return filteredProducts
    },

    goToPage(page) {
      this.currentPage = page
      this.updatePagination()
    }
  }
}
</script>
<style scoped>
#filter_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

label {
  margin-right: 10px;
  font-weight: bold;
}

select {
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  background-color: #f4f4f4;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
}

section#products {
  padding: 30px;
  height: auto;
  width: 100%;
  margin-bottom: 25px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

section#pagination .pagination a {
  color: #e74c3c;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  text-decoration: none;
  margin: 0 5px;
  background-color: #fff;
  border: 1px solid #e74c3c;
  transition: background-color 0.3s, color 0.3s;
  user-select: none;
}

section#pagination .pagination a.active,
section#pagination .pagination a:hover:not(.active) {
  background-color: #e74c3c;
  color: #fff;
}

section#products div#products_gallery div.productCard {
  max-width: 250px;
  margin: auto;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

section#products div#products_gallery div.productCard:hover {
  transform: translateY(-5px);
}

section#products div#products_gallery div.productCard div.productImg img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

section#pagination div.pagination {
  margin: 0 auto;
}

section#pagination .pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
}

section#pagination {
  width: 100%;
  display: flex;
  margin-bottom: 50px;
}

section#products div#products_gallery {
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0 auto;
  gap: 20px;
}

#filter #filter_container {
  margin: 0 auto;
  max-width: 1000px;
  padding: 50px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 15px;
}
</style>

