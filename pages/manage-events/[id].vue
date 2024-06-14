<script setup lang="ts">
import useEventResource from "../../composables/useSingleEvent"
import { useRouter } from 'vue-router';
import useAuth from "../../composables/useAuth"

const {singleEvent, fetchSingleJob} = useEventResource()
const route:any = useRoute()

const title = ref<string>("")
const subject = ref<string>("")
const body = ref<string>("")

const router = useRouter()
const { isAuthenticated, loading } = useAuth();

watch(loading, (isLoading) => {
  if (!isLoading) {
    if (!isAuthenticated()) {
      router.push('/login');
    }
  }
});


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
    <EditEvent/>

    
 <Footer />   
</template>
