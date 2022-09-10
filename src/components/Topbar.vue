<template>

  <nav class="topbar">
    <div class="center-ve">
      <img src="../assets/img/my_unsplash_logo.svg" alt="" srcset="">
      <form @submit.prevent="$emit('search', search)" class="input center-ve">
        <img src="../assets/img/icons8-search.svg" alt="" srcset="">
        <input placeholder="search by name" type="text" v-model="search" name="" id="">       
      </form>
    </div>
    <div>
      <button @click="$emit('add-photo')">
        <p>Add a photo</p>
      </button>
    </div>
  </nav>

</template>
<script lang="ts">
import  { defineComponent } from 'vue';

  export default defineComponent({
    name : 'Topbar',
    data(){
      return {
        search : ""
      }
    }
  })

</script>
<style scoped>

  .topbar{
    display: flex;
    justify-content: space-between;
  }

  .center-item{
    display: grid;
    place-items: center;
  }

  .center-ve{
    display: flex;
    align-items: center;
  }

  button {

  width: 105px;
  height: 55px;
  border: none;
  color: #fff;
  background: #3DB46D;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
}

button p {
  font-weight: bold;
  font-size: 0.9rem;
}
button:hover{
  background-color: #39c270;
}

.input{
  width: 300px;
  height: 55px;
  border: 1px solid #BDBDBD;
  border-radius: 12px;
  padding: 0 1rem;
}

input{
  border: none;
  outline: none;
  width: 100%;
  font-size: 1.3rem;
}
</style>