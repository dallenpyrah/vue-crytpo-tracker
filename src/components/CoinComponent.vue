<template>
  <div class="col-8">
    <div class="card card-class" @click="toCoinPage">
      <div class="row">
        <div class="col-2">
          <img class="image-class" :src="coinProp.image" alt="">
        </div>
        <div class="col-2 name-class">
          <h4 class="">
            {{ coinProp.name }}
          </h4>
        </div>
        <div class="col-1 name-class">
          <h5 class="">
            {{ coinProp.symbol.toUpperCase() }}
          </h5>
        </div>
        <div class="col-2 name-class">
          <h5 class="">
            ${{ coinProp.current_price }}
          </h5>
        </div>
        <div class="col-2 name-class">
          <h5 class="">
            ${{ coinProp.current_price }}
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'CoinComponent',
  props: { coinProp: { type: Object, required: true } },
  setup(props) {
    const router = useRouter()
    const state = reactive({

    })
    return {
      state,
      toCoinPage() {
        router.push({ name: 'CoinPage', params: { id: props.coinProp.id } })
      }
    }
  }
}
</script>

<style>
.card-class{
  margin: 1rem;
  padding: 3rem;
  background-color: rgb(39, 39, 39);
  color: white;
}
.image-class{
  width: 100px;
}
.name-class{
  margin-top: 2.2rem;
}
</style>
