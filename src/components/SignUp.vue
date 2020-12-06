<template>
    <div>
        <h1> Sign Up</h1>
        <form @submit.prevent="onSubmit"><div class="form-group"><label for="fname-input">Name </label> <input type="text" id="fname-input" required="required" placeholder="First name" class="form-control" v-model="name"></div> <div class="form-group"><label for="lname-input">Phone Number</label> <input type="text" id="lname-input" required="required" placeholder="Last name" class="form-control" v-model="phone"></div>
        <div class="form-group"><label for="address-input">Address </label> <input type="text" id="address-input" required="required" placeholder="First name" class="form-control" v-model="address">
          <small v-if="dupEmail" class="from-text text-danger"> Please choose a different email!</small></div>
      
        
         <div class="form-group"><label for="email-input">Email address</label> <input type="email" id="email-input" required="required" placeholder="Enter email" class="form-control" v-model="email"> </div>
         
          <div class="form-group"><label for="password-input">Password</label> <input type="password" id="password-input" placeholder="Password" required="required" value="asdfasdf" class="form-control" v-model="password"></div> <button type="submit" class="btn btn-primary">Submit</button> <p id="error-signup" class="text-danger">{{errorMessage}}</p></form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
return {
    name:'',
    phone:'',
    address:'',
    email:'',
    password:'',
    errorMessage:'',
    dupEmail: false

}

    },

    methods:{
        onSubmit(){

            const myFormData = {
                Name: this.name,
                Phone: this.phone,
                Address: this.address,
                Email: this.email,
                Password: this.password
            }

            //console.log(myFormData)
            axios.post("/Customers_T",myFormData)
            .then((myResponse)=>{
                
                console.log(myResponse)
                this.$router.replace("/signin?signupsuccess=true")
                })
                .catch((myError)=>{

                    if (myError.response.status===409){
                        this.dupEmail= true
                    }else{
                        this.errorMessage = "Cannot sign you up, please try again later!"
                    }
                })
        }
    }
    
}
</script>
<style scoped>

</style>