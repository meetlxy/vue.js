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

var app8=new Vue({
    el:'#app-8',
    data:{
        message:'Hello'
    },
    computed:{
        //计算属性的getter函数
        reverseMessage:function(){
            //'this'指向app8实例
            return this.message.split('').reverse('').join('') 
        }
    }

})


var app9=new Vue({
    el:'#app-9',
    data:{
        message:'World'
    },
   methods:{
       reverseMessage(){
           return this.message.split('').reverse('').join('')       }
   }

})

var app10=new Vue({
    el:'#app-10',
    data:{
        firstName:'Foo',
        lastName:'Bar'
    },
    computed:{
        fullName:{
        //getter
        get: function(){
            return this.firstName+' '+this.lastName
        },
        //setter
        set: function(newValue){
            var names=newValue.split(' ')
            this.firstName=names[0]
            this.lastName=names[names.length-1]
        }
    }
}
})

var watchExampleVM=new Vue({
    el:'#watch-example',
    data:{
        question:' ',
        answer:' I can not give you an answer until you ask a question ！'
    },
    watch:{
        //如果‘question’发生改变，这个函数就会运行
        question:function(newQuestion,oldQuestion){
            this.answer='Wating for you to stop typing……'
            this.debouncedGetAnswer()
        }
    },
    created:function(){
        this.debouncedGetAnswer=_.debounce(this.getAnswer,500)
    },
    methods:{
        getAnswer:function(){
            if(this.question.indexOf('?')=== -1){
                this.answer='Question usually contain a question mark. ;-)'
                return
            }
            this.answer='Thinking……'
            var vm=this
            axios.get('http://yesno.wtf/api')
                .then(function(response){
                    vm.answer='Error! Could not reach the Api. '+ error
                })
        }
    }
})


var example1=new Vue({
    el:'#example-1',
    data:{
        items:[
            { message:'Foo' },
            { message:'Bar' }
        ]
    }
})

var example2=new Vue({
    el:'#example-2',
    data:{
        parentMessage:'Parent',
        items:[
            {message:'Foo'},
            {message:'Bar'}
        ]
    }
})

new Vue({
    el:'#v-for-object',
    data:{
        object:{
        title:'How to do lists in Vue',
        author:'Jane Doe',
        publishedAt:'2019-08-08'
    }
}
})

var number=new Vue({
    el:'#number',
    data:{
        numbers:[1,2,3,4,5]
    },
computed:{
    evenNumbers:function(){
        return this.numbers.filter(function(number){
            return number % 2===0
        })
    }

}
})

var example3=new Vue({
    el:'#example-3',
    data:{
        counter:0
    }
})

var example4=new Vue({
    el:'#example-4',
    data:{
        name:'Vue.js'
    },
    methods:{
        greet:function(event){
            alert('Hello '+this.name+'!')
            if(event){
                alert(event.target.tagName)
            }
        }
    }
})
//event 为原生DOM事件

var example5=new Vue({
    el:'#example-5',
    methods:{
        say:function(message){
            alert(message)
        }
    }
})

var warn=new Vue({
    el:'#warn',
    methods:{
        warn:function (message,event){
            //访问原生事件对象
            if(event) event.preventDefault()
            alert(message)
        }
    }
})