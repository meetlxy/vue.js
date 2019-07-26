v-model="info"

v-on:click   @click  

v-bind 鼠标悬停

v-if 切换控制

v-for 绑定数组的数据来渲染一个项目列表

v-on` 指令添加一个事件监听器

v-model` 指令 实现表单输入和应用状态之间的双向绑定



Vue实例暴露了一些有用的实例属性与方法，都有前缀$，以便于用户定义的属性区分开

```
var data = { a: 1 }
var vm = new Vue({
el: '#example',
data: data
})
vm.$data === data // => true
vm.$el === document.getElementById('example') // => true
// $watch 是一个实例方法
vm.$watch('a', function (newValue, oldValue) {
// 这个回调将在 `vm.a` 改变后调用
})
```

### 实例生命周期钩子

created钩子用来在一个实例被创建之后执行代码

```
new Vue({
data: {
a: 1
},
created: function () {
// `this` 指向 vm 实例
console.log('a is: ' + this.a)
}
})
// => "a is: 1"
```

也有一些其它的钩子，在实例生命周期的不同阶段被调用，如 [`mounted`](https://cn.vuejs.org/v2/api/#mounted)、[`updated`](https://cn.vuejs.org/v2/api/#updated) 和 [`destroyed`](https://cn.vuejs.org/v2/api/#destroyed)。生命周期钩子的 `this` 上下文指向调用它的 Vue 实例。

 ## 模板语法

### 文本

```
<span>Message: {{ msg }}</span>
```

v-once指令：执行一次性插值，当数据改变时，插值处的内容不会更新。

```
<span v-once>Message：{{ msg  }} </span>
```

### 原始HTML

v-html

<p>Using mustaches: {{ rawHtml }}</p>
<p>Using v-html directive: <span v-html="rawHtml"></span></p>
warning：站点上动态渲染的任意 HTML 可能会非常危险，因为它很容易导致 [XSS 攻击](https://en.wikipedia.org/wiki/Cross-site_scripting)。请只对可信内容使用 HTML 插值，**绝不要**对用户提供的内容使用插值。

### 特性

Mustache语法不能作用在HTML特性上，遇到这种情况应使用v-bind指令

<div v-bind:id="dynamic"> </div>
对于布尔特性：

<button v-bind:disabled="isButtonDisabled">Button</button>

### 使用JavaScript表达式

{{ number + 1 }}
{{ ok ? 'YES' : 'NO' }}
{{ message.split('').reverse().join('') }}

<div v-bind:id="'list-' + id"></div>
每个绑定只能包含单个表达式

<!-- 这是语句，不是表达式 -->
{{ var a = 1 }}
<!-- 流控制也不会生效，请使用三元表达式 -->
{{ if (ok) { return message } }}

### 指令

带有v-前缀的特殊特性

预期是单个JavaScript表达式

指令的职责是，当表达式的值改变，将其产生的连带影响，响应式地作用域DOM

### 参数

一些指令能够接受一个“参数”，在指令名称之后以冒号表示。

v-bind指令可以响应式地更新HTMl特性

v-on 用于监听DOM事件，参数是监听的事件名

### 动态参数

 从 2.6.0 开始，可以用方括号括起来的 JavaScript 表达式作为一个指令的参数

### 修饰符

修饰符 (modifier) 是以半角句号 `.` 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。例如，`.prevent` 修饰符告诉 `v-on` 指令对于触发的事件调用 `event.preventDefault()`：

### 缩写

#### v-bind缩写

 ：

#### v-on缩写

@



## 计算属性

对于任何复杂逻辑，都应使用计算属性。

## 方法

可使用调用方法达到同样的效果。

将同一个函数定义为一个方法而不是一个计算属性



两种方式最终结果是相同的，不同的是计算属性是基于它们的响应式依赖进行缓存的。

只有相关响应式依赖发生改变时它们才会重新求值，这就意味着message还没有发生改变，多次访问reverseMessage计算属性会立即返回之前的计算结果，而不必再次执行函数。

相比之下，每次出发重新渲染时，调用方法总会再次执行函数。

如果不希望有缓存，使用方法替代。

### 计算属性&侦听属性

Vue提供了一种更通用的方式来观察和响应Vue实例上的数据变动：侦听属性

### 计算属性的setter

计算属性默认只有getter，不过需要时也可以提供一个setter

## 侦听器

虽然计算属性在大多数情况下更合适，但有时也需要一个自定义的侦听器。

Vue通过Watch选项提供可一个更通用的方法，来响应数据的变化。

当需要在数据变化时执行异步 或 开销较大的操作时，这个方法是最有用的。



