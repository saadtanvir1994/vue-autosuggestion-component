<!-- Some component.vue -->
<template>
<div>
  <vue-simple-suggest
    :list="getSuggestions"
    @focus= "focusSuggestions"
    :min-length = 0
    
    
        >
<!-- Filter by input text to only show the matching results -->
  </vue-simple-suggest>

  <br>

  </div>
</template>

<script>
  import VueSimpleSuggest from 'vue-simple-suggest'
  import axios from 'axios'
  import 'vue-simple-suggest/dist/styles.css' // Optional CSS

  export default {
    components: {
      VueSimpleSuggest
    },
    data() {
      return {
       
      }
    },

    methods: {
   
   
    getSuggestions(query) {
    return axios.get('http://dev05.quasiris.de:8087/api/v1/admin/search/fields/suggest/hornbach-de/search/',{
    params: {
      q: query
    }
      }).then((res) => res.data.map(x => x.value));
  }
  ,
    focusSuggestions() {
    console.log('focus');
     return axios.get('http://dev05.quasiris.de:8087/api/v1/admin/search/fields/suggest/hornbach-de/search?q').then((res) => res.data.map(x => x.value));
     console.log('focus2');

  }
      
     
    }
  }
</script>
