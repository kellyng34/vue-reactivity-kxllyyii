<template>
    <div class="body">
        <h1 class="title2"> Cart </h1>
  
    <div v-for="item in store.thing" :key="item.name" class="cart2">
        <div class="card">
            <h2> {{ item.name }}</h2>
            <img :src="item.pic" alt="">
            <h3> ${{ item.price }}</h3>
            <button @click="remove(item)" class="btnn"> Remove</button>
        </div>

    </div>
    <h2 class="total">Total Cost:$ {{ store.total }}</h2>
    <div>

    </div>
</div>
</template>
<script setup>
import { store } from "@/stores/store";


function remove(item) {
    const thingIndex = store.thing.indexOf(item);
    store.thing.splice(thingIndex, 1);
    console.log(store.thing)
}


</script>

<style  scoped>
.body {
    position:absolute;
    top: 0;
    right: 0;
    background-color: antiquewhite;
    width: 30%;
    height: auto;
}

.title2 {
    text-align: center;
    font-size: 3rem;
}


.card{
    align-items: center;
}
</style>

