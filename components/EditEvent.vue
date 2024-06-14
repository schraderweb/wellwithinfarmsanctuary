<script setup lang="ts">
// import { QuillEditor } from '@vueup/vue-quill'
// import '@vueup/vue-quill/dist/vue-quill.snow.css'
// import BlotFormatter from 'quill-blot-formatter'
import useEventResource from "../composables/useSingleEvent"
import { getStorage, ref as fbRef, uploadBytes, getDownloadURL } from 'firebase/storage';


const nuxtApp:any = useNuxtApp()


const {singleEvent, fetchSingleJob} = useEventResource()

const route:any = useRoute()

const router:any = useRouter()

const title = ref<string>("")

const subject = ref<string>("")
  const coverImage = ref<File | null>(null);


const body = ref<string>("")

onMounted(async()=>{
   
    await fetchSingleJob("events",route.params.id)

    if(singleEvent){

        title.value = singleEvent[0].title;
        subject.value = singleEvent[0].subject;
        body.value = singleEvent[0].body;
        
    }
})


// const modules = [{
//     name: 'blotFormatter',  
//     module: BlotFormatter, 
//     options: {/* options */}
//   }
// ]

const handleFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files) {
    coverImage.value = input.files[0];
  }
};

const uploadToStorage = async (file: File) => {
  const storage = getStorage(nuxtApp.$firebase);
  const storageRef = fbRef(storage, 'coverImages/' + file.name);

  await uploadBytes(storageRef, file);
  const downloadURL = await getDownloadURL(storageRef);

  return downloadURL;
};



const update = async() => {
  let imageUrl = '';
  if (coverImage.value) {
    imageUrl = await uploadToStorage(coverImage.value);
  }

  const docRef = nuxtApp.$doc(nuxtApp.$db, "events", route.params.id);
  const docSnap = await nuxtApp.$getDoc(docRef);

  if (docSnap.exists()) {
    const updateEvent = nuxtApp.$doc(nuxtApp.$db, "events", route.params.id);
    await nuxtApp.$updateDoc(updateEvent, {
      title: title.value,
      subject: subject.value,
      coverImage: imageUrl || singleEvent[0].coverImage,  // Use the new URL if uploaded, else keep the old one.
      body: body.value
    });

    router.push('/manage-events');
  }
};


</script>
<template>
  <ClientOnly>
    <form  method="POST" @submit.prevent="update" class="mx-auto mt-10 max-w-xl sm:mt-14">
    <div class="sm:col-span-2 mt-6">
        <label for="company" class="block text-sm font-semibold leading-6 text-gray-900">Title: </label>
        <div class="mt-2.5">
          
          <input type="text" name="company" id="company"  autocomplete="organization" placeholder="Enter Post Title" v-model="title"   class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
      </div>
      <div class="sm:col-span-2 mt-6">
        <label for="company" class="block text-sm font-semibold leading-6 text-gray-900">Subject: </label>
        <div class="mt-2.5">
          <input type="text" name="company" id="company" autocomplete="organization" placeholder="Enter Post Subject" v-model="subject" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
      </div>
      <div class="sm:col-span-2 mt-6">
        <label for="coverImage" class="block text-sm font-semibold leading-6 text-gray-900">Upload Cover Image: </label>
        <div class="mt-2.5">
          <input type="file" id="coverImage" @change="handleFileChange" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required>
        </div>
      </div>
      <div class="sm:col-span-2 mt-6 mb-2">
        <label for="company" class="block text-sm font-semibold leading-6 text-gray-900">Body: </label>
    <QuillEditor theme="snow" toolbar="full" v-model:content="body" contentType="html" placeholder="Write here" />
 </div>
 <div class="mt-10 mb-20">
      <button type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Update</button>
    </div>
  </form>
</ClientOnly>
  </template>
  

<style scoped>
 

</style>