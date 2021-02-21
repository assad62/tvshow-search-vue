<template>
  <div class="home">
   
    <Header titleMessage="Vue js TV search app" titleImage="logo.png"/>
    <SearchBar v-on:childToParent="onChildClick"/>
     
    <p> {{  $store.getters.searchResult}}</p>
   
    <div class="searchList"> 
     <ul >
       <li id="searchResult" v-for="item in items" :key="item.score">
         <MovieItem v-bind:name=item.name v-bind:imgUrl=item.image v-bind:rating="item.rating" />
   
       </li>  
     </ul>
    </div> 
 
    
  </div>
</template>


<style scoped>
.home{
  background-color: rgb(255, 255, 255);
  
}
ul {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    
    list-style: none;
    align-items: center;
    justify-content: flex-start;
    
}


</style>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import SearchBar from '@/components/SearchBar.vue'
import MovieItem from '@/components/MovieItem.vue'
import { fromFetch } from 'rxjs/fetch';
import { switchMap, catchError,debounce ,map, filter,mergeMap} from 'rxjs/operators';
// import { Observable } from 'rxjs';

import {from, of,interval } from 'rxjs';




 


export default {
  data(){
    //  id: 1
    return{
      value: '',
      items: [],
      

    }
    
  },
  name: 'Home',
  components: {
    Header,
    SearchBar,
    MovieItem
  },
  mounted () {
  
    
  },
  methods:{
  
  onChildClick (val) {
    console.log("value in parent is is "+val)
    this.value = val;
  
  const data$ = fromFetch('http://api.tvmaze.com/search/shows?q='+this.value)
    .pipe(
      switchMap(response => {
        if (response.ok) {
       // OK return data
       return response.json();
       } else {
       // Server is returning a status requiring the client to try something else.
         return of({ error: true, message: `Error ${response.status}` });
      }
     }),
     filter(x => !!x),
     catchError(err => {
       // Network or other error, handle appropriately
       console.error(err);
       return of({ error: true, message: err.message })
     })
  );


   data$.subscribe({
    next: result => {
      this.items.length = 0
      this.items = result.map(x => {
          console.log(x)
          const info = { 
            name:x.show.name,
            score: x.score,
            image: x.show.image !== null ? x.show.image.original : "https://static.tvmaze.com/images/tvm-header-logo.png",
            rating: x.show.rating !== null ? x.show.rating.average : ""
                
          }
          return info;
      });

      console.log(this.items)
      //this.items.push(r)
    },
    complete: () => console.log('done')
   });



    }
  }
  
 

  
}
</script>
