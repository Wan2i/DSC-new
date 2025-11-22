import React from 'react'
import Image from 'next/image'
import { Button } from './button'


const pageNav = [
    { label: "Home", href: "/" },
    { label: "About us", href: "/about" },
    { label: "Records", href: "/records" },
    { label: "Karts", href: "/karts" },
    { label: "Package", href: "/packages" },
    { label: "Booking", href: "/booking" },
] as const;

export default function PageHeader() {
    return (
        <div className="HEAD flex flex-row justify-between items-center sticky top-0 z-50 p-2 border-hidden">
            <div className="flex flex-row gap-2 items-center">
                <Image src="/DSCLogo.png" alt="DSC Karting Circuit logo" width={100} height={100} />
                <h1 className="font-bold text-3xl text-white">DSC KARTING CIRCUIT</h1>
            </div>

            <nav className="flex gap-2">
                {pageNav.map(({ label, href }) => (
                    <Button key={href} variant="default" size="lg" className='rounded text-white bg-transparent hover:bg-transparent' asChild>
                        <a href={href}>{label}</a>
                    </Button>
                ))}
            </nav>
        </div>
    );
}
