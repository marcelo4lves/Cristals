<template>
    <main v-for="rend in cristalRender">
        <h2>{{ rend.name }}</h2>
        <img :src="rend.image">
        <p>{{  rend.desciption }}</p>
      
    </main>
</template>

<script>
    export default{
        name: 'Page',

        data(){
            return {
                id:null,
                cristalRender: {}
            }
        },

        computed: {
            cristais() {
                return  this.$store.state.cristals;
            },   
        },
        
        created(){
            console.log("id pela rota ", this.id)
            this.id = this.$route.params.id;
            console.log("id pela rota ", this.id)
            this.atribuirCristal();
        },
        methods:{
            atribuirCristal(){
                this.cristalRender = this.cristais.filter((elem)=>{
                    if(elem.id == this.id){
                        console.log("Retornou ", elem);
                        
                        return elem;
                        
                    }
                   
                })


                console.log("achei ",this.cristalRender);
            }
        },
        
    }
</script>

<style>
    main{
        width: 70%;
        margin: 0 auto;
        padding: 20px;
    }

    main h2{
        text-transform: uppercase;
        padding: 12px;
        font-size: 28px;
        text-align: center;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        
    }

    main img{
        width: 100%;
    }

    main p{
        text-align: justify;
        font-family: sans-serif;
        line-height: 1.3;
        padding-top: 10px;
    }
</style>