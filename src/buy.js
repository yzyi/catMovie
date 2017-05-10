// import Vue from "vue"
//  var eventTicked = new Vue({
//  	data:function(){
//  		return {
//  			todos:{}
//  		}
//  	},
//  	// 创建钩子监听add事件
//  	created:function(){
//  		this.$on("add",this.addTodo)
//  	},
//  	beforeDestroy:function(){
//  		this.$off("add",this.addTodo);
//  	},
//  	methods:{
//  		addTodo:function(newTodo){
//  			this.todos= newTodo
//  		}
 		
//  	}
//  })
//  export default eventTicked


 import Vue from "vue"

var eventTicked = new Vue({
	data:function(){
	  return {
	  	todos:[]
	  }
	},
	created:function(){
	　　this.$on("add", this.addTodo)
	　　this.$on('delete', this.deleteTodo)
	},
	beforeDestroy:function () {
	　　this.$off('add',this.addTodo)
	　　this.$off('delete', this.deleteTodo)
	},
	methods:{
	　　addTodo:function (newTodo,a) {
		   
		   	this.todos.push(newTodo)
		   	this.todos.push(a)
		   	// this.todos.push(b)
		  
	　　　　
	　　},
	　　deleteTodo: function (i) {
	　　　　this.todos.splice(i,1)
	　　}
	}
})
export default eventTicked;