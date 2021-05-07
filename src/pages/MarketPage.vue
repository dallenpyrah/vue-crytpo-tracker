<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-4 text-center">
        <h5>Search for coins</h5>
      </div>
    </div>
    <div class="row justify-content-center mt-3">
      <div class="col-4">
        <div class="form-group">
          <input type="text"
                 name=""
                 id=""
                 class="form-control p-4"
                 placeholder="Bitcoin, Ethereum, Doge"
                 v-model="state.query"
                 @input="searchCoins"
          >
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <CoinComponent v-for="coin in state.marketData" :key="coin.id" :coin-prop="coin">
      </CoinComponent>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { marketsService } from '../services/MarketService'
import { AppState } from '../AppState'
import CoinComponent from '../components/CoinComponent.vue'
export default {
  name: 'Market',
  components: { CoinComponent },
  setup() {
    const state = reactive({
      marketData: computed(() => AppState.marketData),
      filteredCoins: [],
      query: ''
    })
    onMounted(() => marketsService.getAllMarketCoins())
    return {
      state,
      searchCoins() {
        console.log("hey")
        state.marketData.filter(coin => coin.name.toLowerCase().includes(state.query.toLowerCase()))
        console.log(state.marketData)
      }
    }
  }
}
</script>

<style>

</style>
