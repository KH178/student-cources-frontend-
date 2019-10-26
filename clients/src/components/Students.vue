
<template>
    <div>
        <StudentForm v-bind="$attrs"/>
       <h1>All Students</h1>
    <div  class="allStudents">
        <div v-bind:key="student.id" v-for="student in students" class="studentContainer">
            <Student v-bind:student="student"/>
        </div>
    </div>
    </div>
</template>

<script>
import Student from './Student';
import StudentForm from './StudentForm';

export default {
    name: "Students",
    props: ["students"],
    data(){
        return {
            studentsData: ''
        }
    },
    components: {
        Student,
        StudentForm,
    }
}
</script>

<style scoped>
.allStudents{
    display: flex;
}
.studentContainer{
    flex-grow: 1; 
}
</style>