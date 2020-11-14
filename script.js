const url = "https://reqres.in/api/users/2";
const vm = new Vue({
        el: '#app',
        data: {
          results: []
        },
        mounted() {
          axios.get(url).then(response => {
            this.results = response.data.data
          })
        }
      });