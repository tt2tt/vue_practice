<template>
  <div class="home">
    <Adresses/>
  </div>
</template>

<script>
// @ is an alias to /src
import Adresses from '@/components/Adresses.vue'

export default {
  name: 'Home',
  components: {
    Adresses
  }
}
</script>
