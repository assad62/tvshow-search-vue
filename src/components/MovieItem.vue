<template>
    <div class="movie_card">
       
        <div class="movie_img">
            
            <div class="movie_img_container">
               
               <img v-bind:src="imgUrl">
            </div>
           
         </div>
       
        <div class="movie_details">
              <div class="movie_name">
                    <p>{{name}}</p>

              </div>
            
              <div  v-if="rating" class="movie_info">
                  <!-- <span style="color:yellow;">&starf;</span> -->
                  <span>&starf;</span>{{rating}}
              </div>
              
        </div>
       
    </div>
</template>
<script>
export default {
    name: "MovieItem",
    props: {
      name:String,
      imgUrl:String,
      rating:String,
      
   },
}
</script>
<style scoped>
    .movie_card{
        padding: 0;
        margin: 0;
        background-color: whitesmoke;
        display: flex;
        flex-direction: column;
        height: 30rem;
        width: 20rem;
        
       
    
    }

    .movie_img{
        flex: 80;
        
    }
    .movie_img_container{
        /* background-color: magenta; */
        height: 25rem;
         /* object-fit: cover; */
    }

    .movie_img_container img{
        height: 100%;
        width: 100%;
        object-fit: fill;
        /* object-fit: fill; */
     
    } 

    .movie_details{
        /* background-color: lightcoral; */
        flex: 20;
        font-size: 1.6rem;
        display: flex;
        
        white-space: wrap;
        overflow: hidden;
        text-overflow: ellipsis;
        align-items: center;
        justify-content: center;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

    .movie_name{
        flex-grow: 1;
        
       
    } 
    .movie_info{
        display: flex;
        align-items: center;
        color: whitesmoke;
        padding: 0.5rem;
        margin-right: 1rem;
        gap: 0.3rem; 
        background-color: rgb(167, 154, 167);
        font-size: 1rem;

    }
    .movie_info span{
        color:gold
    }
</style>