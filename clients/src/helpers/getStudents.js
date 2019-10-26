import axios from 'axios';
import Vue from 'vue';

Vue.mixin({
    methods: {
        initStudents(a) {
              axios.get('http://localhost:3000/students').then(res => {
                a = res.data;
            }).catch(e => {
                this.errors.push(e);
            })
        },
    }
})