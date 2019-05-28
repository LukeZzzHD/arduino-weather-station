const initState = () => ({
	dataHistory: []
});

const historyReducer = (state = initState(), action) => {
	switch (action.type) {
		case 'UPDATE_HISTORY':
			if (state.dataHistory.length > 9) {
				let poppedHistory = state.dataHistory;
				poppedHistory.pop();
				return {
					dataHistory: [action.payload, poppedHistory]
				}
			} else {
				return {
					dataHistory: [action.payload, state.dataHistory]
				}
			}
		
		default:
			return state
	}
}

export default historyReducer;