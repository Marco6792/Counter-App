"use client";
import Counter from "@/components/Counter";
import { ModeToggle } from "@/components/ModeToggle";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { CounterProvider, initState } from "@/context/CounterContext";

export default function Home() {
	return (
		<CounterProvider
			count={initState.count}
			amount={initState.amount}
			__isSignin={initState.__isSignin}>
			<div>
				<div className="ml-10 mt-10">
					<ModeToggle></ModeToggle>
				</div>
				<div className="p-3">
					<Card className="max-w-xl md:max-w-md mx-auto mt-10 md:p-10 p-16 flex flex-col justify-center items-center max-sm:max-w-7xl">
						<CardHeader>
							<CardTitle className="pb-5">Counter</CardTitle>
						</CardHeader>
						<Counter>{(num: number) => <>current-count: {num}</>}</Counter>
					</Card>
				</div>
			</div>
		</CounterProvider>
	);
}
