<template>
   <div class="row justify-content-center"><div class="col-lg-10"><div class="card"><div class="card-body">
       <h4>Create an Order</h4> <form id="review-form" @submit.prevent="submitReview"><div class="form-group">
           <label for="ratinginput">Order Date</label> <input id="ratinginput" name=" rating" required="required" class="form-control" v-model="OrderDate"></div>

           <div class="form-group">
           <label for="DeliveryDate">DeliveryDate</label> <input  id="DeliveryDate" name=" rating" required="required" class="form-control" v-model="DeliveryDate"></div> 
           <div class="form-group">
           
           <div class="form-group"><label for="summaryinput">Ship Address </label> <textarea row="3" id="summaryinput" name="summary" required="required" class="form-control" v-model="ShipAddress">
               </textarea>
               </div> 
               <label for="KnifeID">Knife ID</label> <input type="number" id="KnifeID" name=" rating" min="1" max="10" required="required" class="form-control" v-model="KnifeID"></div>  
               <button v-on:click="cancelReview" type="submit" class="btn btn-primary">Submit Review</button> <button type="clear" class="btn btn-outline-danger">
            Cancel
          </button> 

          <p v-if="errorMessage" class="form-text text-danger"> {{errorMessage}}</p>
          
          
          </form></div></div></div></div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            OrderDate: null,
            DeliveryDate: null,
            ShipAddress: "",
           
            errorMessage: null,




        }
    },
    methods:{
        submitReview(){
const myReview ={
            OrderDate: this.OrderDate,
            DeliveryDate: this.DeliveryDate,
            ShipAddress: this.ShipAddress,
            KnifeID: this.$route.params.pk
};
console.log("here is my order", myReview)
const token = this.$store.state.token
axios.post("/order",myReview,{
    headers:{
        Authorization: `Bearer ${token}`
    }
}).then(()=>{this.$router.replace('/account')})
.catch(()=>{this.errorMessage =" unable to create review, please try again later :/"})

        },
        cancelReview(){
            this.$router.go(-1)
        }
    }
    
}
</script>
<style scoped>

</style>