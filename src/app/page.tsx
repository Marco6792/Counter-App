"use client";
import Counter from "@/components/Counter";
import { ModeToggle } from "@/components/ModeToggle";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CounterProvider, initState } from "@/context/CounterContext";

export default function Home() {
	return (
		<CounterProvider
			count={initState.count}
			amount={initState.amount}
			__isSignin={initState.__isSignin}>
			<div>
				<div className="flex justify-end mr-10 mt-10">
					<ModeToggle></ModeToggle>
				</div>
				<div className="p-3">
					<Card className="max-w-xl md:max-w-md mx-auto mt-10 md:p-10 p-16 flex flex-col justify-center items-center max-sm:max-w-7xl relative">
						<CardHeader>
							<CardTitle className="pb-5">Counter</CardTitle>
						</CardHeader>
						<Counter>
							{(num: number) => (
								<>
									count: <span className="ml-4">{num}</span>
								</>
							)}
						</Counter>
						<CardFooter className="absolute -bottom-2 left-3 pb-4 text-sm dark:text-primary-foreground">
							powered by <span className="text-muted-foreground ml-1">@marco</span>
						</CardFooter>
					</Card>
				</div>
			</div>
		</CounterProvider>
	);
}
