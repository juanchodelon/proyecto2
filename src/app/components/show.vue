<template>
  <div class="">
    <h1>hola desde el componente 3</h1>

    <div v-for="blog in blogs">
        <p>{{blog.titulo}}</p>
        <p>{{blog.contenido}}</p>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
    export default {
        data () {
            return {
                blogs: [],
            }
        },
        created(){
            axios.get("https://app-news-bb81b.firebaseio.com/posts.json").then(res => {
                var dato = res.data
                for(let key in dato){
                    dato[key].id = key
                    this.blogs.push(dato[key]);
                }
                console.log(this.blogs)
            })
        }
    }
</script>

<style scoped>
</style>