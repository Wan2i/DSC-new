"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Medal, Award } from "lucide-react"

type RecordItem = {
    pos: number
    driver: string
    time: string
    laps: number
    kart: string
}

const records: RecordItem[] = [
    { pos: 1, driver: "Marcus Raikkonen", time: "00:57.22", laps: 5, kart: "S5" },
    { pos: 2, driver: "Sofia Martinez", time: "00:58.10", laps: 5, kart: "S4" },
    { pos: 3, driver: "Liam Chen", time: "00:59.88", laps: 5, kart: "S3" },
    { pos: 4, driver: "Emma Wilson", time: "01:00.45", laps: 5, kart: "S5" },
    { pos: 5, driver: "Noah Anderson", time: "01:01.12", laps: 5, kart: "S4" },
    { pos: 6, driver: "Olivia Taylor", time: "01:01.89", laps: 5, kart: "S3" },
    { pos: 7, driver: "James Brooks", time: "01:02.34", laps: 5, kart: "S5" },
    { pos: 8, driver: "Ava Johnson", time: "01:03.01", laps: 5, kart: "S4" },
]

function getPositionIcon(pos: number) {
    if (pos === 1) return <Trophy className="h-5 w-5 text-accent-gold" />
    if (pos === 2) return <Medal className="h-5 w-5 text-muted-foreground" />
    if (pos === 3) return <Award className="h-5 w-5 text-accent-orange" />
    return null
}

export default function RecordsPage() {
    return (
        <div className="min-h-screen bg-background py-12 px-4">
            {/* Header */}
            <div className="container mx-auto mb-12">
                <div className="text-center mb-8">
                    <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 tracking-tight">TRACK RECORDS</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        The fastest lap times in our karting history. Do you have what it takes to join the elite?
                    </p>
                </div>

                {/* Current Record Holder Feature */}
                <Card className="max-w-4xl mx-auto p-8 bg-linear-to-br from-accent-gold/20 to-accent-gold/5 border-accent-gold/50 backdrop-blur">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center">
                            <Trophy className="h-8 w-8 text-black" />
                        </div>
                        <div>
                            <Badge className="bg-accent-gold text-black font-bold mb-2">TRACK RECORD</Badge>
                            <h2 className="text-3xl font-bold text-foreground">Marcus Raikkonen</h2>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-6 mt-6">
                        <div>
                            <p className="text-sm text-muted-foreground mb-1">Best Time</p>
                            <p className="text-2xl font-bold text-foreground font-mono">00:57.22</p>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground mb-1">Laps</p>
                            <p className="text-2xl font-bold text-foreground">5</p>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground mb-1">Kart</p>
                            <p className="text-2xl font-bold text-accent-lime">S5</p>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Records Table */}
            <div className="container mx-auto">
                <Card className="max-w-5xl mx-auto bg-card border-border overflow-hidden">
                    {/* Desktop Header */}
                    <div className="hidden md:grid grid-cols-5 gap-4 bg-secondary px-8 py-5 border-b border-border">
                        <div className="font-bold text-sm uppercase tracking-wide text-foreground">Position</div>
                        <div className="font-bold text-sm uppercase tracking-wide text-foreground">Driver</div>
                        <div className="font-bold text-sm uppercase tracking-wide text-foreground">Time</div>
                        <div className="font-bold text-sm uppercase tracking-wide text-foreground">Laps</div>
                        <div className="font-bold text-sm uppercase tracking-wide text-foreground">Kart</div>
                    </div>

                    {/* Records List */}
                    <div className="divide-y divide-border">
                        {records.map((item) => (
                            <div key={item.pos}>
                                {/* Desktop View */}
                                <div
                                    className={`hidden md:grid grid-cols-5 gap-4 px-8 py-5 transition-all hover:bg-secondary/50 ${item.pos <= 3 ? "bg-secondary/30" : ""
                                        }`}
                                >
                                    <div className="flex items-center gap-3 font-bold text-foreground">
                                        {getPositionIcon(item.pos)}
                                        <span>{item.pos}</span>
                                    </div>
                                    <div className="flex items-center text-foreground font-medium">{item.driver}</div>
                                    <div className="flex items-center font-mono font-bold text-foreground">{item.time}</div>
                                    <div className="flex items-center text-muted-foreground">{item.laps}</div>
                                    <div className="flex items-center">
                                        <Badge className="bg-accent-lime/20 text-accent-lime border-accent-lime/30 font-bold">
                                            {item.kart}
                                        </Badge>
                                    </div>
                                </div>

                                {/* Mobile View */}
                                <div className={`md:hidden p-5 transition-all ${item.pos <= 3 ? "bg-secondary/30" : ""}`}>
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="flex items-center gap-3">
                                            <span className="text-2xl font-bold text-foreground flex items-center gap-2">
                                                {getPositionIcon(item.pos)}
                                                {item.pos}
                                            </span>
                                        </div>
                                        <Badge className="bg-accent-lime/20 text-accent-lime border-accent-lime/30 font-bold">
                                            {item.kart}
                                        </Badge>
                                    </div>
                                    <h3 className="text-lg font-bold text-foreground mb-2">{item.driver}</h3>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-xs text-muted-foreground">Time</p>
                                            <p className="text-xl font-mono font-bold text-foreground">{item.time}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-muted-foreground">Laps</p>
                                            <p className="text-xl font-bold text-foreground">{item.laps}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>

            {/* Footer CTA */}
            <div className="container mx-auto mt-16 text-center">
                <p className="text-lg text-muted-foreground mb-6">Think you can beat these times?</p>
                <button className="bg-accent-lime text-black font-bold px-8 py-4 rounded-lg hover:bg-accent-lime/90 transition-colors">
                    Challenge the Track
                </button>
            </div>
        </div>
    )
}
