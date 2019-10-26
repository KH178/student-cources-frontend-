  <template>
  <div id="cources">
  <h1>All Cources</h1>
   <div class="courceContainer">
       <div v-bind:key="cource.id"
        v-for="cource in cources"
        class="singleCource"
          >
          <CourceSingle v-bind:cource="cource"/>
          </div>
   </div>
  </div>
</template>

<script>
import axios from 'axios';
import CourceSingle from './CourceSingle';


export default {
  name: 'Cources',
  components: {
      CourceSingle
  },
  props:{
      addCource:{
          type: Function
      },
      remCource:{
          type: Function
      }
  },
  data(){
    return {
      cources:[],
      errors: [],
    //   courcesSlected: []
    }
  },
  methods:{
     initCources(){
         axios.get('/cources').then(res=>{ 
        this.cources = res.data;
        }).catch(e=>{
         this.errors.push(e)
  })
     },
     addCources(cource){
         this.addCource(cource);
        //  this.courcesSlected = [...this.courcesSlected,cource]
     },
     removeCource(cource){
         this.remCource(cource)
        //  this.courcesSlected = this.courcesSlected.filter(cor=>cor !== cource)
     },
     

  },
  mounted(){
  this.initCources();
}
}
</script>

<style lang="scss">
#cources {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.courceName{
    color: red;
}
.courceContainer{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
}
.singleCource{
     flex-grow:1;
}

</style>
