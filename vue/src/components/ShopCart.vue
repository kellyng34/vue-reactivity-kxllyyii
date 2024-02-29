<template>
    <div class="body">
        <h1 class="title2"> Cart </h1>
        <div class="if" v-if="store.cart.length === 0">
            <h2>Empty</h2>
        </div>
        <div v-else>
            <div v-for="(items) in store.cart" :key="item.name" class="cart2"></div>
            <h2>{{ item.name }}</h2>
            <img :src="item.pic" alt="" />
            <button @click="remove(item)" class="btn2">remove</button>
        </div>
    </div>
    <h2 class="total"> Total: ${{ total() }}</h2>
    </div>
</template>
<script setup>
import { store } from "@/stores/store";
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
</style>