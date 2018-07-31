import axios from 'axios'
let getters = {
	completed(state) {
		return state.todos.filter(e => e.isCompleted === true);
	},
	remaining(state) {
		return state.todos.filter((e => e.isCompleted === false));
	},
	getItem(state) {
		return state.todos;
	},
	getDataFromServer(state){
		return state.product;
	}
}

export default getters