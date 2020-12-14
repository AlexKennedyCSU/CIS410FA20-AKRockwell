<template>
    <div>
        <h1>Knifes</h1>
        <hr/>
        <table class="table">
<thead>
<tr>

    <th>Knife Name</th>
    <th>Available Stock</th>
    <th>Price</th>
</tr>
</thead>
<tbody>
    <tr v-for="thisMovie in movies" :key="thisMovie.KnifeID"> 

        <th>{{thisMovie.KnifeName}}</th>
          <td>{{thisMovie.AvailableStock}}</td>
            <td>{{thisMovie.UnitPrice}}</td>
            <td><router-link :to="`/movies/${thisMovie.KnifeID}`">
            <button type="button" class="btn btn-primary"> Details</button>
            </router-link></td>

    </tr>
</tbody>
        </table>
    </div>
</template>

<script>
export default {

    computed:{
        movies(){return this.$store.state.movies}
    }
    
}
</script>
<style scoped>

</style>