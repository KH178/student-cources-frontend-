<template>
      <div id="courceForm">
      <h1>Add cources</h1>
      <form v-on:submit='postCource'>
        <div class="courceNameContainer">
        <label for="courceName">courceName</label>
        <input v-model="courceName" placeholder="courceName" courceName="courceName" id="courceName">
        </div>
        <div class="profContainer">
        <label for="professor">professor</label>
        <input type="text" v-model="professor" placeholder="professor" professor="professor" id="professor">
        </div>
        <button>Submit</button>
        </form>
    </div>
</template>

<script>
    import axios from 'axios'
export default {
    name: 'courcesForm',
    data() {
        return {
            courceName : '',
            professor: ''
        }
    },
  methods:{
     postCource(e){
          e.preventDefault();
           let parsedData = {courceName: this.courceName,
                professor: this.professor,
           }
        axios.post('http://localhost:3000/cources',{
                method: 'POST',
                headers:{
                    'Content-Type' : 'application/json; charset=UTF-8',
                    'Accept': 'Token',
                    "Access-Control-Allow-Origin": "*"
                },
                data:parsedData
            })
     }
},
}
</script>

<style lang="scss">

</style>