import  { createStore } from 'vuex'


export default  createStore({
     state:{
        cristals:[]
    },
    mutations:{
        setCristals(state,data){
            state.cristals = data
           
        }
        
    },
    actions:{
        async setCristals({commit},data){
            
            const dados = await fetch("http://localhost:3000/dados");
            const cristais = await dados.json();

            commit('setCristals', cristais)

            
        },
    }
})

