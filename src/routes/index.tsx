import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

// Third Party
import { useAutoAnimate } from "@formkit/auto-animate/react";
import clsx from "clsx";

// UI
import { useToast } from "@/hooks/use-toast";
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

// Magic Values
import { useTodoStore } from "@/store/todo";

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
		<div className="relative">
			<Navbar />
			<main className="flex flex-col items-center justify-center min-h-screen gap-6">
				<h1 className="text-4xl font-bold">Enterprise Plan</h1>

				<Card className="md:max-w-[400px] max-h-[500px] w-full">
					<CardHeader>
						<CardTitle>Todo List</CardTitle>
						<CardDescription>A simple todo list app</CardDescription>
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
			</main>
		</div>
	);
}
