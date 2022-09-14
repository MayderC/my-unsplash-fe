<template>

  <nav class="topbar">

    <div class="topbar-img-input">
      <img src="../assets/img/my_unsplash_logo.svg" alt="" srcset="">
      <form  class="input center-ve">
        <img src="../assets/img/icons8-search.svg" alt="" srcset="">
        <input placeholder="search by label" type="text"  v-model="search" name="" id="">       
      </form>
    </div>

    <div class="topbar-btn">
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
    },
    watch: {
      search(){
        this.$emit('search', this.search)
      }
    }
  })

</script>
<style scoped>

  .topbar{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;
  }
  
  .topbar-btn{
    align-self: flex-end;
  }

  .topbar-img-input{
    display: flex;
    flex-wrap: wrap;
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


  @media (max-width: 501px) {

    .input {
      margin-top: 10px;
      width: auto;
    }

  }

</style>