<template>
    <div class="products">
        <div class="product" v-for="cristal in cristais">
            <img :src=cristal.image>
            <h2> {{cristal.name}} </h2>
            <button @click="goToPage(cristal)">Ver Mais</button>
        </div>
    </div>
</template>
<script>
import { onMounted } from 'vue';
import { useStore } from 'vuex';

    export default {
        name : 'Cristals',

      
       
        methods:{
           

            goToPage(x){
                const rota = '/page/'+x.id;
                this.$router.push(rota);
            }

            
        },
        computed: {
            cristais() {
                return  this.$store.state.cristals;
            }
            
        },
    }
</script>
<style scoped>
    .products{
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        width: 90%;
        margin: 0 auto;
    }

    .product{
        width: 20%;
        padding:20px 7px;
        
    }

    .product img{
        max-width: 100%;
        min-height: 250px;
        object-fit: cover;

    }

    .product img:hover{
         opacity : 0.8; 
        background-color: #f860ac;
    }

    h2{
        font-family: sans-serif;
        text-transform: uppercase;
    }

    button{
        width: 100%;
        background-color:#ff97cb ;
        text-transform: uppercase;
        font-size: 18px;
        border:none;
        padding: 5px;
        margin-top: 5px;
        border-radius: 5px;
    }

    button:hover{
        background-color: #f860ac;
    }

    
  @media (max-width:1000px) {
    .products{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 90%;
        margin: 0 auto;
    }

    .product{
        width: 30%;
        padding:20px 5px;
        
    }
  } @media(max-width: 700px){
    .product{
        width: 50%;
        
        
    }
  }
    @media(max-width: 500px){
    .product{
        width: 100%;
    }
        
    
  }
</style>