<template>
    <div>

    <div id="contenedormenu" class="card" >
	    <div v-for="item in items" :key="item.title" class="menubox" >
	        <li>
	            <p class="opcion" @click="select=item.value" v-model="categoria">{{item.title}}</p>
	        </li>
	    </div>
    </div>

    <div id="contenedorsearch" class="card">
        <input type="search" v-model="busqueda" placeholder="Buscar Algo">
    </div>

    </div>

</template>

<script>
import { bus } from '../main';
    export default {
        data () {
            return {
            select: 'Categorias',
			busqueda: '',
            items: [
                { title: 'Todo', value: ''},
                { title: 'Nacionales', value: 'Nacional'},
                { title: 'Internacionales', value: 'Internacional'},
                { title: 'Deportes', value: 'Deportes'},
                { title: 'Clasificados', value: 'Clasificados'},
				{ title: 'Varios', value: 'Varios'},
            ],
            }
        },
        computed: {
			categoria: function(){ bus.$emit('categoria', this.select ); },

        },
		watch: {
			busqueda: function(){ bus.$emit('buscar', this.busqueda ); },
		}
    }
</script>

<style scoped>
    .opcion{
        cursor: pointer;
        display: block;
        padding: 0.6rem 0.4rem;
        border-radius: 5px;
        color: #888;
    }
    .opcion:hover{
        color: #333;
    }
    #contenedorsearch input{
        width: 100%;
        padding: 1rem 0.4rem;
        border-radius: 5px;
        border: none;
    }
    #contenedorsearch{
        padding: 0;
    }
</style>
