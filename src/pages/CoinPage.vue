<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-6">
        <div class="card bg-secondary">
          <img class="img-fluid" :src="state.coin.image.small" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { marketsService } from '../services/MarketService'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
export default {
  name: 'CoinPage',
  setup() {
    const route = useRoute()
    const state = reactive({
      coin: computed(() => AppState.activeCoin)
    })
    onMounted(() => marketsService.getOneMarketCoin(route.params.id))
    return {
      state
    }
  }
}
</script>

<style>

</style>
