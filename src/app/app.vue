<template>
  <div class="" id="containerBody">

    <div id="containerMenu">
        <app-menu></app-menu>
    </div>

    <div id="containerAddShow">
        <app-add></app-add>
        <app-show></app-show>
    </div>
    
    <app-hmobile></app-hmobile>

  </div>
</template>

<script>
    export default {
        data () {
            return {
            }
        }
    }
</script>

<style scoped>
@media screen and (max-width: 880px)and (min-width: 641px)  {
    #containerBody{
        display: inherit;
        margin: 0 auto;
        max-width: 640px;
        margin-top: 1rem;
    }
    #containerMenu{
        float: left;
        width: 180px;
        margin-right: 10px;
        margin-left: 10px;
    }
    #containerAddShow{
        display: inline-block;
    }
}
@media screen and (min-width: 881px)  {
     #containerBody{
        display: inherit;
        margin: 0 auto;
        max-width: 810px;
        margin-top: 1rem;
    }
    #containerAddShow{
        display: inline-block;
    }
    #containerMenu{
        float: left;
        width: 240px;
        margin-right: 10px;
        margin-left: 10px;
    }
}

</style>
