<template>
  <div class="row justify-content-center">
    <div class="col-6">
      <h2 class="main-text-class text-left">
        Evalute crypto market data in real time with <span class="text-secondary">Piqo</span><span class="text-primary">Coin</span>
      </h2>
      <p class="secondary-text-class">
        We specialize in tracking crypto coin data so that users from all around the world have access to acurate market data.
      </p>
    </div>
    <div class="col-6 text-center">
      <img class="img-class" src="../assets/img/home.png" alt="">
      <div class="row justify-content-center">
        <div class="col-6 text-center">
          <button class="btn btn-purple" @click="routeToMarket">
            Market Coins
          </button>
          <button class="btn btn-primary ml-3" @click="routeToTrending">
            Trending Coins
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import router from '../router'
export default {
  name: 'Market',
  setup() {
    const state = reactive({
    })
    return {
      state,
      routeToMarket() {
        router.push({ name: 'Market' })
      },
      routeToTrending() {
        router.push({ name: 'Trending' })
      }
    }
  }

}
</script>

<style>
.img-class{
  transition: all 0.25s ease-out;
  margin-top: 9rem;
  width: 500px;
}
.main-text-class{
  margin-left: 5rem;
  font-size: 100px;
  margin-top: 12rem;
}
.secondary-text-class{
  font-size: 25px;
  font-weight: 400;
  margin-top: 5rem;
  color:rgb(39, 39, 39)!important;
  margin-left: 5rem;
}
</style>
