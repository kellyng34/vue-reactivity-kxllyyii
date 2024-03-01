
<template>
    <div class="container">
        <h2>{{ item.name }}</h2>
        <img :src="item.pic" alt="">
        <p>{{ item.price }}</p>
        <button @click="addToCard(item)" class="btn"> Add to Bowl </button>
    </div>
</template>

<script setup>
import { store } from "@/stores/store";


const props = defineProps({
 item:Object
})

const addToCard= function(list){
  store.thing.push(list)
}

</script>

<style sscoped>
img{
  width: 230px;
  height: 160px;
}
.container {
  background-color:antiquewhite;
  justify-content:space-around;
  align-items:center;
  text-align: center;
  display: flex;
  width: 600px;
  height: 200px;
  border-radius: 5px;
  border:1px solid black;
  offset-distance: 40%;
}

.btn{
  height: 100px;
  background-color:rgb(250, 241, 230);
  width: auto;
}

</style>