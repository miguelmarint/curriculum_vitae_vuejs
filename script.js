
const app = new Vue({
    el: '#app',
    data:{
        info: [],
    },
    methods:{
        getInfo: function(){
            axios.get('resume.json').then(response =>{
                this.info = response.data
            } )
        }
    },
    mounted:function(){
        this.getInfo();
    }
    
})
