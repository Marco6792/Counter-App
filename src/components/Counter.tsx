"use client";
import { useCounter, useCounterAmount } from "@/context/CounterContext";
import { ReactNode } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ShapeContainer, ShapeContent } from "./ui/shapes";

type ChildrenType = {
	children: (num: number) => ReactNode;
};

const Counter = ({ children }: ChildrenType) => {
	const { count, increment, decrement } = useCounter();

	const { handleChangeInput } = useCounterAmount();

	return (
		<div>
			<ShapeContainer className="absolute left-3 md:ml-10 top-0 -z-40">
				<ShapeContent className="dark:from-blue-400 top-[1rem] ml-10 max-sm:w-[17.125rem] "></ShapeContent>
			</ShapeContainer>
			<h1 className="ml-10 shadow-sm py-3 pb-4 border text-card-foreground rounded-xl text-center">
				{children(count)}
			</h1>
			<Input
				placeholder="Enter a number"
				onChange={handleChangeInput}
				className="focus-visible:ring-0 mt-4 z-50 ml-4 py-4 h-12"
			/>
			<div className="flex space-x-10 mt-8 justify-center items-centerau">
				<Button onClick={increment} size="lg">
					increment
				</Button>
				<Button onClick={decrement} variant={"outline"} size="lg">
					decrement
				</Button>
			</div>
		</div>
	);
};

export default Counter;
