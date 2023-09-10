<script setup lang="ts"></script>
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
        The idea of Well Within Farm Sanctuary was planted with the intention of
        being more than a traditional farm. Its need was sprouted from the
        necessity to become sustainable in not only traditional farm practices
        but in many aspects of life.
      </p>
      <p class="pb-5 leading-8">
        Well Within Farm Sanctuary Is a place where a person can learn a skill,
        take a stroll through an LED light forest, hear beautiful music, host a
        magical event or gathering, relax in a wood fired sauna, plant a seed,
        eat pizza baked in an earthen oven, donate to a worthy cause, farm an
        idea, and cultivate peace well within their hearts and minds.
      </p>
      <p class="pb-5 leading-8">
        Please enjoy exploring our website to learn about our events, projects,
        offerings, and more at Well Within Farm Sanctuary.
      </p>
    </div>
  </div>
  <!-- Testimonials -->

 <Testimonials />

 <!-- Reviews -->
  <Reviews />
  <!-- Footer -->


  <Footer />
</template>
