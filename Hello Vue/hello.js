var app=new Vue({
    el:'#app',
    data:{
        message:'Hello Vue!',
        info:''
    }


}) 

var app2=new Vue({
    el:'#app-2',
    data:{
        message:'页面加载于 '+new Date().toLocaleString()
    }
})

var app3=new Vue({
    el:'#app-3',
    data:{
        seen:true
    }
})

var app4=new Vue({
    el:'#app-4',
    data:{
        todos:[
            {text:'学习Javasrcipt'},
            {text:'学习Node.js'},
            {text:'学习Vue.js'}
        ]
    }
})

var app5=new Vue({
    el:'#app-5',
    data:{
        message:'Hello Vue.js!'
    },
    methods:{
        reverseMessage:function(){
            this.message=this.message.split('').reverse().join('')
        }
    }
})

var app6=new Vue({
    el:'#app-6',
    data:{
        message:'Hello World'
    }
})

Vue.component('todo-item',{
    //建立一个prop特性
    props:['todo'],
    template:'<li>{{todo.text}}</li>'
})

var app7=new Vue({
    el:'#app-7',
    data:{
        groceryList:[
            {id:0,text:'蔬菜'},
            {id:1,text:'奶酪'},
            {id:2,text:'随便什么吃的'}
        ]
    }
})