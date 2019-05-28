const initState = () => ({
	temperature: '...',
	humidity: '...',
	light: '...',
	date: false
});

const dataReducer = (state = initState(), action) => {
	switch (action.type) {
		case 'UPDATE_DATA':
			return action.payload;
		
		default:
			return state;
	}
}

export default dataReducer;

