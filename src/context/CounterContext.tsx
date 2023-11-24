import { REDUCER_ACTION_TYPE, StateType } from "@/types/types-definitions";
import { ReactElement, createContext, useCallback, useContext, useReducer } from "react";

export const initState: StateType = { count: 0, amount: 0, __isSignin: false };

type ReducerActionType = {
	type: REDUCER_ACTION_TYPE;
	payload?: number;
};

const reducerFunction = (state: StateType, action: ReducerActionType): StateType => {
	switch (action.type) {
		case REDUCER_ACTION_TYPE.INCREMEN:
			if (state.amount === 0) return { ...state, count: state.count + 1, __isSignin: true };
			return { ...state, count: state.count + state.amount, __isSignin: true };
		case REDUCER_ACTION_TYPE.DECREMENT:
			if (state.amount === 0) return { ...state, count: state.count - 1 };
			return { ...state, count: state.count - state.amount };
		case REDUCER_ACTION_TYPE.HANDLE_INPUT:
			return { ...state, amount: action.payload ?? 0 };
		case REDUCER_ACTION_TYPE.HANDLE_SIGNIN:
			return { ...state, __isSignin: !state.__isSignin };
		//break default
		default:
			throw new Error("Error *** here!");
	}
};

const useCounterContext = (initState: StateType) => {
	const [state, dispatch] = useReducer(reducerFunction, initState);
	const increment = useCallback(() => {
		dispatch({ type: REDUCER_ACTION_TYPE.INCREMEN });
	}, []);
	const decrement = useCallback(() => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT }), []);

	const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value: number = parseInt(e.target.value);
		dispatch({ type: REDUCER_ACTION_TYPE.HANDLE_INPUT, payload: value });
	};

	return { state, increment, decrement, handleChangeInput };
};

type UseCounterContextType = ReturnType<typeof useCounterContext>;

const initContextState: UseCounterContextType = {
	state: initState,
	increment: () => {},
	decrement: () => {},
	handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => {},
};

export const CounterContext = createContext<UseCounterContextType>(initContextState);

type ChildrenType = {
	children?: ReactElement | undefined;
};
export const CounterProvider = ({
	children,
	...initState
}: ChildrenType & StateType): React.ReactElement => {
	return (
		<CounterContext.Provider value={useCounterContext(initState)}>
			{children}
		</CounterContext.Provider>
	);
};

type UseCounterHookType = {
	count: number;
	increment: () => void;
	decrement: () => void;
};

export const useCounter = (): UseCounterHookType => {
	const {
		state: { count },
		increment,
		decrement,
	} = useContext(CounterContext);

	return { count, increment, decrement };
};

type UseCounterHookInputType = {
	amount: number;
	handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const useCounterAmount = (): UseCounterHookInputType => {
	const {
		state: { amount },
		handleChangeInput,
	} = useContext(CounterContext);

	return { amount, handleChangeInput };
};

type UseIsSignInHookeType = {
	__isSignin: boolean;
};

export const useIsSignIn = (): UseIsSignInHookeType => {
	const {
		state: { __isSignin },
	} = useContext(CounterContext);

	return { __isSignin };
};
