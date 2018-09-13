<template>
    <div>

    <div id="contenedormenu">
	    <div v-for="item in items" :key="item.title" class="menubox" >
	        <li>
	            <p class="opcion" @click="select=item.value" v-model="categoria">{{item.title}}</p>
	        </li>
	    </div>
    </div>

    </div>

</template>

<script>
import { bus } from '../main';
    export default {
        data () {
            return {
            select: '',
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
    }
</script>

<style scoped>
    .opcion{
        cursor: pointer;
        display: block;
        padding: 0.6rem 15%;
        border-radius: 5px;
        color: #666;
    }
    #contenedormenu{
        padding-top: 1.3rem;
    }
</style>