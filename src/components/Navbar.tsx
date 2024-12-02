// Third Party

// UI
import { ModeToggle } from "./mode-toggle";
import { Button } from "@/components/ui/button";

import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

// Icons
import { ExternalLink, Menu } from "lucide-react";

const Navbar = () => {
	return (
		<section className="py-8 ">
			<div className="container mx-auto">
				<nav className="justify-between hidden lg:flex">
					<div className="flex items-center gap-6">
						<div className="flex items-center gap-2">
							<img
								src="/logo.png"
								className="w-12 h-12 dark:invert"
								alt="logo"
							/>
							<span className="text-xl font-bold">Ketstack</span>
						</div>
					</div>
					<div className="flex gap-2">
						<a
							href="https://ketstack.jarnket.com"
							target="_blank"
							rel="noreferrer"
						>
							<Button>Get Stated</Button>
						</a>
						<Button variant={"outline"}>
							Learn More <ExternalLink />
						</Button>
						<ModeToggle />
					</div>
				</nav>
				<div className="block lg:hidden">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-2">
							<img
								src="/logo.png"
								className="w-12 h-12 dark:invert"
								alt="logo"
							/>
							<span className="text-xl font-bold">Ketstack</span>
						</div>
						<Sheet>
							<SheetTrigger asChild>
								<Button variant={"outline"} size={"icon"}>
									<Menu className="size-4" />
								</Button>
							</SheetTrigger>
							<SheetContent className="overflow-y-auto">
								<SheetHeader>
									<SheetTitle>
										<div className="flex items-center gap-2">
											<img
												src="/logo.png"
												className="w-12 h-12 dark:invert"
												alt="logo"
											/>
											<span className="text-xl font-bold">Ketstack</span>
										</div>
									</SheetTitle>
								</SheetHeader>

								<div className="pt-4 border-t">
									<div className="flex flex-col gap-3 mt-2">
										<a
											href="https://ketstack.jarnket.com"
											target="_blank"
											rel="noreferrer"
											className="w-full"
										>
											<Button className="w-full">Get Stated</Button>
										</a>
										<Button variant={"outline"}>
											Learn More <ExternalLink />
										</Button>
									</div>
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Navbar;
