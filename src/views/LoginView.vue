<template>
  <main id='box'>
    <div class='background-image'></div>
    <section id='loginForm'>
      <span class='popup' v-if='$store.state.cart.length !== 0'>{{ this.loginPopup }}</span>
      <h2>Login</h2>
      <form>
        <div class='container'>
          <label v-bind:for="'uname'"><b>Email</b></label>
          <div class='flex'>
            <input v-model='email' type='text' v-bind:id="'uname'" placeholder='Email' name='uname' required>
            <span class='popup' v-if='incorrectCredentialsWarning'>{{ this.incorrectEmail }}</span>
          </div>

          <label v-bind:for="'psw'"><b>Wachtwoord</b></label>
          <div class='flex'>
            <input v-model='password' type='password' v-bind:id="'psw'" placeholder='Wachtwoord' name='psw' required>
            <span class='popup' v-if='incorrectCredentialsWarning'>{{ this.incorrectPassword }}</span>
          </div>
          <KnopComponent v-if='!userLoggedIn' @click.prevent='loginVerification'>Login</KnopComponent>

          <KnopComponent v-if='$store.state.userLoggedIn' @click.prevent='logout'>Logout</KnopComponent>
          <br>
        </div>
        <div class='container'>
          <span class='psw'><a href='#'>Wachtwoord vergeten?</a></span>
        </div>

      </form>
    </section>
  </main>
</template>

<script>
import gebruikers from '@/assets/gebruikers.json'
import router from '@/router'
import KnopComponent from '@/components/KnopComponent.vue'

export default {
  name: 'LoginView',
  components: {
    KnopComponent
  },
  data() {
    return {
      incorrectCredentialsWarning: false,
      incorrectEmail: 'Email niet gevonden',
      userLoggedIn: false,
      email: '',
      loginPopup: 'Login om verder te gaan',
      password: '',
      incorrectPassword: 'Foute wachtwoord'
    }
  },
  methods: {
    loginVerification() {
      gebruikers.users.forEach((user) => {
        if (user.email === this.email && user.password === this.password) {
          this.$store.commit('loginUser', { user })
          let navigatePath = '/'
          let originatedFrom = sessionStorage.getItem('originatedFrom')
          if (originatedFrom) {
            sessionStorage.setItem('originatedFrom', '')
            navigatePath = originatedFrom
          }
          router.push(navigatePath)
        } else {
          this.incorrectCredentialsWarning = true
        }
      })
    },
    logout() {
      this.$store.commit('logoutUser')
      router.push('/')
    }
  }
}
</script>

<style scoped>
main#box {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 30px;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('src/assets/gt.jpg');
  background-size: cover;
  background-position: center bottom;
  filter: blur(2px);
  z-index: 1;
}

section#loginForm {
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 500px;
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  color: #3d3d3d;
}

section#loginForm label,
section#loginForm input {
  display: block;
}

section#loginForm label {
  margin-bottom: 10px;
}

section#loginForm button {
  font-size: 1rem;
  font-weight: 700;
  background-color: #3498db;
  padding: 14px 32px;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  cursor: pointer;
  margin-bottom: 1rem;
  clear: both;
  transition: background-color 0.3s ease;
}

section#loginForm button:hover {
  background-color: #2980b9;
}

section#loginForm button a {
  position: relative;
  z-index: 2;
  color: #3498db;
  text-decoration: none;
}

section#loginForm button a:hover {
  color: #2980b9;
}

section#loginForm label.checkBox input {
  display: inline-flex;
}

section#loginForm input {
  margin-bottom: 1rem;
  padding: 0.5rem;
  background-color: #ecf0f1;
  border-radius: 5px;
  border: none;
}

section#loginForm input:active {
  border: none;
}

.flex {
  display: flex;
  align-content: center;
}

span.popup {
  font-size: 16px !important;
  font-weight: 500;
  color: red;
  padding: 0.8rem;
  width: fit-content;
  border: 1px solid red;
  border-radius: 5px;
  margin-left: 1em;
}

</style>