  <template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <courcesForm/>
   <Cources :addCource="this.addCource" :remCource="this.remCource"/>
   <Students :students="students" :courcesStudenChoose="courcesSlected"/>
  </div>
</template>

<script>
import Students from './components/Students';
import Cources from './components/cources';
import courcesForm from './components/CourcesForm';
import axios from 'axios';


export default {
  name: 'app',
  components: {
    Students,
    Cources,
    courcesForm
  },
  data(){
    return {
      students:[],
      errors: [],
      courcesSlected: []
    }
  },
  methods:{
     initStudents(){
        axios.get('/students').then(res=>{ 
        this.students = res.data;
  }).catch(e=>{
    this.errors.push(e);
  })
     },
  addCource(cource){
    this.courcesSlected = [...this.courcesSlected,cource]
  },
  remCource(cource){
    this.courcesSlected = this.courcesSlected.filter(cor=>cor !== cource)
  }
},
  mounted(){
  alert('Mount')
  this.initStudents();
}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
