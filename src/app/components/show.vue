<template>
  <div class="">

    <div v-for="blog in blogs" class="card">
        <p id="lblcategory">{{blog.category}}</p>
        <p id="lbldate">{{blog.date}}</p>
        <img :src="blog.url" >
        <p id="lblcontent">{{blog.content}}</p>
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
            axios.get("https://app-news-bb81b.firebaseio.com/posts.json")
            .then(res => {
                var dato = res.data
                for(let key in dato){
                    dato[key].id = key
                    this.blogs.push(dato[key])
                    this.blogs.reverse()
                }
            })

        }
    }
</script>

<style scoped>
    #lblcategory{
        display: inline;
        font-weight: 600;
    }
    #lblcontent, img{
        padding-top: 0.8rem;
    }
    #lbldate{
        float: right;
        color: #888;
    }
</style>
