<script setup lang="ts">
import useBlogResource from "../composables/useBlogResource"


const {blogs} = useBlogResource("events");
const title = ref('Well Within Farm Sanctuary Events')
const description = ref('Well Within Farm description');
const ogTitle = ref('Well Within Farm - Events');
</script>
<template>
  <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="description" />
      <Meta name="og:title" :content="ogTitle" />
  </Head>
  <Header />
  <div
    class="relative h-[400px] md:h-[650px] w-full bg-cover bg-center"
    style="
      background-image: url('/images/bg-image.jpeg');
      background-position: 50% 100%;
      background-repeat: no-repeat;
      background-size: cover;
    "
  >
  <div class="hidden md:block md:absolute md:pb-28 md:px-20">
    <img src="/images/logo-nobg.png" alt="" class="h-48">
  </div>
    <div class="absolute inset-0 opacity-50"></div>
    <!-- Optional: Background overlay for better text visibility -->
    <div class="relative z-10 flex flex-col items-center justify-center h-full">
      <h1 class="text-2xl md:text-6xl text-white font-bold mb-4">
        Events at Well Within Farm Sanctuary
      </h1>
      <p class="text-xl text-center md:text-2xl text-white">
        The idea of Well Within Farm Sanctuary was planted with the intention of
        being more than a traditional farm.
      </p>
    </div>
  </div>

  <div class="container mx-auto px-2 w-full my-20 md:px-20">
    <h1 class="text-center text-5xl font-bold">Events</h1>
    <div class="md:text-left text-xl mt-10 font-normal">
      <p class="pb-5 leading-8">
        Our intimate micro event venue offers a unique experience for couples, groups,
      and individuals seeking a smaller, more personal, meaningful space to hold
      special ceremonies or host special gatherings, including traditional, and
      non-traditional weddings, baby showers, birthday parties, tea parties, drum
      circles, book clubs, classes, guild meetings and more. Surrounded by stunning
      nature, your special gathering at Well Within Farm Sanctuary will be truly
      magical and memorable.</p>
      <p class="pb-5 leading-8">
      A micro gathering is an event that typically has less than 30 people, often less
      than 10 including vendors.</p>
      <p class="pb-5 leading-8">
      Please contact us to schedule a special consultation, where we can address all
      specific questions, pricing and requests.
      We look forward to helping you create the micro event of your dreams.<br>
      Be well
      &
      Stay wonderful.
      </p>
    


      
    </div>
     <!-- Image gallery -->
     <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
      <!-- <div class="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
        <img src="/images/imgs/5.png" alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center">
      </div> -->
      <div class="lg:grid lg:grid-cols-1 lg:gap-y-8  mb-5">
        <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg mb-5">
          <img src="/images/imgs/5.png" alt="Model wearing plain black basic tee." class="h-full w-full object-cover object-center">
        </div>
        <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
          <img src="/images/imgs/1.png" alt="Model wearing plain gray basic tee." class="h-full w-full object-cover object-center">
        </div>
      </div>
      <div class="lg:grid lg:grid-cols-1 lg:gap-y-8 mb-5">
        <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg  mb-5">
          <img src="/images/imgs/2.png" alt="Model wearing plain black basic tee." class="h-full w-full object-cover object-center">
        </div>
        <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
          <img src="/images/imgs/4.png" alt="Model wearing plain gray basic tee." class="h-full w-full object-cover object-center">
        </div>
      </div>
      <div class="lg:grid lg:grid-cols-1 lg:gap-y-8  mb-5">
        <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg  mb-5">
          <img src="/images/imgs/3.png" alt="Model wearing plain black basic tee." class="h-full w-full object-cover object-center">
        </div>
        <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
          <img src="/images/imgs/6.png" alt="Model wearing plain gray basic tee." class="h-full w-full object-cover object-center">
        </div>
      </div>
      <!-- <div class="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
        <img src="/images/imgs/3.png" alt="Model wearing plain white basic tee." class="h-full w-full object-cover object-center">
      </div> -->
     </div>
     

  </div>
  <section class="px-10 py-20 bg-light-beige">
  <h1 class="text-5xl text-center font-bold">Our Latest Blogs</h1>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 items-center py-10">
    <div class="m-10 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-auto overflow-hidden items-center" v-for="blog in blogs" :key="blog.id">
      <a href="#">
        <h5 class="mb-2 text-2xl font-semibold text-center tracking-tight text-gray-900 dark:text-white pb-5">{{ blog.title }}</h5>
      </a>
      <div class="flex items-stretch pb-5">
    <img :src="blog.coverImage" alt="Blog Cover Image" class="w-full self-stretch object-contain h-56">
</div>

      <div class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        <span v-html="blog.body.split(' ').slice(0, 30).join(' ')"></span>
        <NuxtLink :to="`/blogs/${blog.id}`" class="text-blue-600 underline">Read More...</NuxtLink>
      </div>
    </div>
  </div>
</section>


  <!-- Testimonials -->

 <Testimonials />

 <!-- Reviews -->
  <Reviews />
  <!-- Footer -->


  <Footer />
</template>
