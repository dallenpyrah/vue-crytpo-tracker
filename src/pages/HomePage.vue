<template>
  <div class="container-fluid">
    Hey
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'Home',
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
