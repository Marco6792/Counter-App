"use client";
import Counter from "@/components/Counter";
import PolygonShape from "@/components/ui/PolygonShape";
import { Card, CardTitle } from "@/components/ui/card";
import { CounterProvider, initState } from "@/context/CounterContext";

export default function Home() {
	return (
		<CounterProvider
			count={initState.count}
			amount={initState.amount}
			__isSignin={initState.__isSignin}>
			<div className="p-3">
				<PolygonShape />
				<Card className="max-w-md mx-auto mt-10 md:p-10 p-12 flex flex-col justify-center items-center max-sm:max-w-7xl">
					<CardTitle className="pb-5">Counter</CardTitle>
					<Counter>{(num: number) => <>current-count: {num}</>}</Counter>
				</Card>
			</div>
		</CounterProvider>
	);
}
