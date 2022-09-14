<template>

  <div class="container-img">
    <img class="img" :src="url" alt="">
    <span @click="handleDelete" class="btn-delete">delete</span>
    <span class="img-label"><p>{{name}}</p></span>
  </div>

</template>

<script lang="ts">
import { deleteImage } from '@/services/images.services';
import { defineComponent } from 'vue';
import SpinnerLoading from './SpinnerLoading.vue';


export default defineComponent({
    props: ["name", "url", 'id'],
    name: "CardImage",
    components: { SpinnerLoading },
    methods: {
      handleDelete() {
        deleteImage(this.id).then( () => {
          this.$emit('img-deleted')
        })
      }
    }
})

</script>

<style scoped>

.container-img{
  position: relative;
}

span {
  position: absolute;
  z-index: 2;
}

.img-label{
  color: #fff;
  bottom: 20px;
  left: 15px;
  display: none;
  max-width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}


.btn-delete{
  display: none;
  position: absolute;
  color: #eb5757;
  right: 10px;
  top: 10px;
  border-radius: 20px;
  padding: 0.1rem .8rem;
  border: solid 2px #eb5757;
  user-select: none;
  cursor: pointer;
}

.btn-delete:hover{
  color: #da4444;
  border: solid 2px #da4444;
}

.container-img:hover .btn-delete{
  display: block;
}

.container-img:hover img {
  filter: brightness(0.3);
}

.container-img:hover .img-label{
  display: block;
}


img {
  max-width: 100%;
  border-radius: 15px;
}
</style>