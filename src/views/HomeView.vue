<template>
  <main>
    <Topbar @search="search" @add-photo="canAdd = true"></Topbar>
    <h1 v-if="canAdd">Agregando</h1>

    <div class="container-photos">

      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>

    </div>

  </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Topbar from '../components/Topbar.vue';


export default defineComponent({
    components: { Topbar },
    data(){
      return {
        canAdd: false
      }
    },
    methods: {
      search(text : string){
        console.log(text)
      }
    }
})

</script>

<style>
.container-photos {
  display: grid;
  grid-template-rows: masonry;
  grid-template-columns: masonry;
}

</style>