<template>
  <div class="">
    <h1>hola desde el componente 2</h1>

    <input type="text" v-model="newItem.titulo" placeholder="titulo">
    <input type="text" v-model="newItem.contenido" placeholder="contenido">
    <button @click="addItem">publicar</button>

  </div>
</template>

<script>
import axios from 'axios';
    export default {
        data () {
            return {
                newItem: {
                    titulo: '',
                    contenido: ''
                }
            }
        },
        methods:{
            addItem: function(){
                this.$http.post("https://app-news-bb81b.firebaseio.com/posts.json", this.newItem).then(function(data){
                    console.log(data);
                })
            }
        },
    }
</script>

<style scoped>
</style>