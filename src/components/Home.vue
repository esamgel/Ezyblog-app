<template>
  <div class="leading-normal tracking-normal text-white gradient" style="font-family: 'Source Sans Pro', sans-serif pt-24">

    <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center h-screen lg:w-4/5">
        <!--Left Col-->
        <div class="flex flex-col w-full sm:w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <p class="uppercase tracking-loose xl:w-4/5 w-3/5 text-gray-700">Easy for bloggers</p>
            <h1 class="my-4 text-indigo-800 text-5xl font-bold leading-tight">We blog the talk!</h1>
            <p class="leading-normal text-gray-600 text-2xl mb-8">Publish your epic life experiences, let it known, Make it right!</p>

            <button type="button" class="mx-auto lg:mx-0 btn-grad hover:bg-indigo-500 text-gray-200 font-bold rounded-full my-6 py-4 px-8 shadow-lg">Subscribe</button>

        </div>
        <!--Right Col-->
        <div class="w-full md:w-3/5 py-6 text-center">
            <img class="w-full lg:w-4/5 z-50" src="@/assets/images/freepik_blog.png"/>
        </div>

    </div>

  </div>
</template>

<style>
.gradient {
  background: linear-gradient(to top, #dfe9f3 0%, white 100%)
}
.btn-grad {background-image: linear-gradient(to right, #4776E6 0%, #8E54E9 51%, #4776E6 100%)}
.btn-grad:hover { background-position: right center }
</style>
<!-- eslint-disable -->