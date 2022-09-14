<template>
  <main>
    <Topbar @search="search" @add-photo="canAdd = true"></Topbar>
    <AddImage class="adding" v-if="canAdd" @add-image="refreshImages"></AddImage>
    <div class="grid">
      <CardImage 
        v-for="image in filtered" 
        :key="image._id" 
        :id="image._id" 
        :name="image.name" 
        :url="image.url"
        @img-deleted="refreshImages">
      </CardImage>
    </div>
  </main>
  <div v-if="canAdd" class="back"></div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import Topbar from '../components/Topbar.vue';
import CardImage from '../components/CardImage.vue';
import AddImage from '../components/AddImage.vue';
import { getImages } from '@/services/images.services';
import type { ImageResponse } from '@/interfaces/images';


export default defineComponent({
  data(){
    return {
      canAdd: false,
      images : [] as ImageResponse[],
      filtered: [] as ImageResponse[],
      filter : "",
    }
  },
  components: { Topbar, CardImage, AddImage },
  mounted() {
      getImages().then(res => {
        this.images = res
        this.filtered = res
      })
  },
  methods: {
    search(text : string){
      this.filtered = this.images.filter(x => x.name.toLowerCase().includes(text.toLowerCase()))
    },
    refreshImages(){
      getImages().then(res => {
        this.images = res
        this.filtered = res
        this.canAdd = false
      })
    }
  }
})

</script>

<style>

main{
  max-width: 1480px;
  margin: auto;
}

.adding{
  height: 270px;
  position: absolute;
  z-index: 9;
  border-radius: 15px;
  right: 0;
  left: 0;
  margin: auto;
  top: 200px;

}

.back{
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.492)}

.grid {
  --gap: 1em;
  margin: 40px auto;
  display: column;
  columns: 4;
  gap: var(--gap);
}

.grid > * {
  break-inside: avoid;
  margin-bottom: var(--gap);
}

@supports (grid-template-rows: masonry) {
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: masonry;
    grid-auto-flow: dense;
    /* align-tracks: stretch; */
  }

  .grid > * {
    margin-bottom: 0em;
  }
}



@media (max-width: 1480px) {
  .grid{
    columns: 3;
  }
}

@media (max-width: 800px) {
  .grid{
    columns: 2;
  }
}
@media (max-width: 500px) {
  .grid{
    columns: 1;
  }
}



</style>