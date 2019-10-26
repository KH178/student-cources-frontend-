<template>
      <div id="studentForm">
      <h1>Add Student</h1>
      <form v-on:submit='postStudents'>
        <div class="nameContainer">
        <label for="name">Name</label>
        <input v-model="name" placeholder="name" name="name" id="name">
        </div>
        <div class="rollNoContainer">
        <label for="rollNo">RollNo</label>
        <input type="Number" v-model="rollNo" placeholder="rollNo" rollNo="rollNo" id="rollNo">
        </div>
        <div class="addressContainer">
        <label for="address">Address</label>
        <input type="text" v-model="address" placeholder="address" address="address" id="address">
        </div>
        <div class="collegeContainer">
        <label for="college">college</label>
        <input v-model="college" placeholder="college" college="college" id="college">
        </div>
        <button>Submit</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';


export default {
    name: "StudentForm",
    data(){
        return {
        name: '',
        rollNo: 0,
        address: '',
        college: '',
        res: [],
        err: []
        }
    },
    methods:{
        postStudents(e){
            e.preventDefault();
            let parsedData = {name: this.name,
                rollNo: this.rollNo,
                address: this.address,
                college: this.college,
                cources: [...this.$attrs.courcesStudenChoose]};
                this.err = [...this.$attrs.courcesStudenChoose] 
            axios.post('/students',{
                method: 'POST',
                headers:{
                    'Content-Type' : 'application/json; charset=UTF-8',
                    'Accept': 'Token',
                    "Access-Control-Allow-Origin": "*"
                },
                data:parsedData
            })
        }
    }
}
</script>

<style scoped>

</style>