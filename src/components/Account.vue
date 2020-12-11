<template>
    <div>
        <h1> Account</h1>
        <hr/>
        <h3> {{firstName}}'s Reviews'</h3>

        <table class="table">
<thead>
<th> Title </th>
<th> Summary </th>
<th> Turtles </th>

<tbody>






</tbody>

</thead>

            </table>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
return{
    ReviewsByUser: null,
    accountError: false
}
    },
    computed: {
        firstName(){ 
            console.log(this.$store.state.user)
            return this.$store.state.user.Name}
    },
    created(){
        axios.get("/Customers_T/me", {
            headers: {
                Authorization: `Bearer ${this.$store.state.token}`

        }
        })
        .then((response)=>{
            console.log("here is /me response", response)
            this.reviewsByUser = response.data

        })

    }
    
}
</script>
<style scoped>

</style>