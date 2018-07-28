<template>
  <div class="">

    <h1>hola desde el componente 1</h1>

    <input type="file" name="imgContent" @change="onFileSelected">
    <button @click='onUpload'>upload</button>

    <button @click="comprobar">comp</button>
    <img :src="urlimage">

  </div>
</template>

<script>
import axios from 'axios';
    export default {
        data () {
            return {
              file: '',
              storageRef: '',
              urlimage: ''
            }
        },
        methods:{
          onFileSelected(event){
            this.file = event.target.files[0];
            this.storageRef = firebase.storage().ref('photos/' + this.file.name);
          },
          onUpload(){
            if(this.file != null){
              this.storageRef.put(this.file)
              .then(res => {
                console.log(res);
              })
            }
          },
          comprobar(){
            var starsRef = firebase.storage().ref('photos/pikachu.jpg');
            starsRef.getDownloadURL().then(function(url) {
              console.log(url);
            })
          }
        }
    }
</script>

<style scoped>
</style>