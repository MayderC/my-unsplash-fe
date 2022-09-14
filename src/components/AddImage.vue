<template>
  <div class="container-add">
    <h2>Add a new photo</h2>
    <form class="" @submit.prevent="">
      <input class="input" v-model="label" type="text" placeholder="Label">
      <input class="input" v-model="url" type="text" placeholder="Url">
      <footer>
        <span @click="$emit('add-image', false)" class="btn cancel">Cancel</span>
        <span @click="save" class="btn save">{{text}}</span>

      </footer>
    </form>
  </div>
</template>

<script lang="ts">
import { saveImage } from '@/services/images.services';
import  { defineComponent } from 'vue';
import SpinnerLoading from './SpinnerLoading.vue';

export default defineComponent({
    name: "AddImage",
    data() {
        return {
            text: "submit",
            label: "",
            url: ""
        };
    },
    components: { SpinnerLoading },
    methods: {
      save(){
        saveImage({name: this.label, url: this.url}).then((res) => {
          console.log(res)
          this.$emit('add-image', true)
        })
      }
    }
})

</script>

<style>

.container-add{
  background-color: #fff;
  width: 400px;
  padding: 20px;
}

.container-add form {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.input{
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
  display: block;
}


.btn{
  padding: .8rem 2rem;
  user-select: none;
  cursor: pointer;
  border-radius: 12px;
  font-weight: bold;
}

form > footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.save{
  background-color: #3DB46D;
  color: #fff;
}

.save:hover{
  background-color: #2ca35c;
}

.cancel{
  background-color: #BDBDBD;
}
.cancel:hover{
  background-color: #a1a0a0;
}


@media (max-width: 450px) {
  
  .container-add{

    width: auto;

  }
  form > footer {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }

}

</style>