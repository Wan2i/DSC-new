"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronRight, Timer, Trophy, Zap } from "lucide-react"

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/Landing_page.jpg"
                        alt="Racing background"
                        fill
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black" />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
                        PUSH YOUR
                        <span className="block text-accent-lime">LIMITS</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Experience the thrill of high-speed karting. Break records, compete with the best, and become a legend on
                        the track.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button size="lg" className="bg-accent-lime text-black hover:bg-accent-lime/90 font-bold text-lg px-8">
                            <Link href="/user/booking">Book a Race</Link>
                            <ChevronRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white text-white hover:bg-white/10 bg-transparent"
                            asChild
                        >
                            <Link href="/user/record">View Records</Link>
                        </Button>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
                        <div className="w-1 h-3 bg-white/50 rounded-full" />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-secondary">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">WHY RACE WITH US</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="p-8 bg-card border-border hover:border-accent-lime transition-all duration-300 group">
                            <div className="w-14 h-14 bg-accent-lime/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-lime/20 transition-colors">
                                <Zap className="h-7 w-7 text-accent-lime" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-foreground">High-Speed Karts</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Race with our state-of-the-art S-Series karts, engineered for maximum performance and precision
                                handling.
                            </p>
                        </Card>

                        <Card className="p-8 bg-card border-border hover:border-accent-lime transition-all duration-300 group">
                            <div className="w-14 h-14 bg-accent-lime/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-lime/20 transition-colors">
                                <Timer className="h-7 w-7 text-accent-lime" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-foreground">Live Timing</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Track your lap times in real-time with our advanced timing system. See how you stack up against the
                                competition.
                            </p>
                        </Card>

                        <Card className="p-8 bg-card border-border hover:border-accent-lime transition-all duration-300 group">
                            <div className="w-14 h-14 bg-accent-lime/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-lime/20 transition-colors">
                                <Trophy className="h-7 w-7 text-accent-lime" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-foreground">Break Records</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Challenge yourself to beat the track record and etch your name in karting history at our legendary
                                circuit.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-accent-lime text-black">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">READY TO RACE?</h2>
                    <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
                        Book your session now and experience the adrenaline rush of competitive karting.
                    </p>
                    <Button size="lg" className="bg-black text-accent-lime hover:bg-black/90 font-bold text-lg px-8">
                        Get Started Today
                        <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                </div>
            </section>
        </div>
    )
}
