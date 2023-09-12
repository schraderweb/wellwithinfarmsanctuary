<script setup>
import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear());

import useAuth from "../composables/useAuth"
  import { useRouter } from 'vue-router';

  const {user, signOut} = useAuth()
  
</script>
<template>
   

   <footer style="background-color: #092d4c;">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <nuxt-link to="/" class="flex items-center">
                  <img src="/images/logo.png" class="h-20 mr-3" alt="FlowBite Logo" />
                  <span class="self-center md:text-2xl font-semibold whitespace-nowrap text-white">WellWithinFarmSanctuary</span>
              </nuxt-link>
             <p class="mt-10 text-white pr-5 md:p-0 md:w-96 ">The idea of Well Within Farm Sanctuary was planted with the intention of being more than a traditional farm. Its need was sprouted from the necessity to become sustainable in not only traditional farm practices but in many aspects of life</p>
            </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="mb-6 text-sm font-semibold uppercase text-white">QuickLinks</h2>
                  <ul class="font-medium text-white">
                      <li class="mb-2">
                          <a href="#" class="hover:underline">About</a>
                      </li>
                      <li class="mb-2">
                          <a href="#" class="hover:underline">Shop</a>
                      </li>
                      <li class="mb-2">
                          <a href="#" class="hover:underline">Events</a>
                      </li>
                      <li class="mb-2">
                          <a href="#" class="hover:underline">Blog</a>
                      </li>
                      <li class="mb-2">
                          <a href="#" class="hover:underline">Events</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold uppercase text-white">Quick Links</h2>
                  <ul class="text-white font-medium">
                      <li class="mb-2">
                          <a href="#" class="hover:underline ">Donate</a>
                      </li>
                      <li class="mb-2">
                          <a href="#" class="hover:underline">Testimonials</a>
                      </li>
                      <li class="mb-2">
                          <a href="#" class="hover:underline">Gallery</a>
                      </li>
                      <li class="mb-2">
                          <a href="#" class="hover:underline">FAQ</a>
                      </li>
                      <li class="mb-2">
                          <a href="#" class="hover:underline">Contact Us</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold uppercase text-white">Legal</h2>
                  <ul class="text-white  font-medium">
                      <li class="mb-4">
                          <a href="#" class="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
    </div>
    <div class="flex items-center flex-col md:justify-center bg-black py-10 md:space-x-32">
        <div v-if="!user" class="mb-5">
        <NuxtLink to="/login" class="text-lg font-bold leading-6 text-white hover:underline">Login</NuxtLink>
        </div> 
      <div>
        <span class="text-sm md:text-lg text-white sm:text-center ">Copyright © 2014- {{ currentYear }} <a href="#" class="hover:underline">WellWithinFarmSanctuary</a> | Website developed & hosted by <a href="https://schrader.co/" class="hover:text-red-600">Schrader Web Solutions</a>
          </span>
        </div>
 
      </div>

</footer>


</template>