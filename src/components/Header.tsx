import React from 'react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';

const tabs = [
    { name: 'Home', href: '/#' },
    // { name: 'Talks', href: '/#talks' },
    { name: 'Speakers', href: '/speakers' },
    { name: 'Conventions', href: '/#events' },
    { name: 'Sponsors', href: '/#sponsors' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'About Us', href: '/about' },
]

const Navigation = () => {
    return (
        <div className="flex flex-row lg:space-x-8 py-3 px-6 lg:px-32 justify-between items-center bg-black text-white">
            <a href='/'>
                <img src="/ldf-logo.svg" className="w-24" />
            </a>

            {/* Tabs for larger screens */}
            <div className="hidden lg:flex lg:flex-row lg:space-x-8 lg:justify-center lg:px-12 font-primary">
                {
                    tabs.map((tab) => (
                        <a key={tab.name} href={tab.href}>{tab.name}</a>
                    ))
                }
            </div>

            <a href="https://cardpay-web.vercel.app/events" target="_blank">
                <div className="hidden lg:flex lg:flex-row lg:space-x-8 px-4 py-2 hover:bg-white hover:text-black rounded-md font-primary">Register Now</div>
            </a>

            {/* Dropdown for small screens */}
            <div className="lg:hidden">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button>
                            <img src="/burger-menu.svg" className="w-8 h-8" />
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 border-zinc-600 bg-zinc-800 text-white">
                        {
                            tabs.map((tab) => (
                                <DropdownMenuItem key={tab.name}>
                                    <a href={tab.href}>{tab.name}</a>
                                </DropdownMenuItem>
                            ))
                        }
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <a href="https://cardpay-web.vercel.app/events">
                                <span className="font-primary">
                                    Register Now
                                </span>
                            </a>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
};

export default Navigation;