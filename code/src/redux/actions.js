export const ADD_CONTACT = 'ADD_CONTACT';

export const VIEW_CONTACT = 'VIEW_CONTACT';


export function addContact(contact){
	return {
		type: ADD_CONTACT,
		contact
	}
}

export function viewContact(index){
	return{
		type: VIEW_CONTACT,
		index
	}
}