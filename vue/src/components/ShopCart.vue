<template>
    <div class="body">
        <h1 class="title2"> Cart </h1>
    </div>
    <div v-for="(items) in store.thing" :key="item.name" class="cart2">
        <div class="card">
            <h2> {{ items.title }}</h2>
            <img :src="item.pic" alt="">
            <h3> {{ "$" + item.price }}</h3>
            <button @click=" remove(items)" class="btnn"></button>
        </div>

    </div>
    <h2 class="total">Total Cost:$ {{ total() }}</h2>
    <div>

    </div>
</template>
<script setup>
import { store } from "@/stores/store";

const props = defineProps({
    thing: Array
})

function remove(items) {
    const cartIndex = store.item.index(items);
    store.item.splice(cartIndex, 1);
    console.log(store.thing)
}

function total() {
    const arr = store.thing
    let sum = 0;
    for (let i = 0; i < arr.lenghth; i++) {
        sum += arr[i].price
    }

    console.log(sum)
    return (sum)
}
</script>

<style  scoped>
.body {
    position: fixed;
    top: 0;
    right: 0;
    background-color: antiquewhite;
    width: 30%;
    height: 194vh;
}

.title2 {
    text-align: center;
    font-size: 3rem;

}

.fill {
    text-align: center;
    font-size: small;
}
</style>

