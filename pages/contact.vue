<script setup lang="ts">
import { ref } from 'vue'


const name = ref('')
const email = ref('')
const message = ref('')

const submitForm = () => {
  // Handle form submission
  console.log('Name:', name.value)
  console.log('Email:', email.value)
  console.log('Message:', message.value)
  // Add your form submission logic here
}
</script>

<style>
/* Additional styling if needed */
</style>


<template>
    <div class="bg-white min-h-screen flex flex-col justify-between">
      <Header />
      <div class="container mx-auto px-4 py-16">
        <h1 class="text-3xl md:text-5xl font-bold text-center mb-10 text-black">Contact Us</h1>
        <div class="flex flex-col md:flex-row justify-between items-center md:items-start">
          <div class="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <h2 class="text-2xl font-semibold mb-4 text-black">Get in Touch</h2>
            <p class="text-lg mb-4 text-black">We would love to hear from you! Please fill out the form below and we will get in touch with you shortly.</p>
            <div class="text-lg">
              <p class="mb-2 text-black"><strong>Email:</strong> phantomcappro@aol.com</p>
              <p class="mb-2 text-black"><strong>Phone:</strong> (231) 252-6405</p>
              <p class="mb-2 text-black"><strong>Address: </strong>USA</p>
            </div>
          </div>
          <div class="w-full md:w-1/2 bg-gray-100 p-8 rounded-lg shadow-lg">
            <form @submit.prevent="submitForm">
              <div class="mb-4">
                <label for="name" class="block text-lg font-medium text-black">Name</label>
                <input type="text" id="name" v-model="name" class="mt-1 p-2 block w-full border border-gray-300 rounded-md" required />
              </div>
              <div class="mb-4">
                <label for="email" class="block text-lg font-medium text-black">Email</label>
                <input type="email" id="email" v-model="email" class="mt-1 p-2 block w-full border border-gray-300 rounded-md" required />
              </div>
              <div class="mb-4">
                <label for="message" class="block text-lg font-medium text-black">Message</label>
                <textarea id="message" v-model="message" rows="4" class="mt-1 p-2 block w-full border border-gray-300 rounded-md" required></textarea>
              </div>
              <button type="submit" class="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </template>
  
