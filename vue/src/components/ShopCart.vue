<template>
    <div class="body">
        <h1 class="title2"> Cart </h1>
        <h2 class="fill">{{ store.items }}</h2>
        <p>{{ state.count }}</p>
    </div>
</template>
<script setup>
import { store } from "@/stores/store";
import { state } from "@/stores/store";

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
.fill{
    text-align: center;
    font-size:small;
}
</style>

