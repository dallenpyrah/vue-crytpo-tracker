<template>
  <div class="col-8">
    <div class="card">
      <h2>
        {{ coinProp.name }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoinComponent',
  props: { coinProp: { type: Object, required: true } }
}
</script>

<style>

</style>
