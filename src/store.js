import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import routes from './routes.js'
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
        },
        clearAuthData(state){
            state.token = null;
            state.user = null;
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

        },
        logout({commit, state}){
            axios.post('/Customers_T/logout',null,{
                headers:{
                    Authorization: `Bearer ${state.token}`
                }

            });
            commit('clearAuthData');
            routes.replace("/");
        }

    }
})
