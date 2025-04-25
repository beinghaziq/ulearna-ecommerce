'use client';

import { useCart } from '@/context/CartContext';
import { MagnifyingGlassIcon, ShoppingBagIcon, UserIcon, Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
	const { cart } = useCart();
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const navigation = [
		{ name: 'Home', href: '/' },
		{ name: 'Shop', href: '/products' },
		{ name: 'Collections', href: '/collections' },
		{ name: 'About', href: '/about' },
		{ name: 'Contact', href: '/contact' },
	];

	return (
		<header className="bg-white border-b border-gray-200">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Top bar */}
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<div className="flex items-center">
						<Link href="/" className="flex items-center">
							<span className="text-2xl font-bold text-gray-900">Laced Up</span>
							<span className="ml-2 text-xs font-medium bg-indigo-600 text-white px-2 py-1 rounded">
								PRO
							</span>
						</Link>
					</div>

					<nav className="hidden md:flex items-center space-x-8">
						{navigation.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors"
							>
								{item.name}
							</Link>
						))}
					</nav>

					<div className="flex items-center space-x-4">
						<button className="p-2 text-gray-400 hover:text-gray-500">
							<span className="sr-only">Search</span>
							<MagnifyingGlassIcon className="h-5 w-5" />
						</button>

						<div className="relative">
							<Link href="/cart" className='cursor-pointer'>
								<button className="p-2 cursor-pointer text-gray-400 hover:text-gray-500">
									<span className="sr-only">Cart</span>
									<ShoppingBagIcon className="h-5 w-5" />
								</button>
							</Link>
							<span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
								{cart.length}
							</span>
						</div>

						<button className="p-2 text-gray-400 hover:text-gray-500">
							<span className="sr-only">Account</span>
							<UserIcon className="h-5 w-5" />
						</button>

						<button
							type="button"
							className="md:hidden p-2 text-gray-400 hover:text-gray-500"
							onClick={() => setMobileMenuOpen(true)}
						>
							<span className="sr-only">Open menu</span>
							<Bars3Icon className="h-6 w-6" />
						</button>
					</div>
				</div>

				{mobileMenuOpen && (
					<div className="md:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
						<div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-lg">
							<div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
								<Link href="/" className="text-xl font-bold text-gray-900">
									Laced Up
								</Link>
								<button
									type="button"
									className="-mr-2 p-2 text-gray-400 hover:text-gray-500"
									onClick={() => setMobileMenuOpen(false)}
								>
									<span className="sr-only">Close menu</span>
									<XMarkIcon className="h-6 w-6" />
								</button>
							</div>
							<div className="px-6 py-4 space-y-6">
								{navigation.map((item) => (
									<Link
										key={item.name}
										href={item.href}
										className="block py-2 text-base font-medium text-gray-700 hover:text-indigo-600"
										onClick={() => setMobileMenuOpen(false)}
									>
										{item.name}
									</Link>
								))}
							</div>
							<div className="px-6 py-4 border-t border-gray-200">
								<button className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600">
									<UserIcon className="h-5 w-5" />
									<span>Sign in</span>
								</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</header>
	);
}

function XMarkIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
		>
			<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
		</svg>
	);
}