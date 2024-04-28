/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer } from "react";

// Constants and initial data
const AppContext = createContext({
	balance: 0,
	expense: 0,
	transactions: [],
	addBalance: (income) => {},
	addExpense: (newExpenseObject) => {},
	deleteExpense: (id) => {},
	editExpense: (expenseObject) => {},
});

const initialAppState = {
	balance: 0,
	expense: 0,
	transactions: [],
};

const localStorageKey = "appState";

// Helper functions
function getDataFromLocalStorage() {
	return JSON.parse(localStorage.getItem(localStorageKey));
}

function postDataToLocalStorage(data) {
	localStorage.setItem(localStorageKey, JSON.stringify(data));
}

// Reducer function
function appReducer(state, action) {
	// create a copy of context
	const updatedState = { ...state, transactions: [...state.transactions] };

	if (action.type === "INIT") {
		//
		postDataToLocalStorage(action.data);
		return action.data;
	} else if (action.type === "ADD_BALANCE") {
		//
		updatedState.balance += +action.income;
	} else if (action.type === "ADD_EXPENSE") {
		//
		updatedState.transactions.push(action.newExpense);
		updatedState.balance -= +action.newExpense.price;
		updatedState.expense += +action.newExpense.price;
	} else if (action.type === "EDIT_EXPENSE") {
		//
		const foundItemIdx = state.transactions.findIndex(
			(item) => item._id === action.expense._id
		);

		if (foundItemIdx != -1) {
			//
			const oldPrice = state.transactions[foundItemIdx].price;
			updatedState.balance =
				state.balance + +oldPrice - +action.expense.price;
			updatedState.expense =
				state.expense - +oldPrice + +action.expense.price;

			updatedState.transactions[foundItemIdx] = { ...action.expense };
		}
	} else if (action.type === "DELETE_EXPENSE") {
		//
		const foundItemIdx = state.transactions.findIndex(
			(item) => item._id === action.expenseId
		);

		if (foundItemIdx != -1) {
			const removedItemPrice = state.transactions[foundItemIdx].price;

			updatedState.expense = state.expense - +removedItemPrice;
			updatedState.balance = state.balance + +removedItemPrice;
			updatedState.transactions = state.transactions.filter(
				(item, idx) => idx !== foundItemIdx
			);
		}
	}

	postDataToLocalStorage(updatedState);
	return updatedState;
}

// Provider component
function AppContextProvider({ children }) {
	const [appState, dispatch] = useReducer(appReducer, initialAppState);

	useEffect(() => {
		const localStorageData = getDataFromLocalStorage();
		if (localStorageData) {
			dispatch({
				type: "INIT",
				data: localStorageData,
			});
		}
	}, []);

	function addBalance(income) {
		dispatch({
			type: "ADD_BALANCE",
			income: income,
		});
	}

	function addExpense(newExpense) {
		if (appState.balance < newExpense.price) return false;
		dispatch({ type: "ADD_EXPENSE", newExpense: newExpense });
		return true;
	}

	function deleteExpense(expenseId) {
		dispatch({ type: "DELETE_EXPENSE", expenseId: expenseId });
	}

	function editExpense(expense) {
		dispatch({ type: "EDIT_EXPENSE", expense: expense });
	}

	const value = {
		...appState,
		addBalance: addBalance,
		addExpense: addExpense,
		deleteExpense: deleteExpense,
		editExpense: editExpense,
	};

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
export { AppContext };
