<script setup lang="ts">
import { useRouter } from 'vue-router';
import useAuth from "../../composables/useAuth"


const {blogs} = useBlogResource("blogs")
const router = useRouter()
const { isAuthenticated, loading } = useAuth();

watch(loading, (isLoading) => {
  if (!isLoading) {
    if (!isAuthenticated()) {
      router.push('/login');
    }
  }
});

</script>
<template>
   <Header />
  <CreateBlog />
</template>


