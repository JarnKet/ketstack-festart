import React from "react";
import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

// Third Party
import { useAutoAnimate } from "@formkit/auto-animate/react";
import clsx from "clsx";

// UI
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import {
	Card,
	CardHeader,
	CardContent,
	CardTitle,
	CardFooter,
	CardDescription,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import AlertModal from "@/components/AlertModal";

// Icons

import {
	Plus,
	Check,
	Trash2,
	BookMarked,
	LayoutList,
	Eraser,
} from "lucide-react";

// Utils
import { cn } from "@/lib/utils";

// Magic Values
import { useTodoStore } from "@/store/todo";
import { stacks } from "@/constants/stacks";

export const Route = createFileRoute("/")({
	component: IndexPage,
});

function IndexPage() {
	// Instance
	const { toast } = useToast();
	const navigate = useNavigate();

	// States
	const todoStore = useTodoStore((state) => state.todo);
	const addTodo = useTodoStore((state) => state.addTodo);
	const removeTodo = useTodoStore((state) => state.removeTodo);
	const toggleTodo = useTodoStore((state) => state.toggleTodo);
	const clearTodo = useTodoStore((state) => state.clearTodo);
	const [todo, setTodo] = useState("" as string);

	// Hooks
	const [animationParent] = useAutoAnimate();

	// Function
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// const prevTodoList = [...todoList];
		// prevTodoList.push({
		// 	title: todo,
		// 	completed: false,
		// });
		// setTodoList(prevTodoList);

		addTodo({
			id: Math.random(),
			title: todo,
			completed: false,
		});
		setTodo("");

		toast({
			description: "Todo added.",
		});
	};

	const handleDelete = (id: number) => {
		// const prevTodoList = [...todoList];
		// prevTodoList.splice(id, 1);
		// setTodoList(prevTodoList);

		removeTodo(id);

		toast({
			description: "Todo deleted.",
		});
	};

	const handleComplete = (id: number) => {
		// const prevTodoList = [...todoList];
		// prevTodoList[id].completed = !prevTodoList[id].completed;
		// setTodoList(prevTodoList);

		toggleTodo(id);
	};

	return (
		<div className="relative px-4 md:px-0">
			<Navbar />
			<section className="py-32 ">
				<div className="overflow-hidden ">
					<div className="container mx-auto">
						<div className="flex flex-col items-center max-w-5xl mx-auto">
							<div className="z-10 items-center text-center">
								<Badge variant="outline">Enterprise Plan</Badge>

								<h1 className="mb-8 text-4xl font-medium text-pretty lg:text-8xl">
									Ship your next project with Ketstack
								</h1>
								<p className="max-w-screen-md mx-auto text-muted-foreground lg:text-xl">
									{/* Generate Text with Enterprise Plan */}
									Enhance your enterprise-level projects with Ketstack
								</p>
								{/* <div className="flex flex-col justify-center w-full gap-2 mt-12 sm:flex-row">
									<a
										href="https://ketstack.jarnket.com"
										target="_blank"
										rel="noreferrer"
									>
										<Button>Get started now</Button>
									</a>
									<Button variant="ghost">
										Learn more
										<ExternalLink className="h-4 ml-2" />
									</Button>
								</div> */}
							</div>
						</div>

						<div className="flex flex-wrap items-center justify-center gap-4 my-4">
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
							<a
								href={"https://tanstack.com/router/latest"}
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
									<img
										src="https://tanstack.com/_build/assets/logo-color-600w-Er4SOkq1.png"
										alt="tanstack router"
										className="w-[32px] h-[32px] saturate-0 group-hover:saturate-100 transition-all ease-in-out duration-200"
									/>
								</div>
							</a>
							<a
								href={"https://auto-animate.formkit.com/"}
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
									<img
										src="https://avatars.githubusercontent.com/u/76744415?v=4"
										alt="formkit auto animate"
										className="w-[32px] h-[32px] saturate-0 group-hover:saturate-100 transition-all ease-in-out duration-200"
									/>
								</div>
							</a>
						</div>

						<section className="flex flex-col items-center justify-center gap-8 mx-auto mt-8">
							<Card className="md:max-w-[400px] max-h-[500px] w-full">
								<CardHeader>
									<CardTitle>Todo List</CardTitle>
									<CardDescription>
										The auto animation will trigger when you add or delete todo
									</CardDescription>
								</CardHeader>
								<CardContent className="space-y-6">
									<form
										onSubmit={handleSubmit}
										className="flex items-end w-full gap-4"
									>
										<div className="w-full">
											<Label>
												Todo Text
												<span className="text-red-500">*</span>
											</Label>
											<Input
												value={todo}
												onChange={(e) => setTodo(e.target.value)}
												type="text"
												placeholder="Enter todo text..."
												required
											/>
										</div>
										<Button type="submit">
											<Plus className="mr-2" />
											Add Todo
										</Button>
									</form>

									<div
										ref={animationParent}
										className="flex flex-col w-full gap-4 max-h-[200px] overflow-y-auto"
									>
										{todoStore.map((todo) => (
											<div
												// ref={animationParent}
												key={todo?.id}
												className={clsx(
													"relative flex items-center justify-between w-full p-2 border rounded-md",
													todo?.completed && "opacity-30  line-through",
												)}
											>
												<p>{todo?.title}</p>
												<div className="flex items-center gap-2 w-fit">
													<Check
														onClick={() => handleComplete(todo?.id)}
														className="text-green-500"
														role="button"
													/>
													<Trash2
														onClick={() => handleDelete(todo?.id)}
														className="text-red-500"
														role="button"
													/>
												</div>
											</div>
										))}
									</div>
								</CardContent>
								<CardFooter>
									<AlertModal
										trigger={
											<Button variant={"outline"}>
												<Eraser className="mr-2" />
												Clear All
											</Button>
										}
										title="Delete Todo?"
										actionFn={() => clearTodo()}
									>
										Are you sure you want to delete all todo?
									</AlertModal>
								</CardFooter>
							</Card>

							<div className="flex items-center gap-4 w-fit">
								<Button
									variant={"outline"}
									onClick={() => navigate({ to: "/posts" })}
								>
									<LayoutList className="mr-2" />
									Go to Private Route
								</Button>
								<Button>
									<BookMarked className="mr-2" /> Read Docs
								</Button>
							</div>
						</section>
					</div>
				</div>
			</section>
		</div>
	);
}
