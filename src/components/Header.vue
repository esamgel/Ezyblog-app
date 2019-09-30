<template>
  <header class="flex items-center pl-2 pr-2 justify-between flex-wrap bg-indigo-600 py-1 fixed w-full z-10 top-0 shadow-base mb-4">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
        <svg class="fill-current h-8 w-8 mr-2" viewBox="0 0 24 24" width="24" height="24"><title>Blog</title><path d="M18 9.87V20H2V9.87a4.25 4.25 0 0 0 3-.38V14h10V9.5a4.26 4.26 0 0 0 3 .37zM3 0h4l-.67 6.03A3.43 3.43 0 0 1 3 9C1.34 9 .42 7.73.95 6.15L3 0zm5 0h4l.7 6.3c.17 1.5-.91 2.7-2.42 2.7h-.56A2.38 2.38 0 0 1 7.3 6.3L8 0zm5 0h4l2.05 6.15C19.58 7.73 18.65 9 17 9a3.42 3.42 0 0 1-3.33-2.97L13 0z"></path></svg>
        <a href="/" class="uppercase text-sm font-mono pl-4 font-semibold no-underline text-gray hover:text-indigo-darker">EZBlog</a>
    </div>
    <div class="block lg:hidden">
      <button type="button" @click.prevent="showMenu=!showMenu" class="flex items-center px-3 py-2 border rounded text-indigo-200 border-indigo-400 hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div v-show="showMenu || bigScreen" class="w-full pl-6 flex-grow lg:flex lg:items-center lg:w-auto shadow-base">
      <div class="text-sm lg:flex-grow ">
        <router-link to="/blog" class="block mt-4 lg:inline-block lg:mt-0 text-indigo-200 no-underline hover:text-white mr-4">Blog</router-link>
        <router-link to="/articles" class="block mt-4 lg:inline-block lg:mt-0 text-indigo-200 no-underline hover:text-white mr-4" v-if="signedIn()">My Articles</router-link>
        <router-link to="/members" class="block mt-4 lg:inline-block lg:mt-0 text-indigo-200 no-underline hover:text-white mr-4" v-if="signedIn()">Members</router-link>
      </div>
      <div>
        <router-link to="/signin" class="block mt-4 lg:inline-block lg:mt-0 text-indigo-200 no-underline hover:text-white mr-4" v-if="!signedIn()">Sign In</router-link>
        <button type="button" @click.prevent="signOut()" class="block mt-4 lg:inline-block lg:mt-0 text-indigo-200 no-underline hover:text-white mr-4" v-if="signedIn()">Sign out</button>
        <router-link to="/signup" class="inline-block text-sm px-4 py-2 leading-none border rounded-full text-white border-white hover:border-transparent hover:text-indigo-500 hover:bg-white mt-4 lg:mt-0" v-if="!signedIn()">Sign Up</router-link>
      </div>
      <a href="#" class="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor">
        <div v-if="signedIn()">
          <svg class="rounded-full w-10 h-10 border-2 border-transparent hover:border-indigo-400 fill-current h-8 w-8 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M53.566 44.783l-9.552-4.776A3.644 3.644 0 0 1 42 36.748V33c.268-.305.576-.698.904-1.162a21.964 21.964 0 0 0 2.969-5.984C47.098 25.477 48 24.345 48 23v-4c0-.88-.391-1.667-1-2.217V11s1.187-9-11-9c-12.188 0-11 9-11 9v5.783c-.609.55-1 1.337-1 2.217v4a3 3 0 0 0 1.383 2.517C26.382 29.869 29 33 29 33v3.655c0 1.333-.728 2.56-1.899 3.198L18.18 44.72A8.02 8.02 0 0 0 14 51.761V55h44v-3.043a8.022 8.022 0 0 0-4.434-7.174z" fill="#8697cb"/><path d="M18.18 44.72l5.946-3.243c-.034-.033-.005-.043.065-.036l2.91-1.587A3.643 3.643 0 0 0 29 36.655V33s-1.062-1.275-2.092-3.323l-.001-.003a20.31 20.31 0 0 1-.399-.844l-.054-.121a18.523 18.523 0 0 1-.386-.944l-.023-.065a18.79 18.79 0 0 1-.306-.896l-.077-.251a16.731 16.731 0 0 1-.278-1.038A2.992 2.992 0 0 1 24 23v-4c0-.88.391-1.667 1-2.217v-5.648C23.587 10.039 21.397 9 18 9 8.437 9 8 17 8 17v4.995c-.526.475-1 1.154-1 1.914v3.455c0 .911.479 1.711 1.194 2.174C9.057 33.296 11.955 36 11.955 36v3.157a3.146 3.146 0 0 1-1.64 2.762L3.61 46.122A6.928 6.928 0 0 0 0 52.203V55h14v-3.239a8.02 8.02 0 0 1 4.18-7.041z" fill="#556080"/><circle cx="48" cy="46" r="12" fill="#26b999"/><path d="M54.571 40.179a.999.999 0 0 0-1.392.25l-5.596 8.04-3.949-3.242a.999.999 0 1 0-1.268 1.546l4.786 3.929a1.003 1.003 0 0 0 1.455-.201l6.214-8.929a1.002 1.002 0 0 0-.25-1.393z" fill="#fff"/></svg>
        </div>
      </a>

    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      showMenu: false,
      window: {
        width: 0,
        height: 0
      }
    }
  },
  created () {
    this.signedIn()
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize () {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
    },
    setError (error, text) {
      this.error = (error.response && error.response.data && error.response.data.error) || text
    },
    signedIn () {
      return localStorage.signedIn
    },
    signOut () {
      this.$http.secured.delete('/signin')
        .then(response => {
          delete localStorage.csrf
          delete localStorage.signedIn
          this.$forceUpdate()
          this.$router.replace('/')
        })
        .catch(error => this.setError(error, 'Cannot sign out'))
    }
  },
  computed: {
    bigScreen () {
      if (this.window.width >= 1024) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
