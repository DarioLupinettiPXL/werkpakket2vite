<template>
  <div class='banner'>
    <div class='logo-banner'>
      <img src='@/assets/banner.jpg' alt='Banner foto'>
      <div class='logo-banner-content'>
        <h1>Welkom bij SuperCar's By Dario!</h1>
        <router-link to='overzicht' className='btn'>Ontdek meer</router-link>
      </div>
    </div>

    <div class='banner-content'>
      <div class='banner-text'>
        <p>We bieden een grote voorraad van exotische en supersnelle supercars aan! Ontdek onze collectie van 's
          werelds meest unieke supercars.</p>
      </div>
      <img class='banner-image' src='@/assets/i8.jpg' alt='i8 Image'>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerComponent',
  components: {}
}
</script>