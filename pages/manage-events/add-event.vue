<script setup lang="ts">
import { useRouter } from 'vue-router';
import useAuth from "../../composables/useAuth"

const {events} = useEventResource("events")
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
  <CreateEvent />
  <Footer />
</template>


