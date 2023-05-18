
<template>
  <nav>
    <ul>
      <li><RouterLink to="/">Inicio </RouterLink>  </li>
      <li><RouterLink to="/page">Carrinho </RouterLink>  </li>
    </ul>
  </nav>
  <Banner/>
  <RouterView />
  <footer>
    <p>Marcelo Alves - &copy; 2023</p>
  </footer>
</template>
<script >
import { RouterLink, RouterView } from 'vue-router'
import Banner  from './views/banner.vue'
  
  export default {
    name: 'App',
    computed: {
            cristais() {
                return  this.$store.state.cristals;
            }
            
        },

     created(){
            this.$store.dispatch('setCristals');

           
        },



  }


</script>
<style >
  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  nav{
    background-color: #d9d9d9;
  }
 
  ul li{
    display: inline-block;
    margin: 20px;
    text-decoration: none;
    font-size: 20px;
    text-decoration: uppercase;
    
  }

  a{
    text-decoration: none;
    color:#000;
    text-transform: uppercase;
    transition: 0.5s;
  }
  
  a:hover{
    color:#fff;
    border-bottom: 3px solid #fff;
  }

  footer{
    width: 100%;
    background-color:#d9d9d9; ;
    
  }

  footer p{
    padding: 50px;
    text-align: center;
    font-size: 20px;
    color: #fff;
  }
</style>
