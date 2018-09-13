<template>
  <div class="">

    <div v-for="blog in blogfilter" class="card">
        <p id="lblcategory">{{blog.category}}</p>
        <p id="lbldate">{{moment(blog.date).fromNow()}}</p>
        <img :src="blog.url" >
        <p id="lblcontent">{{blog.content}}</p>
    </div>

  </div>
</template>

<script>
var moment = require('moment');
import { bus } from '../main';
import axios from 'axios';
    export default {
        data () {
            return {
                blogs: [],
				moment: moment,
				search: '',
				category: '',
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
            });
            bus.$on('categoria', data => {
				this.category = data;
			});

			bus.$on('buscar', data => {
				this.search = data;
			});

        },
		computed: {
			searchPostes: function(){
				if(this.search == ''){
					return this.blogs.filter((blog) => blog.category.match(this.category));
				}else{
					return this.blogs.filter((blog) => blog.content.match(this.search));
				}
            },
            blogfilter: function(){
                if(this.search == ''){
					return this.blogs.filter((blog) => blog.category.match(this.category));
				}else{
					return this.blogs.filter((blog) => blog.content.match(this.search));
				}
                //return this.blogs.filter((blog) => blog.content.match(this.search));
                //return this.blogs.filter((blog) => blog.category.match(this.category));
            }
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
