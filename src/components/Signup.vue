<template>
  <div class="bg-gray-200 h-screen">
    <div class="w-full max-w-xs m-auto my-0 pt-16">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-1" @submit.prevent="signup">
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input v-model="email" class="shadow appearance-none border rounded py-2 px-3 w-5/6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input v-model="password" class="shadow appearance-none border border-red-500 rounded w-5/6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
          <!-- <p class="text-red-500 text-xs italic">Please enter a password.</p> -->
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Confirm Password
          </label>
          <input v-model="password_confirmation" class="shadow appearance-none border border-red-500 rounded w-5/6 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
          <!-- <p class="text-red-500 text-xs italic">Please confirm a password.</p> -->
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-indigo-500 hover:bg-indigo-700 text-white border-none font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Sign Up
          </button>
          <!-- <a class="inline-block no-underline align-baseline font-bold text-sm text-indigo-500 hover:text-blue-800" href="#"> -->
          <div class="inline-block no-underline align-baseline font-bold text-sm text-indigo-500 hover:text-blue-800"><router-link to="/signin" class="link-grey">Sign In</router-link></div>
          <!-- </a> -->
        </div>
      </form>
    </div>
    <p class="text-center text-gray-500 text-xs mt-0 py-0">
      &copy;2019 Ezyblog Corp. All rights reserved.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Signup',
  data () {
    return {
      email: '',
      password: '',
      password_confirmation: '',
      error: ''
    }
  },
  created () {
    this.checkedSignedIn()
  },
  updated () {
    this.checkedSignedIn()
  },
  methods: {
    signup () {
      this.$http.plain.post('/signup', { email: this.email, password: this.password, password_confirmation: this.password_confirmation })
        .then(response => this.signupSuccessful(response))
        .catch(error => this.signupFailed(error))
    },
    signupSuccessful (response) {
      if (!response.data.csrf) {
        this.signupFailed(response)
        return
      }

      localStorage.csrf = response.data.csrf
      localStorage.signedIn = true
      this.error = ''
      location.reload()
      this.$router.replace('/members')
    },
    signupFailed (error) {
      this.error = (error.response && error.response.data && error.response.data.error) || 'Something went wrong'
      delete localStorage.csrf
      delete localStorage.signedIn
    },
    checkedSignedIn () {
      if (localStorage.signedIn) {
        this.$router.replace('/members')
        this.$forceUpdate()
      }
    }
  }
}
</script>
