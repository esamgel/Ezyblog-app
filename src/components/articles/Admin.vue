<template>
    <div class="flex flex-col md:flex-row xl:mt-12">

        <!-- Nav sidebar -->
        <div class="bg-gray-700 xl:fixed shadow-xl xl:h-screen pin-b mt-10 xl:mt-0 w-full md:w-48">

            <div class="md:mt-12 md:w-48 md:fixed md:pin-l md:pin-t content-center md:content-start text-left justify-between">
                <ul class="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left">
                    <li class="mr-3 flex-1">
                        <router-link to="/articles" class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-grey-900 hover:border-pink-500">
                            <i class="fas fa-tasks pr-0 md:pr-3">
                              <svg class="fill-current h-8 w-8 mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11 9V5H9v4H5v2h4v4h2v-4h4V9h-4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20z"/></svg>
                            </i><span class="pb-1 md:pb-0 text-xs md:text-base text-grey-dark md:text-grey-light block md:inline-block">New Article</span>
                        </router-link>
                    </li>
                    <li class="mr-3 flex-1">
                        <a href="#" class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-grey-900 hover:border-purple-500">
                            <i class="fa fa-envelope pr-0 md:pr-3">
                              <svg class="fill-current h-8 w-8 mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg>
                            </i><span class="pb-1 md:pb-0 text-xs md:text-base text-grey-dark md:text-grey-light block md:inline-block">Comments</span>
                        </a>
                    </li>
                    <li class="mr-3 flex-1">
                        <a href="#" class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-blue-900">
                            <i class="fas fa-chart-area pr-0 md:pr-3 text-blue-dark">
                              <svg class="fill-current h-8 w-8 mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M1 10h3v10H1V10zM6 0h3v20H6V0zm5 8h3v12h-3V8zm5-4h3v16h-3V4z"/></svg>
                            </i><span class="pb-1 md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block">Analytics</span>
                        </a>
                    </li>
                    <li class="mr-3 flex-1">
                        <a href="#" class="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-grey-900 hover:border-red-500">
                            <i class="fa fa-wallet pr-0 md:pr-3">
                              <svg class="fill-current h-8 w-8 mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M18 6V4H2v2h16zm0 4H2v6h16v-6zM0 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm4 8h4v2H4v-2z"/></svg>
                            </i><span class="pb-1 md:pb-0 text-xs md:text-base text-grey-dark md:text-grey-light block md:inline-block">Payments</span>
                        </a>
                    </li>
                </ul>
            </div>

        </div>

        <div class="main-content flex-1 flex-wrap bg-gray-200 xl:ml-48 mt-0 md:mt-10 xl:mt-0 pb-24 md:pb-5">

            <div class="bg-blue-900 p-2 shadow text-xl text-white">
                <h3 class="pl-2">Analytics</h3>
            </div>

            <div class="flex flex-wrap">
                <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                <!--Metric Card-->
                    <div class="bg-green-200 border-b-4 border-green-700 rounded-lg shadow-lg p-5">
                        <div class="flex flex-row items-center">
                            <div class="flex-shrink pr-4">
                                <div class="rounded-full p-5 bg-green-700">
                                  <i class="fa fa-wallet fa-2x fa-inverse">
                                    <svg class="fill-current h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm1-5h1a3 3 0 0 0 0-6H7.99a1 1 0 0 1 0-2H14V5h-3V3H9v2H8a3 3 0 1 0 0 6h4a1 1 0 1 1 0 2H6v2h3v2h2v-2z"/></svg>
                                  </i></div>
                            </div>
                            <div class="flex-1 text-right md:text-center">
                                <h5 class="uppercase text-grey-600">Total Click-Revenue</h5>
                                <h3 class="text-3xl">$3249<span class="text-green"><i class="fas fa-caret-up"></i></span></h3>
                            </div>
                        </div>
                    </div>
                    <!--/Metric Card-->
                </div>
                <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                    <!--Metric Card-->
                    <div class="bg-orange-200 border-b-4 border-orange-700 rounded-lg shadow-lg p-5">
                        <div class="flex flex-row items-center">
                            <div class="flex-shrink pr-4">
                                <div class="rounded-full p-5 bg-orange-900">
                                  <i class="fas fa-users fa-2x fa-inverse">
                                    <svg class="fill-current h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5 5a5 5 0 0 1 10 0v2A5 5 0 0 1 5 7V5zM0 16.68A19.9 19.9 0 0 1 10 14c3.64 0 7.06.97 10 2.68V20H0v-3.32z"/></svg>
                                  </i>
                                </div>
                            </div>
                            <div class="flex-1 text-right md:text-center">
                                <h5 class="uppercase text-grey-dark">Total Visitors</h5>
                                <h3 class="text-3xl">249 <span class="text-orange"><i class="fas fa-exchange-alt"></i></span></h3>
                            </div>
                        </div>
                    </div>
                    <!--/Metric Card-->
                </div>
                <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                    <!--Metric Card-->
                    <div class="bg-yellow-200 border-b-4 border-yellow-700 rounded-lg shadow-lg p-5">
                        <div class="flex flex-row items-center">
                            <div class="flex-shrink pr-4">
                                <div class="rounded-full p-5 bg-yellow-700">
                                  <i class="fas fa-user-plus fa-2x fa-inverse">
                                    <svg class="fill-current h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z"/></svg>
                                  </i>
                                </div>
                            </div>
                            <div class="flex-1 text-right md:text-center">
                                <h5 class="uppercase text-grey-700">New Visitors</h5>
                                <h3 class="text-3xl">2 <span class="text-yellow-700"><i class="fas fa-caret-up"></i></span></h3>
                            </div>
                        </div>
                    </div>
                    <!--/Metric Card-->
                </div>
                <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                    <!--Metric Card-->
                    <div class="bg-blue-200 border-b-4 border-blue-700 rounded-lg shadow-lg p-5">
                        <div class="flex flex-row items-center">
                            <div class="flex-shrink pr-4">
                                <div class="rounded-full p-5 bg-blue-700">
                                  <i class="fas fa-server fa-2x fa-inverse">
                                    <svg class="fill-current h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-7.59V4h2v5.59l3.95 3.95-1.41 1.41L9 10.41z"/></svg>
                                  </i>
                                </div>
                            </div>
                            <div class="flex-1 text-right md:text-center">
                                <h5 class="uppercase text-grey-700">Server Uptime</h5>
                                <h3 class="text-3xl">152 days</h3>
                            </div>
                        </div>
                    </div>
                    <!--/Metric Card-->
                </div>
                <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                    <!--Metric Card-->
                    <div class="bg-indigo-200 border-b-4 border-indigo-700 rounded-lg shadow-lg p-5">
                        <div class="flex flex-row items-center">
                            <div class="flex-shrink pr-4">
                                <div class="rounded-full p-5 bg-indigo-700">
                                  <i class="fas fa-tasks fa-2x fa-inverse">
                                    <svg class="fill-current h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M1 4h2v2H1V4zm4 0h14v2H5V4zM1 9h2v2H1V9zm4 0h14v2H5V9zm-4 5h2v2H1v-2zm4 0h14v2H5v-2z"/></svg>
                                  </i>
                                </div>
                            </div>
                            <div class="flex-1 text-right md:text-center">
                                <h5 class="uppercase text-grey-700">To Do List</h5>
                                <h3 class="text-3xl">7 tasks</h3>
                            </div>
                        </div>
                    </div>
                    <!--/Metric Card-->
                </div>
                <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                    <!--Metric Card-->
                    <div class="bg-red-200 border-b-4 border-red-700 rounded-lg shadow-lg p-5">
                        <div class="flex flex-row items-center">
                            <div class="flex-shrink pr-4">
                                <div class="rounded-full p-5 bg-red-700">
                                  <i class="fas fa-inbox fa-2x fa-inverse">
                                    <svg class="fill-current h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 8a6 6 0 0 1 4.03-5.67 2 2 0 1 1 3.95 0A6 6 0 0 1 16 8v6l3 2v1H1v-1l3-2V8zm8 10a2 2 0 1 1-4 0h4z"/></svg>
                                  </i>
                                </div>
                            </div>
                            <div class="flex-1 text-right md:text-center">
                                <h5 class="uppercase text-grey-dark">Noticifications</h5>
                                <h3 class="text-3xl">3 <span class="text-red"><i class="fas fa-caret-up"></i></span></h3>
                            </div>
                        </div>
                    </div>
                    <!--/Metric Card-->
                </div>

            </div>

            <div class="w-full md:w-4/5 xl:w-full p-3">

                <div class="bg-white border-transparent rounded-lg shadow-lg">
                        <div class="bg-gray-400 uppercase text-gray-600 border-b-2 border-gray-500 rounded-tl-lg rounded-tr-lg p-2">
                        <h5 class="uppercase text-gray-700">Articles</h5>
                    </div>
                    <table class="text-left bg-white shadow-md rounded-lg">
                        <thead class="bg-gray-100 flex text-gray-600 w-full rounded-lg">
                            <tr class="flex w-full mb-2">
                                <th class="p-1 w-1/4 pl-4">Title</th>
                                <th class="p-1 w-1/4 text-align-left">Contents</th>
                                <th class="p-1 w-1/4"></th>
                                <th class="p-1 w-1/4"></th>
                            </tr>
                        </thead>
                        <tbody class="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full" style="height: 50vh;">
                            <tr class="flex w-full mb-2" v-for="article in articles" :key="article.id" :article="article">
                                <td class="p-4 w-1/4 text-gray-700">{{article.title}}</td>
                                <td class="p-4 w-3/4 text-gray-700">{{article.body.substring(0,110)+" ......"}}</td>
                                <td class="p-4 w-1/6 text-gray-700">
                                    <button class="bg-transparent hover:bg-indigo-500 text-indigo-700 font-semibold hover:text-white py-2 px-4 border border-indigo-500 hover:border-transparent rounded"
                                    @click.prevent="editArticle(article)">Edit</button>
                                </td>
                                <td class="p-4 w-auto">
                                    <button class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
                                    @click.prevent="removeArticle(article)">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<!-- eslint-disable -->

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
  background-color: #2196F3;
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