import * as types from '../mutations-type.js'
let mutations = {
	[types.ADD_NEW_TODO](state, payload) {
		let newTodo = { payload };
		state.todos.push(newTodo);
	},
	[types.TOGGLE_STATUS](state, payload) {
		let todo = payload
		todo.isCompleted = !todo.isCompleted
	},
	[types.DELETE_TODO](state, payload) {
		state.todos.splice(state.todos.indexOf(payload), 1);
	}
}

export default mutations