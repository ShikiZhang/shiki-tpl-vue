import '../css/index.css'

import Vue from 'vue'

import Hello from '../components/hello.vue'

let vue = new Vue({
    el: "#app",
    components: {
        Hello
    }
})