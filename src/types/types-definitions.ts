export type StateType = {
	count: number;
	amount: number;
	__isSignin: boolean;
};

export const enum REDUCER_ACTION_TYPE {
	INCREMEN,
	DECREMENT,
	HANDLE_INPUT,
	HANDLE_SIGNIN,
}

export type ReducerActionType = {
	type: REDUCER_ACTION_TYPE;
	payloid?: string | number;
};
