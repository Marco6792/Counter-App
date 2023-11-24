"use client";
import { useCounter, useCounterAmount, useIsSignIn } from "@/context/CounterContext";
import { ReactNode } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

type ChildrenType = {
	children: (num: number) => ReactNode;
};

const Counter = ({ children }: ChildrenType) => {
	const { count, increment, decrement } = useCounter();
	const { __isSignin } = useIsSignIn();

	console.log({ __isSignin });

	const { amount, handleChangeInput } = useCounterAmount();

	return (
		<div className="relative">
			<h1 className="ml-10 shadow-sm py-3 text-card-foreground rounded-xl text-center">
				{children(count)}
			</h1>
			<Input
				placeholder="Enter a number"
				onChange={handleChangeInput}
				className="focus-visible:ring-0 mt-4"
			/>
			<div className="flex space-x-10 mt-5">
				<Button onClick={increment}>increment</Button>
				<Button onClick={decrement} variant={"outline"}>
					decrement
				</Button>
			</div>
		</div>
	);
};

export default Counter;
