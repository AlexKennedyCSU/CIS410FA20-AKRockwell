import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token: null,
        user: null,
        movies: []

    },
    mutations:{
        storeTokenInApp(state, myToken){
            state.token = myToken
        },
        storeUserInApp(state, myUser){
            state.user = myUser
        },
        storeMovies(state,myMovies){
            state.movies = myMovies
        }

    },
    actions:{
        getMovies({commit}){
            axios.get('/knifes')
            .then((myResponse)=>{
                console.log("resp from /knifes bruh", myResponse)
                commit('storeMovies', myResponse.data)
            })
            .catch(()=>{console.log("errror in getMovies action for the knifes tho")})

        }

    }
})
