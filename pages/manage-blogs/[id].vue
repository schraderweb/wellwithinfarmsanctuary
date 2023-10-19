<script setup lang="ts">
import useBlogResource from "../../composables/useSingleBlog"
import { useRouter } from 'vue-router';
import useAuth from "../../composables/useAuth"

const {singleBlog, fetchSingleJob} = useBlogResource()
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
   
    await fetchSingleJob("blogs",route.params.id)

    if(singleBlog){

        title.value = singleBlog[0].title;
        subject.value = singleBlog[0].subject;
        body.value = singleBlog[0].body;
        
    }


})

</script>
<template>
    <Header />
    <EditBlog/>

    
 <Footer />   
</template>
