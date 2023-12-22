<template>
  <nav class='navbar'>
    <div class='left-section'>
      <router-link class='navbar-link' to='/'>
        Home
      </router-link>
      <router-link class='navbar-link' to='/overzicht'>
        Overzicht
      </router-link>
    </div>

    <div class='right-section'>
      <router-link to='/login' v-if='!userLoginState' class='loginknop'>
        <KnopComponent>Login</KnopComponent>
      </router-link>

      <button v-if='userLoginState' @click.prevent='logout' class='loguitknop'>
        Loguit
      </button>

      <router-link to='/winkelmand'>
        <div class='cartIcon'>
          <div class='cart'>
            <div v-if='$store.state.cart.length !== 0'>
              <span id='cartItems'>
                <small class='cartAmount'>{{ $store.state.cart.length }}</small>
              </span>
            </div>
          </div>
        </div>
      </router-link>

      <router-link to='/' class='logo-link'>
        <div class='logo'>
          <img src='../assets/logo.png' alt='Logo' />
        </div>
      </router-link>
    </div>
  </nav>
</template>

<script>
import KnopComponent from '@/components/KnopComponent.vue'

export default {
  name: 'HeaderComponent',
  components: {
    KnopComponent
  },
  props: {
    logo: String,
    cartIcon: String
  },
  computed: {
    userLoginState() {
      return this.$store.state.userLoggedIn
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logoutUser')
      return this.$forceUpdate()
    }
  }
}
</script>

<style scoped lang='scss'>
.navbar {
  background-color: #333;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0;
}

.navbar-link {
  text-decoration: none;
  color: #fff;
  font-size: 1.2em;
  transition: color 0.3s;

  &:hover {
    color: #aaa;
  }
}

.left-section {
  display: flex;
  gap: 20px;
  align-items: center;
  color: #fff;
  font-weight: 700;

  .navbar-link {
    font-weight: bold;
  }
}

.right-section {
  display: flex;
  gap: 20px;
  align-items: center;

  .logo-link {
    img {
      width: 50px;
      height: auto;
    }
  }

  .loginknop {
    margin-bottom: -10px;

    button {
      background-color: #006400;
      color: #fff;
      font-size: 1em;
      padding: 8px 12px;
      transition: background-color 0.3s;

      &:hover {
        background-color: #004c00;
      }
    }
  }

  .cartIcon {
    width: 40px;
    height: 40px;

    .cart {
      height: 40px;
      background-image: url("../assets/cart.png");
      background-size: cover;
      width: 100%;
      position: relative;

      #cartItems {
        background: #045D5D;
        height: 20px;
        width: 20px;
        display: flex;
        align-items: center;
        border-radius: 50%;
        position: absolute;
        top: 0;
        right: 0;
      }

      .cartAmount {
        color: #fff;
        font-size: 0.8em;
        margin: 0 auto;
      }
    }
  }
}

.loguitknop {
  background-color: #dc3545;
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.loguitknop:hover {
  background-color: #c82333;
}
</style>
