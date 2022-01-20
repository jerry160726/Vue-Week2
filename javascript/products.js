import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.0.9/vue.esm-browser.js';
const apiUrl= 'https://vue3-course-api.hexschool.io/v2';
const apiPath= 'ttest';


createApp({
  data() {
    return {
      apiUrl: apiUrl,
      apiPath: apiPath,
      products:[],
      tempProduct: {},
    }
  },
  methods: {
    checkAdmin() {
      const url = `${this.apiUrl}/api/user/check`;
      axios.post(url).then((res)=>{
        // console.log(res.data);
        this.getData();
      }).catch((err)=>{
        alert(err.data.message);
        window.location = 'index.html';
      })
    },
    getData(){
      const url = `${this.apiUrl}/api/${this.apiPath}/admin/products`
      axios.get(url).then((res)=>{
        // console.log(res.data.products);
        this.products = res.data.products;
      }).catch((err)=>{
        // console.log(err);
        alert(err.data.message);
      })
    },
    openProduct(){
      this.tempProduct = item;
    }
  },
  mounted() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    axios.defaults.headers.common.Authorization = token;
    console.log(token);
    this.checkAdmin();
  }
}).mount('#app');