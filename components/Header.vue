  <script setup>
  import { ref } from 'vue'
  import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
  } from '@heroicons/vue/24/outline'
  import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'
  import useAuth from "../composables/useAuth"
  import { useRouter } from 'vue-router';

  const {user, signOut} = useAuth()
  const mobileMenuOpen = ref(false)
  const router = useRouter()

const logOut = async() =>{
    
  await signOut()
  router.push("/")


}

  </script>
<template>
  <header class="bg-white">
    <div class="w-full hidden lg:flex justify-center items-center mt-10 mb-10 lg:space-x-60 px-20">
      <div class="flex justify-between text-base "><img src="/images/icons8-phone-50.png" alt=""><span class="font-semibold text-xl">(616) 481-2097</span></div>
      <NuxtLink to="/">
      <img src="/images/logo.png" alt="" class="h-28">
      </NuxtLink>
      <div v-if="!user">
      <button class="border-2 border-red-700 py-2 px-6 text-red-700 text-lg font-semibold hover:bg-red-600 hover:text-white">Subscribe</button>
    </div>
    <div v-else>
      <button @click="logOut" class="border-2 border-red-700 py-2 px-6 text-red-700 text-lg font-semibold hover:bg-red-600 hover:text-white">Log Out</button>

    </div>
    </div>
    <nav class="mx-auto flex max-w-7xl items-center justify-between lg:justify-center  p-6 lg:px-8 bg-light-beige lg:max-w-full" aria-label="Global">
      <div class="flex lg:hidden">
        <NuxtLink to="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Well Within Farm Sancturay</span>
          <img class="h-20 w-auto" src="/images/logo.png" alt="Well WithinFarmSancturay" />
        </NuxtLink>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12 lg:mr-10">  
        <NuxtLink to="about-us" class="text-lg font-bold leading-6 text-gray-900 hover:underline">About Us</NuxtLink>
        <NuxtLink to="https://staywonderfulworld.com/" class="text-lg font-bold leading-6 text-gray-900 hover:underline">Shop</NuxtLink>
        <NuxtLink to="/blogs/" class="text-lg font-bold leading-6 text-gray-900 hover:underline">Blog</NuxtLink>
        <NuxtLink to="#" class="text-lg font-bold leading-6 text-gray-900 hover:underline">Events</NuxtLink>
        <NuxtLink to="#" class="text-lg font-bold leading-6 text-gray-900 hover:underline">Donate</NuxtLink>
        <NuxtLink to="#" class="text-lg font-bold leading-6 text-gray-900 hover:underline">Testimonials</NuxtLink>
        <NuxtLink to="#" class="text-lg font-bold leading-6 text-gray-900 hover:underline">Gallery</NuxtLink>
        <NuxtLink to="#" class="text-lg font-bold leading-6 text-gray-900 hover:underline">FAQ</NuxtLink>
        <NuxtLink to="#" class="text-lg font-bold leading-6 text-gray-900 hover:underline">Contact Us</NuxtLink>
      </PopoverGroup>
      <div class="hidden text-lg lg:flex lg:justify-end lg:ml-4">

        <div v-if="user">
        <NuxtLink to="/manage-blogs" class="text-lg font-bold leading-6 text-gray-900 hover:underline">Manage Blogs<span aria-hidden="true">&rarr;</span></NuxtLink>
      </div>
      </div>
    </nav>
    <Dialog as="div" class="z-50 lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-16 w-auto" src="/images/logo.png" alt="" />
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <NuxtLink to="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">About Us</NuxtLink>
              <NuxtLink to="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Shop</NuxtLink>
              <NuxtLink to="/blogs/" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Blog</NuxtLink>
              <NuxtLink to="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Events</NuxtLink>
              <NuxtLink to="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Donate</NuxtLink>
              <NuxtLink to="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Testimonials</NuxtLink>
              <NuxtLink to="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Gallery</NuxtLink>
              <NuxtLink to="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">FAQ</NuxtLink>
              <NuxtLink to="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Contact Us</NuxtLink>
            </div>
            <div class="py-6" v-if="user">
              <NuxtLink to="/manage-blogs" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Manage Blogs</NuxtLink>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

