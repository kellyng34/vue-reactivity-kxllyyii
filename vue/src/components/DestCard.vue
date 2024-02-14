
<template>
    <div class="container">
        <h2>{{ item.name }}</h2>
        <img :src="item.pic" alt="">
        <p>{{ item.price }}</p>
        <button class="btn"> Add to Bowl </button>
    </div>
</template>

<script setup>
const props = defineProps({
    item: Object
})

</script>

<style sscoped>
img{
  width: 230px;
  height: 160px;
}
.container {
  background-color: rgb(245, 192, 242);
  justify-content:space-around;
  align-items: center;
  text-align: center;
  display: flex;
  width: 600px;
  border-radius: 5px;
  border:1px solid black;
  offset-distance: 40%;
}

</style>