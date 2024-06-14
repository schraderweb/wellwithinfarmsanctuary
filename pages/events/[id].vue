<script setup lang="ts">

import useEventResource from "../../composables/useSingleEvent"
const {singleEvent, fetchSingleJob} = useEventResource()

const title = ref<string>("")
const subject = ref<string>("")
const body = ref<string>("")
const route:any = useRoute()

onMounted(async()=>{
   
   await fetchSingleJob("events",route.params.id)

   if(singleEvent){

       title.value = singleEvent[0].title;
       subject.value = singleEvent[0].subject;
       body.value = singleEvent[0].body;
       
   }
})


</script>

<template>
    <Header />
    <article class="flex max-w-xl mt-20 flex-col items-start justify-between border-gray-100 mx-auto my-auto">
     <h1 class="text-2xl font-bold  ">{{ title }}</h1>
     <h6>{{ subject }}</h6>

     <p v-html="body" class="mt-2 mb-10"></p>

    </article>

<Footer />
</template>