<template>
From B: {{ store.count }}
    <div class="body">
<h1 class="title2"> Cart </h1>
    </div>
</template>
<script setup>
import { store } from './store.js'
</script>

<style  scoped>

.body{
    position:fixed;
    top:0; right:0;
    background-color:antiquewhite;
    width: 30%;
    height: 194vh;
}
.title2{
    text-align: center;
    font-size: 3rem;

}
</style>