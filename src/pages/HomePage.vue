<template>
  <div class="container-fluid bg-dark">
    <home-component />
  </div>
</template>

<script>
import { reactive } from 'vue'
import HomeComponent from '../components/HomeComponent.vue'
export default {
  name: 'Home',
  components: { HomeComponent },
  setup() {
    const state = reactive({

    })
    return {
      state
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
