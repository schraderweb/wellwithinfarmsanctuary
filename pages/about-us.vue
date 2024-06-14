<script setup lang="ts">
import useBlogResource from "../composables/useBlogResource"


const {blogs} = useBlogResource("blogs")
</script>
<template>
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
        Well Within Farm Sanctuary
      </h1>
      <p class="text-xl text-center md:text-2xl text-white">
        The idea of Well Within Farm Sanctuary was planted with the intention of
        being more than a traditional farm.
      </p>
    </div>
  </div>

  <div class="container mx-auto px-2 w-full my-20 md:px-20">
    <h1 class="text-center text-5xl font-bold">About Us</h1>
    <div class="md:text-center text-xl mt-10 font-normal">
      <p class="pb-5 leading-8">
       Well Within Farm Sanctuary is more than just an amazing farm sanctuary tucked in the woods of northern Michigan, it is a lifestyle. Here we practice the ancient philosophy of Aryuveda, the science of life. This practice shows a direct correlation between how we create our products as well as the class offerings and gatherings we host here. 
<br /><br />
     Those behind the creative process at Well Within Farm Sanctuary have been concocting solutions to life’s ailments in real time, in extreme circumstances, under do or die conditions, using mostly foraged, gathered or given materials, (initially)as a way to soothe, understand, heal and celebrate life and all it holds. With hard fought experience, gained wisdom, advice from Sage Elders (of whom were sprinkled throughout the journey), a simple, nature driven, sustainable solution was unearthed, recognized, celebrated and utilized to promote physical and mental wellbeing. With a casual introduction to the ancient philosophy of Aryuveda and relying heavily on intuition, somewhere along the path emerged a natural guide of ancient life wisdom that not so surprising was also a natural guide of modern life wisdom. Some of those practices, remedies, rituals, food and drink, soaps, salves, butters, balms,walks, talks  and cycles were instinctively and directly related to that of ancient guides correlating with wellbeing. It is not surprising that the “Science of Life '' pertains to all life for all time. It is in this understanding that allows the knowledge to be freely accessible to every human being on Earth without exception. It is within this philosophy we can begin to simply, minimalisticly, and with enormous impact begin to change the world. 

      </p>
      <p class="pb-5 leading-8">
         We believe when you are able to access small bits of healthy practices in your life that these actions will compound into greater health benefits that will not only empower you but allow you the ability to be a more confident, healthy member of your community. When you start off small you have an even greater opportunity to grow in abundance naturally. 

      </p>
      <p class="pb-5 leading-8">
      Currently we are diving deep into the wonderful world of thermaculture, that is thermic bathing traditions such as Finland's sauna, Japan’s sento (bathouses) and the Yucatán temazcal (hot lodges) even designing constructing and creating Finnish inspired barrel sauna kits available in  DIY or assembly on site options, health and wellness products and apparel made in traditional ways using local business services and materials whenever possible. We are  particularly proud of our barrel sauna kits using primarily Michigan sourced cedar, local millwork, and glass suppliers. Each barrel sauna kit is built piece by piece right down to the unique millwork, individually handcrafted doors, beautiful benches, sleek roofing recommendations, and the option to have either a modern electric sauna stove , or a classic MI made Nippa wood fired sauna stove. Barrel Saunas have many benefits such as better air circulation, quicker heat time, no need for insulation and low maintenance. The health benefits of sauna use are plentiful.  Some important points are increased metabolic rate, promotion of natural healing, strengthens immune system, clears the complexion, reduces the toxins in the body, relieves tension and stress, improves circulation, and aids in athletic recovery to name a few. 
      </p>


   <p class="pb-5 leading-8">
 We hope you will visit our sanctuary shop for a complete overview of all our products. 
<br /><br />

Have a wonderful day and as always be well within.      </p>


      
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

  <!-- Footer -->


  <Footer />
</template>
