<template>
<h2 class="header">Make Your Own Ice Cream</h2>
  <div class="container2">
    <DestCard v-for="item in items" :key="item.name" :item="item" />
    
  </div>
<div class="cart">
    <ShopCart />
</div>
</template>

<script setup>
import DestCard from "@/components/DestCard.vue";
import ShopCart from "@/components/ShopCart.vue";
//
const items = [
  {
    name: "strawberry ice cream",
    price: 3,
    category: "ice cream",
    pic: "https://static.wixstatic.com/media/b2b081_7284a33242104ed28953e4ea0760a997~mv2.png/v1/fill/w_371,h_260,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/strawberry_fields_edited.png",
  },
  {
    name: "vanilla ice cream",
    price: 3,
    category: "ice cream",
    pic: "https://static.wixstatic.com/media/b2b081_d85873ddf9e9442aa509a469df59ef74~mv2.png/v1/fill/w_372,h_260,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/vanilla_volcano_edited.png",
  },
  {
    name: "chocolate ice cream",
    price: 3,
    category: "ice cream",
    pic: "https://static.wixstatic.com/media/b2b081_c7efff06b4e9466c804ba96bb449a3ff~mv2.png/v1/fill/w_338,h_237,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/award_winning_chocolate_edited.png",
  },
  {
    name: "cookie dough ice cream",
    price: 3,
    category: "ice cream",
    pic: "https://static.wixstatic.com/media/b2b081_4ac5214d684d426e99ee24c12c6a7485~mv2.png/v1/fill/w_392,h_273,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cookie_doughlicious_edited.png",
  },
  {
    name: "whip cream",
    price: 1,
    category: "cream",
    pic: "https://freepngimg.com/save/168661-yogurt-whipped-cream-free-transparent-image-hq/500x500",
  },
  {
    name: "cool whip",
    price: 1,
    category: "cream",
    pic: "https://static.vecteezy.com/system/resources/previews/033/888/578/non_2x/white-whipped-cream-with-ai-generated-free-png.png",
  },
  {
    name: "caramel candy",
    price: 0.70,
    category: "toppings",
    pic: "https://brandsitesplatform-res.cloudinary.com/image/fetch/w_400,c_scale,q_auto:eco,f_auto,fl_lossy,dpr_1.0,e_sharpen:85/https://assets.brandplatform.generalmills.com%2F-%2Fmedia%2Fproject%2Fgmi%2Fhaagendazs%2Fhaagendazs-master%2Fbsp%2Fhd%2Fproduct-images%2Fingredient%2Fcaramel-ing-revised1.png%3Fw%3D460%26rev%3D6ec619b5a67841a8bdf590c0eb17561c",
  },
  {
    name: "sprinkles",
    price: 0.50,
    category: "toppings",
    pic: "https://static.vecteezy.com/system/resources/thumbnails/021/299/522/small/donut-sprinkles-3d-illustration-png.png",
  },
  {
    name: "m&m",
    price: 0.5,
    category: "toppings",
    pic: "https://freepngimg.com/download/candy/108376-m-m-candy-free-download-image.png",
  },
  {
    name: "strawberries",
    price: 1.50,
    category: "fruits",
    pic: "https://binksberryhollow.com/wp-content/uploads/2021/12/strawberries-1030x1030.png",
  },
  {
    name: "banana",
    price: 1.50,
    category: "fruits",
    pic: "https://static.vecteezy.com/system/resources/thumbnails/013/352/746/small_2x/peeled-banana-isolated-png.png",
  },
]

</script>

<style scoped>
.container2{
  align-items:center;
  justify-content:space-around;
}

.header{
  font-size: 40px;
  text-align: center;
}
</style>