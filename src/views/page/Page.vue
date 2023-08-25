<script setup lang="ts">
import Banner from './cpns/Banner.vue'

const images = ref([
  'https://staticpages.mngbcn.com/visual/localhost/images/2023/08/kids_landing_uniformes_1408.jpg?imwidth=1024&imdensity=2&impolicy=set_33',
  'https://staticpages.mngbcn.com/homes/images/fw23/teens/agosto/teen_nn_0708.jpg?imwidth=859&imdensity=2',
  'https://staticpages.mngbcn.com/homes/images/ss23/she/abril/basicos_she_landing.jpg?imwidth=765&imdensity=2'
])
</script>

<template>
  <div class="flex justify-center h-full">
    <Menu></Menu>
    <Banner :images="images"> </Banner>
  </div>
</template>
