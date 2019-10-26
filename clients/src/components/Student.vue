<template>
    <div >
        <h2>
           {{student.name}}
        </h2>
        <ul id="studentCources">
            <li v-bind:key="cource.id" v-for="cource in student.cources">{{cource}}</li>
        </ul>
        <p>{{student.address}}</p>
        <p>{{student.college}}</p>
        <p>{{student.rollNo}}</p>
        <button v-on:click="(student)=>deleteStudent(this.student)">Delete</button>
    </div>
</template>

<script>
    import axios from 'axios'
export default {
    name: "Student",
    props: ["student"],
    methods: {
        deleteStudent(student){
            alert(student._id);
            axios.delete('/students/'+student._id,{
                method: 'DELETE',
                 headers:{
                    'Content-Type' : 'application/json; charset=UTF-8',
                    'Accept': 'Token',
                    "Access-Control-Allow-Origin": "*"
                },
             
                }
      );
        }
    },
}
</script>

<style scoped>

</style>