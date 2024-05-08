"use client"

import { useRef, useState } from "react";
import NextLink from "next/link";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
	useDisclosure,
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownSection,
	DropdownItem,
	Avatar,
	User,
} from "@nextui-org/react";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import clsx from "clsx";

import { Logo } from "@/components/icons";
import { FiGrid, FiMenu, FiSearch, FiX } from "react-icons/fi";
import { ProfileDropdown } from "@/components/profile_dropdown";
import { usePathname } from "next/navigation";


export interface NavbarProps {
	isLoggedIn?: boolean | undefined;
}


export const Navbar = ({ isLoggedIn }: NavbarProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const searchBarDisclosure = useDisclosure();
	const toolsDisclosure = useDisclosure();
	const pathname = usePathname();

	return (
		<NextUINavbar isBordered shouldHideOnScroll maxWidth="2xl">
			<NavbarContent className="flex gap-1">
				<Dropdown placement="bottom-start" offset={20} crossOffset={-20} showArrow radius="sm" shadow="md"
					onOpenChange={setIsMenuOpen} isOpen={isMenuOpen} classNames={{ trigger: "md:hidden" }}>
					<DropdownTrigger>
						<Button isIconOnly size="sm" variant="light" aria-label="Menu" >
							{isMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
						</Button>
					</DropdownTrigger>

					<DropdownMenu variant="faded" aria-label="Dropdown menu with description">
						<DropdownSection title="Actions">
							{siteConfig.navItems.map((item) => (
								<DropdownItem key={item.label}>
									<NextLink href={item.href}>
										{item.label}
									</NextLink>
								</DropdownItem>
							))}
						</DropdownSection>

						<DropdownSection title="Danger zone">
							<DropdownItem
								key="delete"
								className="text-danger"
								color="danger"
								shortcut="⌘⇧D"
								description="Permanently delete the file"
							// startContent={<DeleteDocumentIcon className={cn(iconClasses, "text-danger")} />}
							>
								Delete file
							</DropdownItem>
						</DropdownSection>
					</DropdownMenu>
				</Dropdown>

				<NavbarBrand>
					<NextLink className="flex justify-start items-center gap-0 md:gap-1" href="/">
						<Logo />
						<p className="font-bold text-inherit" aria-label="Brainbox Research Institute">BBRI</p>
					</NextLink>
				</NavbarBrand>
			</NavbarContent>

			{/* Right side navItems */}
			<NavbarContent className="hidden md:flex" justify="start">
				<ul className="flex gap-4 justify-start ml-2">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									"hover:shadow-blue-400 dark:hover:shadow-slate-500 rounded px-2 py-1 shadow-sm",
									{
										["shadow-blue-400 dark:shadow-slate-500"]: item.href === pathname,
									}
								)}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</ul>
			</NavbarContent>

			{/* End/Left side navItems */}
			<NavbarContent className="gap-3 lg:gap-8" justify="end">
				<Input classNames={{
					base: "max-w-full h-8 md:h-9 md:max-w-[20rem]",
					mainWrapper: "hidden md:block h-full",
					input: "text-small",
					inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
				}}
					placeholder="Search here..."
					size="sm"
					endContent={<FiSearch />}
					type="search"
				/>

				<Button isIconOnly size="sm" variant="light" aria-label="Search bar" className="md:hidden w-4 h-7" onClick={searchBarDisclosure.onOpen} >
					<FiSearch size={16} />
				</Button>

				<Dropdown placement="bottom-end" offset={20} showArrow shadow="md" >
					<DropdownTrigger>
						<Button isIconOnly size="sm" variant="light" aria-label="Tools">
							<FiGrid size={16} />
						</Button>
					</DropdownTrigger>

					<DropdownMenu variant="faded" aria-label="Dropdown menu with description">
						<DropdownSection title="Actions">
							<DropdownItem
								key="new"
								shortcut="⌘N"
								description="Create a new file"
							// startContent={<AddNoteIcon className={iconClasses} />}
							>
								New file
							</DropdownItem>
							<DropdownItem
								key="copy"
								shortcut="⌘C"
								description="Copy the file link"
							// startContent={<CopyDocumentIcon className={iconClasses} />}
							>
								Copy link
							</DropdownItem>
							<DropdownItem
								key="edit"
								shortcut="⌘⇧E"
								description="Allows you to edit the file"
							// startContent={<EditDocumentIcon className={iconClasses} />}
							>
								Edit file
							</DropdownItem>
						</DropdownSection>
						<DropdownSection title="Danger zone">
							<DropdownItem
								key="delete"
								className="text-danger"
								color="danger"
								shortcut="⌘⇧D"
								description="Permanently delete the file"
							// startContent={<DeleteDocumentIcon className={cn(iconClasses, "text-danger")} />}
							>
								Delete file
							</DropdownItem>
						</DropdownSection>
					</DropdownMenu>
				</Dropdown>

				{isLoggedIn ?
					<ProfileDropdown />
					: <Button as={NextLink} href="/" size="sm" variant="bordered" className="font-bold">Login</Button>
				}
			</NavbarContent>

			<Modal backdrop="blur" isOpen={searchBarDisclosure.isOpen} placement="top" onOpenChange={searchBarDisclosure.onOpenChange} hideCloseButton={true} className="mt-[18vw]" >
				<ModalContent className="max-w-[80vw]">
					<Input
						classNames={{
							base: "max-w-[80vw] h-11",
							mainWrapper: "h-full",
							input: "text-small",
							inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
						}}
						placeholder="Search here..."
						size="md"
						endContent={<FiSearch size={22} />}
						type="search"
					/>
				</ModalContent>
			</Modal>

			<Modal backdrop="blur" isOpen={toolsDisclosure.isOpen} placement="top" onOpenChange={toolsDisclosure.onOpenChange} >
				<ModalContent className="max-w-[80vw]">
					<ModalHeader>Tools</ModalHeader>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur doloribus perferendis id molestias quo quod magni eum in voluptas rem? Explicabo quo sequi a consequuntur quaerat pariatur similique magnam enim.</p>
				</ModalContent>
			</Modal>

		</NextUINavbar>
	);
};
