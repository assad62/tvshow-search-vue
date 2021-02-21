<template>
  <div class="title">

    <img :src="require(`@/assets/${titleImage}`)"> 
     <!-- <img v-bind:src="`@/assets/{titleImage}`" alt="" srcset=""/>  -->
     {{titleMessage}}
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    titleMessage: String,
    titleImage: String,
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
 
  background-color: rgb(7, 9, 44);
  font-size: 3rem;
  display: flex;
  color: wheat;
  gap: 20px;
  align-items: center;
  justify-content: center;
 
}

img{
  height: 50px;
  width: 50px;
}

</style>
