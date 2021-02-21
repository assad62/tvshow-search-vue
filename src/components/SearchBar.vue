<template >
    <!-- v-model="searchTerm" --><!-- @keyup="handleInput" -->
    <div class="searchBar">
       <input type="search" 
          id="searchBox" 
          name="searchBox" 
          placeholder="search tvshow"
          ref="searchBox"
          >
         
    </div>
</template>
<script>

import { Observable,of,interval,from, fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, throttleTime } from 'rxjs/operators';





export default {
  name: 'SearchBar',
  props: {
    // titleMessage: String,
    // titleImage: String,
  },
  mounted(){
    
    
    
    const data$ = 
        fromEvent(this.$refs["searchBox"], 'keyup')
        .pipe(
          debounceTime(2000),
        //   throttleTime(1000),
        //   distinctUntilChanged(),
          map((e)=> e.target.value)
        )


 
     data$.subscribe({
           next: result =>  this.emitToParent(result),
           complete: () => console.log('done')
     });
     
  },

    methods: {
     
     emitToParent (searchResult) {
     this.$emit('childToParent', searchResult)
    }
  },
}
</script>
<style scoped>
    .searchBar{
        height: 20vh;
        background-color: wheat;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .searchBar input{
        font-size: 16px;
        line-height: 3;
        padding: 0 20px;
        width:50rem;
        height: 4rem;
    }

</style>