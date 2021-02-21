<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{param}}
  </div>
</template>
<script>
export default {
  name: 'About',
  data  () {
   return {
      param: 0
   }
  },
  components: {
    
  },
  mounted() {
        // q = this.$route.query.q
        this.param = this.$route.params
        console.log(this.$route.params)
  },
 

}
</script>