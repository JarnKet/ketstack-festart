import { ModeToggle } from "./mode-toggle";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";

// Icons
import { ListTodo } from "lucide-react";

// Store
import { useTodoStore } from "@/store/todo";

const Navbar = () => {
	const todo = useTodoStore((state) => state.todo);

	const unCompleteTodo = todo?.filter((todo) => todo?.completed === false);

	return (
		<header className="sticky top-0 flex items-center justify-between p-4 shadow">
			<h1 className="text-3xl font-bold">Ketstack / FEStart</h1>
			<div className="flex items-center gap-3">
				<ModeToggle />
				<Popover>
					<PopoverTrigger asChild>
						<Button variant={"outline"} className="relative">
							<ListTodo className="w-4 h-4" />
							{unCompleteTodo?.length > 0 && (
								<div className="absolute flex items-center justify-center top-[-8px] right-0 w-6 h-6 bg-red-500 rounded-full animate-pulse">
									{unCompleteTodo?.length}
								</div>
							)}
						</Button>
					</PopoverTrigger>
					<PopoverContent>
						{unCompleteTodo?.length > 0 ? (
							<p>{unCompleteTodo?.length} item(s) left</p>
						) : (
							<p>No uncompleted item, good job</p>
						)}
					</PopoverContent>
				</Popover>
			</div>
		</header>
	);
};

export default Navbar;
