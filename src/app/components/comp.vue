<template>
  <div class="">
    <h1>hola desde el componente 1</h1>
    <input type="file" name="imgContent" @change="onFileSelected">

  </div>
</template>

<script>
import axios from 'axios';
    export default {
        data () {
            return {
            }
        },
        methods:{
          onFileSelected(event){
            var file = event.target.files[0];
            var storageRef = firebase.storage().ref('photos/' + file.name);
            storageRef.put(file);
            
          }
        }
    }
</script>

<style scoped>
</style>