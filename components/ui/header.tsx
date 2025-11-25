'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from './button'
import { Menu, X } from 'lucide-react'

const pageNav = [
    { label: "Home", href: "/" },
    { label: "About us", href: "/about" },
    { label: "Records", href: "/record" },
    { label: "Karts", href: "/karts" },
    { label: "Package", href: "/packages" },
    { label: "Booking", href: "/booking" },
] as const;

export default function PageHeader() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)
    const closeMenu = () => setIsOpen(false)

    return (
        <header className="sticky top-0 z-50 HEAD">
            <div className="flex flex-row justify-between items-center p-2 md:p2">
                {/* Logo Section */}
                <div className="flex flex-row gap-1 md:gap-2 items-center shrink-0">
                    <div className="w-12 h-12 md:w-16 md:h-16 relative shrink-0">
                        <Image 
                            src="/DSCLogo.png" 
                            alt="DSC Karting Circuit logo" 
                            width={64}
                            height={64}
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <h1 className="font-bold text-lg md:text-2xl lg:text-3xl text-white whitespace-nowrap">
                        DSC KARTING
                    </h1>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-1 lg:gap-2">
                    {pageNav.map(({ label, href }) => (
                        <Button 
                            key={href} 
                            variant="default" 
                            size="sm"
                            className='rounded text-xs lg:text-sm text-white bg-transparent hover:bg-white/10 transition-colors'
                            asChild
                        >
                            <a href={href}>{label}</a>
                        </Button>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        <X className="w-6 h-6 text-white" />
                    ) : (
                        <Menu className="w-6 h-6 text-white" />
                    )}
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <nav className="md:hidden HEAD p-2 flex flex-col gap-1">
                    {pageNav.map(({ label, href }) => (
                        <Button 
                            key={href} 
                            variant="default" 
                            size="sm"
                            onClick={closeMenu}
                            className='rounded text-sm text-white bg-transparent hover:bg-white/10 transition-colors justify-start'
                            asChild
                        >
                            <a href={href}>{label}</a>
                        </Button>
                    ))}
                </nav>
            )}
        </header>
    );
}