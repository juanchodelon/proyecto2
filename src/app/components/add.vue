<template>
  <div class="" id="AddPC">

    <div class="formadd card">
        <select v-model="newItem.category">
            <option>Nacional</option>
            <option>Internacional</option>
        </select>

        <textarea placeholder="contenido" v-model="newItem.content"></textarea>

        <input type="file" name="imgContent" @change="onFileSelected">

        <button @click="addItem">publicar</button>
    </div>

  </div>

</template>

<script>
import axios from 'axios';
    export default {
        data () {
            return {
                newItem: {
                    category: '',
                    content: '',
                    url: '',
                    date: Date.now(),
                },
                a: false,
                b: false,
            }
        },
        methods:{
            addItem: function(){
                if(this.file == null){
                    this.publicar();
                }
                if(this.file != null){
                    this.storageRef.put(this.file)
                    .then(res => {
                        this.a = true;
                        if(this.a == true){
                            this.getUrl()
                        }
                    })
                }
            },
            getUrl(){
                var starsRef = firebase.storage().ref('photos/'+ this.file.name);
                starsRef.getDownloadURL().then(res => {
                    this.b = true
                    if(this.b == true){
                        this.newItem.url = res;
                        this.publicar();
                    }
                })
            },
            publicar(){
                axios.post("https://app-news-bb81b.firebaseio.com/posts.json", this.newItem).then(res => {
                    this.a = false;
                    this.b = false;
                });
            },
            onFileSelected(event){
                this.file = event.target.files[0];
                this.storageRef = firebase.storage().ref('photos/' + this.file.name);
            }
        }
    }
</script>

<style scoped>
</style>