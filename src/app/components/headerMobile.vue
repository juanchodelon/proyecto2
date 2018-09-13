<template>
    <div>

    <div class="menu">
        <transition name="fade">     
            <div v-if="menu" id="Hmenu"><app-Mmobile></app-Mmobile></div>
        </transition>
    </div>

    <div class="add">
        <transition name="fade3">     
            <div v-if="add" id="Hadd">
                <div class="card"><h2>ADD</h2></div>
            </div>
        </transition>
    </div>

    <div class="barrabusqueda">
        <transition name="fade2">     
            <div v-if="search" id="Hsearch">
                <input type="search" v-model="busqueda" placeholder="buscar algo">
            </div>
        </transition>
    </div>

    <div class="container" id="hmobile">
        <div class="item-a center">
            <i class="material-icons" @click="menuf">
            menu
            </i>
        </div>
        <div class="item-b center">
            <i class="material-icons" @click="agregarf">
            add
            </i>
        </div>
        <div class="item-c center">
            <i class="material-icons" @click="buscarf">
            search
            </i>
        </div>

    </div>
    </div>
</template>

<script>
import { bus } from '../main';
import axios from 'axios';
    export default {
        data () {
            return {
                menu: false,
                search: false,
                add: false,
                busqueda: '',
            }
        },
        methods:{
            menuf:function(){
                this.menu = !this.menu
                this.search = false
                this.add = false
            },
            buscarf(){
                this.menu = false;
                this.search = !this.search
                this.add = false;
            },
            agregarf(){
                this.menu = false;
                this.search = false;
                this.add = !this.add
            }
        },
		watch: {
			busqueda: function(){ bus.$emit('buscar', this.busqueda ); },
		},
    }
</script>

<style scoped>
.container{
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 0.5rem;
}
.item-a{
    grid-column-start: 1;
    grid-column-end: 2;
}
.item-b{
    grid-column-start: 2;
    grid-column-end: 3;
}
.item-c{
    grid-column-start: 3;
    grid-column-end: 4;
}
.center{
    place-self: center;
}
i{
    color: #FFF;
    font-size: 28px;
    cursor: pointer;
}

#Hmenu{
    position: fixed;
    top: 0;
    bottom: 3rem;
    left: 0;
    right: 5rem;
    overflow: auto;
    background-color: #FFF;
    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
}
.fade-enter-active,.fade-leave-active {
  transition: all .3s ease-in-out;
}
.fade-enter, .fade-leave-to{
  transform: translateX(-100%);
}

#Hsearch{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 0 2px 3px rgba(0,0,0,0.3);
}
#Hsearch input{
    padding: 1rem 0.6rem;
    border: none;
    background: #FFF;
    font-size: 15px;
    width: 100%
}
.fade2-enter-active,.fade2-leave-active {
  transition: all .2s ease-in-out;
}
.fade2-enter, .fade2-leave-to{
  transform: translateY(-100%);
}

#Hadd{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.3);
}
.fade3-enter-active,.fade3-leave-active {
  transition: opacity .3s;
}
.fade3-enter, .fade3-leave-to{
  opacity: 0;
}
@media screen and (min-width: 640px)  {
    #Hmenu, #Hadd, #Hsearch{
        display: none;
    }
}
</style>