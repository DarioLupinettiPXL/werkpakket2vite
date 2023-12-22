<template>
  <main>
    <BannerComponent />
    <PopularProductsComponent />
    <div class='flex'>
      <router-link to='/overzicht'>
        <KnopComponent>Bekijk alles</KnopComponent>
      </router-link>
    </div>
  </main>
</template>

<script>
import PopularProductsComponent from '@/components/PopularProductsComponent.vue'
import KnopComponent from '@/components/KnopComponent.vue'
import BannerComponent from '@/components/BannerComponent.vue'

export default {
  name: 'HomeView',
  components: {
    BannerComponent,
    PopularProductsComponent,
    KnopComponent
  }
}
</script>
<style scoped>
main {
  padding: 0 0 50px 0;
}

div.flex {
  display: flex;
  justify-content: space-around;
}
</style>
