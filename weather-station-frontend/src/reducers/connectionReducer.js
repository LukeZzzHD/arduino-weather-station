const initState = () => ({
	connection: true
});

const connectionReducer = (state = initState(), action) => {
	switch (action.type) {
		case 'CONNECT':
			return {
				connection: true
			};
			
		case 'DISCONNECT':
			return {
				connection: false
			};
		
		default:
			return state
	}
}

export default connectionReducer;