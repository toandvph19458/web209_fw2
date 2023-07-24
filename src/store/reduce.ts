import { DELETE_PRODUCT, GETALL_PRODUCT, SET_TODO_INPUT, UPDATE_PRODUCT } from "./constant";
import { instance } from "../api/config";
import { produce } from "immer";
export const initState = {
	todo: [],
	todoInput: "",
};

const reducer = (state = initState, action: any) => {
	return produce(state, (drafState) => {
		switch (action.type) {
			case GETALL_PRODUCT:
				drafState.todo = action.payload;
				break;
			case SET_TODO_INPUT:
				drafState.todo.push(action.payload as never);
				break;
			case DELETE_PRODUCT:
				drafState.todo = drafState.todo.filter((item: any) => item.id != action.payload);
				break;
			case UPDATE_PRODUCT:
				const product = action.payload;
				drafState.todo = drafState.todo.map((item: any) => (item.id === product.id ? product : item));
				break;
			default:
				return state;
		}
	});
};

export default reducer;
