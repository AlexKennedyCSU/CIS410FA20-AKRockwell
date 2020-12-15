<template>
    <div>
        <div class ="card">
<div class="card-body">

    <h2 class="text-primary">{{movie.KnifeName}}</h2>
    <br/>
    <p>Type Number: <br/> <strong>{{movie.TypeID}}</strong></p>
    <p>Type Description: <br/> <strong>{{movie.TypeDescription}}</strong></p>
    <p>Price: <br/> <strong>${{movie.UnitPrice}}</strong></p>
   
</div>
        </div>
<br/>

        <router-link  v-if="auth" :to="`/movies/${this.$route.params.pk}/review`">
        <button type="button" class="btn btn-success"> Add an Order </button>
        
         </router-link>
            <router-link  v-else :to="`/signin`">
        <button type="button" class="btn btn-outline-success">Sign-In to Add an Order </button>
        
         </router-link>
         <br/>
         <br/>
         <router-view></router-view>
    </div>
</template>

<script>
export default {
    computed:{
        movie(){
            var movies = this.$store.state.movies
            var thisMovie = movies.find((aMovie)=> aMovie.KnifeID == this.$route.params.pk)

           // console.log("here is the movie you want", thisMovie)
            return thisMovie
        },
        auth(){return this.$store.state.token}
    }
    
}
</script>
<style scoped>

</style>