import { cn } from "@/lib/utils";
import * as React from "react";

const ShapeContainer = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div
			ref={ref}
			className={cn(
				"blur-3xl fixed md:ml-[18rem] max-w-lg max-sm:overflow-hidden max-sm:-mt-20",
				className,
			)}
			{...props}
		/>
	),
);

ShapeContainer.displayName = "ShapeContainer";

const ShapeContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div
			ref={ref}
			className={cn(
				" aspect-[1155/678] max-sm:w-[15.125rem] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] relative ",
				className,
			)}
			{...props}
			style={{
				clipPath:
					"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
			}}
		/>
	),
);

ShapeContent.displayName = "ShapeContent";

export { ShapeContainer, ShapeContent };
