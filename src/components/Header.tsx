import React from 'react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';

const Navigation = () => {
  return (
    <div className="flex flex-row lg:space-x-8 py-3 px-6 lg:px-32 justify-between items-center bg-black text-white">
      <img src="/images/frame.svg" className="" />

      {/* Dropdown for small screens */}
      <div className="lg:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button>
                <img src="/burger-menu.svg" className="w-8 h-8" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuItem>Info</DropdownMenuItem>
            <DropdownMenuItem>Talks</DropdownMenuItem>
            <DropdownMenuItem>Speakers</DropdownMenuItem>
            <DropdownMenuItem>Subevents</DropdownMenuItem>
            <DropdownMenuItem>Sponsors</DropdownMenuItem>
            <DropdownMenuItem>Contact Us</DropdownMenuItem>
            <DropdownMenuItem>About Us</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Tabs for larger screens */}
      <div className="hidden lg:flex lg:flex-row lg:space-x-8 lg:justify-center lg:px-12">
        <div>Info</div>
        <div>Talks</div>
        <div>Speakers</div>
        <div>Subevents</div>
        <div>Sponsors</div>
        <div>Contact Us</div>
        <div>About Us</div>
      </div>

      <div className="hidden lg:flex lg:flex-row lg:space-x-8">Register Now</div>
    </div>
  );
};

export default Navigation;