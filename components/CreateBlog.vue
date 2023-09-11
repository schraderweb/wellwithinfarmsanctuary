<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getStorage, ref as fbRef, uploadBytes, getDownloadURL } from 'firebase/storage';

const router = useRouter();
const nuxtApp: any = useNuxtApp();

const title = ref<string>("");
const subject = ref<string>("");
const coverImage = ref<File | null>(null);
const body = ref<string>("");

const handleFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files) {
    coverImage.value = input.files[0];
  }
}

const uploadToStorage = async (file: File) => {
  const storage = getStorage(nuxtApp.$firebase);
  const storageRef = fbRef(storage, 'coverImages/' + file.name);
  
  await uploadBytes(storageRef, file);
  const downloadURL = await getDownloadURL(storageRef);

  return downloadURL;
}

const postBlog = async() => {
  try {
    let imageUrl = '';
    if (coverImage.value) {
      imageUrl = await uploadToStorage(coverImage.value);
    }

    const blogRef = await nuxtApp.$addDoc(nuxtApp.$collection(nuxtApp.$db, 'blogs'), {
      title: title.value,
      subject: subject.value,
      coverImage: imageUrl,
      body: body.value
    });

    router.push('/manage-blogs');
    console.log(blogRef);
  } catch(error) {
    console.log(error);
  }
}
</script>
<template>
  <ClientOnly>
    <form @submit.prevent="postBlog" class="mx-auto mt-10 max-w-xl sm:mt-14">
      <!-- Title Input -->
      <div class="sm:col-span-2 mt-6">
        <label for="title" class="block text-sm font-semibold leading-6 text-gray-900">Title: </label>
        <div class="mt-2.5">
          <input type="text" id="title" placeholder="Enter Post Title" v-model="title" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
      </div>

      <!-- Subject Input -->
      <div class="sm:col-span-2 mt-6">
        <label for="subject" class="block text-sm font-semibold leading-6 text-gray-900">Subject: </label>
        <div class="mt-2.5">
          <input type="text" id="subject" placeholder="Enter Post Subject" v-model="subject" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
      </div>

      <!-- Cover Image Input -->
      <div class="sm:col-span-2 mt-6">
        <label for="coverImage" class="block text-sm font-semibold leading-6 text-gray-900">Upload Cover Image: </label>
        <div class="mt-2.5">
          <input type="file" id="coverImage" @change="handleFileChange" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required>
        </div>
      </div>

      <!-- Body Editor -->
      <div class="sm:col-span-2 mt-6 mb-2">
        <label for="body" class="block text-sm font-semibold leading-6 text-gray-900">Body: </label>
        <QuillEditor theme="snow" toolbar="full" v-model:content="body" contentType="html" placeholder="Write here"/>
      </div>

      <!-- Submit Button -->
      <div class="mt-10 mb-20">
        <button type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
      </div>
    </form>
  </ClientOnly>
</template>



<style scoped>
  /* Your CSS styles */
</style>