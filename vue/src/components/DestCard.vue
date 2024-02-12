<template>
<h1 ></h1>
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
.card{
    height: 50vh;
    width: 23%;
    background-color: rgba(207, 103, 211, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 2rem 0;
    -webkit-backdrop-filter: blur(25px) saturate(20%);
    border-radius: 12px;
    border: 5px solid rgb(214, 100, 237);
    box-shadow: 10px 10px rgb(192, 21, 192);
    transition: all 0.3s;
}
</style>