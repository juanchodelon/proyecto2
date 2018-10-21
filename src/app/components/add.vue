<template>
  <div class="" id="AddPC">

    <div class="formadd card">
        <div @click="selectActive = !selectActive" class="btn" id="select">
        <label>{{newItem.category}}<i class="material-icons down">
        keyboard_arrow_down
        </i></label>
        </div>
        <div id="menuSelect" v-if="selectActive">
            <ul><li @click="newItem.category = item"  v-for="item in items">{{item}}</li></ul>
        </div>

        <div id="inContainer">
            <span class="span">Subir Archivo</span>
            <input type="file" name="imgContent" @change="onFileSelected" id="input">
        </div>

        <textarea placeholder="Que ha pasado?" v-model="newItem.content" rows="5"></textarea>

        <div @click="addItem" id="publicar" class="btn"><p>Publicar</p></div>
    </div>

  </div>

</template>

<script>
import axios from 'axios';
    export default {
        data () {
            return {
                selectActive: false,
                newItem: {
                    category: 'Nacional',
                    content: '',
                    url: '',
                    date: Date.now(),
                },
                a: false,
                b: false,
                items: ["Nacional","Internacional","Politica","Deportes","Clasificados","varios"]
                
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
    #menuSelect{
        width: auto;
        padding: 0.5rem;
        border-radius: 5px;
        position: absolute;
        background-color:#fff;
        box-shadow: 0 2px 3px rgba(0,0,0,0.3);
    }
    #menuSelect li{
        padding: 0.5rem 1.5rem;
    }
    #select, textarea, #publicar,#inContainer{
        display: inline-block;
    }
    #select{
        width: 8rem;
    }
    textarea{
        width: 96%;
        resize: none;
        border: solid 1px #ccc;
        border-radius: 5px;
        padding: 2%;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
    #publicar{
        background-color: #2196f3;
        color: #fff;
        width: 8rem;
    }
    #inContainer{
        width: 8rem;
        padding-left: 1rem;
    }
    #input{
        width: 3rem;
        opacity: 0;
    }
    .span{
        position: absolute;
        color: #2196f3;
    }
    .down{
        position: absolute;
        font-size: 25px;
        transform: translateY(-4px);
    }
</style>