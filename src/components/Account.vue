<template>
    <div>
        <h1> Account</h1>
        <hr/>
        <h3> {{firstName}}'s Order's</h3>
<p v-if="accountError" class="form-text text-danger"> Can not get your account information, please try again later</p>
        <table v-if="reviewsByUser" class="table">
<thead>
<th> Order Date </th>
<th> Delivery Date </th>
<th> Ship Address </th>
<th> KnifeID </th>
</thead>

<tbody>
<tr v-for="thisReview in reviewsByUser" :key="thisReview.length">
    
    <th>{{thisReview.OrderDate}}</th>
     <th>{{thisReview.DeliveryDate}}</th>
      <th>{{thisReview.ShipAddress}}</th>
       <th><router-link :to="`/movies/${thisReview.KnifeID}`">{{thisReview.KnifeID}}</router-link></th>
     </tr>





</tbody>



            </table>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
return{
  
    reviewsByUser: null,
    accountError: false
}
    },
    computed: {
        firstName(){ 
            console.log(this.$store.state.user)
            return this.$store.state.user.Name}
    },
    created(){
        const myReview ={
           
            CustomerID: this.$store.state.user.CustomerID
};
const token = this.$store.state.token
         axios.post("/myorders", myReview, {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
        .then((response)=>{
            console.log("here is /myorders response", response)
            this.reviewsByUser = response.data

        }).catch(()=>{

            this.accountError= true;
        })

    }
    
}
</script>
<style scoped>

</style>