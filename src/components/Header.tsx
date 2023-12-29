import React from 'react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';

const tabs = [
    { name: 'Info', href: '#' },
    { name: 'Talks', href: '#talks' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Subevents', href: '#events' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'About Us', href: '#about' },
]

const Navigation = () => {
    return (
        <div className="flex flex-row lg:space-x-8 py-3 px-6 lg:px-32 justify-between items-center bg-black text-white">
            <img src="/ldf-logo.svg" className="w-24" />

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
                                    <a>{tab.name}</a>
                                </DropdownMenuItem>
                            ))
                        }
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            Register Now
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            {/* Tabs for larger screens */}
            <div className="hidden lg:flex lg:flex-row lg:space-x-8 lg:justify-center lg:px-12">
                {
                    tabs.map((tab) => (
                        <a key={tab.name} href={tab.href}>{tab.name}</a>
                    ))
                }
            </div>

            <div className="hidden lg:flex lg:flex-row lg:space-x-8">Register Now</div>
        </div>
    );
};

export default Navigation;