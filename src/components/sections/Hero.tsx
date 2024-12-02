import React from "react";

import { ArrowDownRight, ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { stacks } from "@/constants";

import { cn } from "@/lib/utils";

const Hero = () => {
	return (
		<section className="py-32">
			<div className="container mx-auto">
				<div className="grid items-center gap-8 lg:grid-cols-2">
					<div className="flex flex-col items-center text-center lg:items-start lg:text-left">
						<Badge variant="outline">
							Free Plan
							<ArrowDownRight className="ml-2 size-4" />
						</Badge>
						<h1 className="my-6 text-4xl font-bold text-pretty lg:text-6xl">
							Welcome to Ketstack
						</h1>
						<p className="max-w-xl mb-8 text-muted-foreground lg:text-xl">
							Where your idea comes to life in hour with powerful open source
							tools
						</p>
						<div className="flex flex-wrap items-center justify-center gap-4">
							{stacks.map((stack) => (
								<a
									key={stack.name}
									href={stack.link}
									target="_blank"
									rel="noreferrer"
								>
									<div
										className={cn(
											// buttonVariants({ variant: "outline" }),
											"group px-3",
											"dark:bg-transparent bg-white shadow rounded-lg p-2",
										)}
									>
										{React.cloneElement(stack.icon, {
											width: "32",
											height: "32",
											className:
												"w-full h-full  saturate-0 transition-all group-hover:saturate-100",
										})}
									</div>
								</a>
							))}
						</div>
						<div className="flex flex-col justify-center w-full gap-2 my-4 sm:flex-row lg:justify-start">
							<a
								href="https://ketstack.jarnket.com"
								target="_blank"
								rel="noreferrer"
							>
								<Button className="w-full sm:w-auto">Get Started</Button>
							</a>
							<Button variant="outline" className="w-full sm:w-auto">
								Learn More
								<ExternalLink className="ml-2 size-4" />
							</Button>
						</div>
					</div>
					<img
						src="https://www.shadcnblocks.com/images/block/placeholder-1.svg"
						alt="placeholder hero"
						className="object-cover w-full rounded-md max-h-96"
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
