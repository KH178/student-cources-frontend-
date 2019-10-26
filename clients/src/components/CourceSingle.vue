<template>
<div>
    <p
    v-on:click="updateSelectCource"
    v-bind:class="{active: isActive}"
    >
    {{cource.courceName}}
    </p>
    <p>{{cource.professor}}</p>
    <div>
    <p v-bind:key="student.id" v-for="student in cource.student">{{student.name}}</p>    
    <button v-on:click="()=>deleteCource(this.cource._id)">Delete</button>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'CourceSingle',
    props:['cource'],
    data() {
        return {
             isActive: false
        }
    },
    methods: {
        updateSelectCource(e){
        this.isActive = !this.isActive;
        this.isActive && this.addCource(e.target.innerHTML);
        !this.isActive && this.removeCource(e.target.innerHTML);
        return
     },
      addCource(val){
         this.$parent.addCources(val)
     },
     removeCource(val){
         this.$parent.removeCource(val)
     },
     deleteCource(id){
         alert(id);
          axios.delete('http://localhost:3000/cources/'+id,{
                method: 'DELETE',
                 headers:{
                    'Content-Type' : 'application/json; charset=UTF-8',
                    'Accept': 'Token',
                    "Access-Control-Allow-Origin": "*"
                },
                })
     }
    },
}
</script>

<style lang="scss">
.active{
    color: blue
}
// .singleCource{
//     flex: 0 1 auto
// }
</style>