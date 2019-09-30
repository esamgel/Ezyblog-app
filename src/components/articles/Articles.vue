<template>
  <div class="max-w-md m-auto py-20">
    <div class="text-red" v-if="error">{{ error }}</div>
    <h3 class="font-mono font-regular text-3xl mb-4 text-gray-700">Create a new article</h3>

    <form @submit.prevent="saveDraft">
      <div class="md:flex md:items-center mb-6">
        <div class="mb-4">
          <label for="article_title" class="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4">Title</label>
        </div>
        <div class="w-auto md:w-full">
          <input
            type="text"
            id="article_title"
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            autofocus
            autocomplete="off"
            placeholder="Type a article name"
            v-model="newArticle.title">
        </div>
      </div>

      <div class="mb-6">
        <div class="md:w-1/3">
          <label for="article_body" class="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4">Body</label>
        </div>
        <div class="md:w-full">
          <textarea
            type="text"
            id="article_body"
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            autofocus
            autocomplete="off"
            placeholder="Type your article body here"
            v-model="newArticle.body">
          </textarea>
        </div>
      </div>
    </form>

    <div class="flex-1 flex justify-between flex-wrap pr-4">
      <form @submit.prevent="saveDraft">
          <button class="bg-white hover:border-indigo-700 text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Save draft
          </button>
      </form>

      <form @submit.prevent="addArticle">
          <button class="bg-indigo-600 text-gray-100 hover:bg-indigo-800 hover:text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Publish Article
          </button>
      </form>
    </div>

    <hr class="border border-grey-light my-6" />

    <ul class="list-reset mt-4">
      <li class="py-4" v-for="article in articles" :key="article.id" :article="article">
        <div class="flex items-center justify-between flex-wrap">
          <div class="flex-1 flex justify-between flex-wrap pr-4">
          <p class="block flex text-gray-700 font-mono font-semibold flex items-center">
            <svg class="fill-current text-indigo-800 w-6 h-6 mr-2" viewBox="0 0 100 100" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke="#222F3E" stroke-width="4">
            <path d="M78.8 21.2H98v67.207C98 93.699 93.702 98 88.4 98c-5.303 0-9.6-4.295-9.6-9.593"/>
            <path d="M89.843 98H11.597C6.307 98 2 93.702 2 88.4V2h76.8v86.407c0 5.298 4.29 9.593 9.606 9.593h1.437zM16 28h52.005M16 40h52.005M16 52h52.005M16 64h52.005M16 76h52.005M16 16h52.005"/></g></svg>
            {{ article.title }}
          </p>
          <p class="text-red-500 text-left" v-if="article.tag == 'draft'">{{ article.tag }}</p>
        </div>

        <button class="bg-transparent text-gray-600 text-sm hover:bg-indigo-800 hover:text-white text-indigo border border-indigo no-underline font-bold py-2 px-4 mr-2 rounded"
          @click.prevent="editArticle(article)">Edit</button>

        <button class="bg-transparent text-red-600 text-sm hover:bg-red-600 text-red hover:text-white no-underline font-bold py-2 px-4 rounded border border-red"
         @click.prevent="removeArticle(article)">Delete</button>
        </div>

        <div v-if="article == editedArticle">
          <form action="" @submit.prevent="updateArticle(article)">
            <div class="mb-6 p-4 bg-white rounded border border-grey-light mt-4">

              <div class="mb-6">
                <label class="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4">Title</label>
                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" v-model="article.title">
              </div>

              <div class="mb-6">
                <label class="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4">Body</label>
                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" v-model="article.body">
              </div>

              <div class="mb-6">
                <label class="label">Tag</label>

                <div class="flex-1 flex justify-left flex-wrap pr-4">
                  <label class="switch">
                    <input type="checkbox"  v-model="article.tag" true-value="publish" false-value="draft">
                    <span class="slider round"></span>
                  </label>

                  <input type="text" v-model="article.tag" class="ml-2">
                </div>
              </div>

              <input type="submit" value="Update" class="bg-transparent text-sm hover:bg-blue hover:text-indigo-900 hover:border-indigo-800 text-blue border border-gray-400 no-underline font-bold py-2 px-4 mr-2 rounded">

            </div>
          </form>
        </div>
      </li>
    </ul>
  </div>
</template>
<script src="../node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js"></script>
<script src="../node_modules/@ckeditor/ckeditor5-vue/dist/ckeditor.js"></script>
<script>
export default {
  name: 'Records',
  data () {
    return {
      articles: [],
      newArticle: [],
      error: '',
      editedArticle: ''
    }
  },
  created () {
    if (!localStorage.signedIn) {
      this.$router.replace('/')
    } else {
      this.$http.secured.get('/api/v1/articles')
        .then(response => { this.articles = response.data })
        .catch(error => this.setError(error, 'Something went wrong'))

      this.$http.secured.get('/api/v1/articles')
        .then(response => { this.artists = response.data })
        .catch(error => this.setError(error, 'Something went wrong'))
    }
  },
  methods: {
    use( CKEditor ){
    },
    setError (error, text) {
      this.error = (error.response && error.response.data && error.response.data.error) || text
    },
    saveDraft () {
      const value = this.newArticle
      if (!value) {
        return
      }
      this.$http.secured.post('/api/v1/articles/', { article: { title: this.newArticle.title, body: this.newArticle.body, tag: 'draft' } })

        .then(response => {
          this.articles.push(response.data)
          this.newArticle = ''
        })
        .catch(error => this.setError(error, 'Cannot create draft article'))
    },
    addArticle () {
      const value = this.newArticle
      if (!value) {
        return
      }
      this.$http.secured.post('/api/v1/articles/', { article: { title: this.newArticle.title, body: this.newArticle.body, tag: 'publish' } })

        .then(response => {
          this.articles.push(response.data)
          this.newArticle = ''
        })
        .catch(error => this.setError(error, 'Cannot create article'))
    },
    removeArticle (article) {
      this.$http.secured.delete(`/api/v1/articles/${article.id}`)
        .then(response => {
          this.articles.splice(this.articles.indexOf(article), 1)
        })
        .catch(error => this.setError(error, 'Cannot delete article'))
    },
    editArticle (article) {
      this.editedArticle = article
    },
    updateArticle (article) {
      this.editedArticle = ''
      this.$http.secured.patch(`/api/v1/articles/${article.id}`, { article: { title: article.title, body: article.body, artist_id: article.artist } })
        .catch(error => this.setError(error, 'Cannot update article'))
    }
  }
}
</script>
<!-- eslint-disable -->

<style scoped>
  .switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #3c478d;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>>