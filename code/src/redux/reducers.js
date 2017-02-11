import { ADD_CONTACT, VIEW_CONTACT} from './actions';
const todos = function(state=[], action){
	switch(action.type){
		case('ADD_CONTACT'):
			return [
				...state,
				action.contact
			]
		case('VIEW_CONTACT'):
			return state.map((contact, index) => {
		        if (index === action.index) {
		          return Object.assign({}, contact)
		        }
		        return contact
		      })
		    default:
		      return state
	}
}

export default todos;