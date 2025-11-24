'use client'

import { Quantico } from 'next/font/google'
import { Card } from '@/components/ui/card'

const quantico = Quantico({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-quantico',
})

type RecordItem = {
    pos: number
    driver: string
    time: string
    laps: number
    kart: string
}

const records: RecordItem[] = [
    { pos: 1, driver: "Driver 1", time: "00:57.22", laps: 5, kart: "S5" },
    { pos: 2, driver: "Driver 2", time: "00:58.10", laps: 5, kart: "S4" },
    { pos: 3, driver: "Driver 3", time: "00:59.88", laps: 5, kart: "S3" },
]

export default function Page() {
    return (
        <div className="flex flex-col p-3 sm:p-4 md:p-6 space-y-6 md:space-y-8 min-h-screen">
            <div className="w-full">
                <h2 className={`text-3xl sm:text-4xl md:text-5xl text-white text-center font-bold drop-shadow-lg ${quantico.className}`}>
                    TRACK RECORDS
                </h2>
            </div>

            <div className="flex flex-col lg:flex-row justify-center gap-4 md:gap-6">
                <Card className="p-3 sm:p-4 md:p-6 backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl rounded-xl sm:rounded-2xl overflow-hidden w-full lg:max-w-4xl">

                    <div className="hidden sm:grid grid-cols-5 gap-0 bg-linear-to-r from-yellow-400 to-yellow-500 text-gray-900 px-3 sm:px-6 py-3 sm:py-4 rounded-lg mb-3 sm:mb-4">
                        <div className="font-bold text-center text-xs sm:text-sm uppercase tracking-wide">POS</div>
                        <div className="font-bold text-center text-xs sm:text-sm uppercase tracking-wide">DRIVER</div>
                        <div className="font-bold text-center text-xs sm:text-sm uppercase tracking-wide">TIME</div>
                        <div className="font-bold text-center text-xs sm:text-sm uppercase tracking-wide">LAPS</div>
                        <div className="font-bold text-center text-xs sm:text-sm uppercase tracking-wide">KART</div>
                    </div>

                    <div className="flex flex-col gap-2 sm:gap-3">
                        {records.map((item) => (
                            <div key={item.pos}>
                                <div
                                    className={`hidden sm:grid grid-cols-5 gap-0 px-3 sm:px-6 py-3 sm:py-4 text-white transition-all rounded-lg ${item.pos === 1
                                        ? 'bg-purple-700/40 hover:bg-purple-700/50'
                                        : 'bg-white/10 hover:bg-white/20'
                                        }`}
                                >
                                    <div className="text-center text-xs sm:text-sm font-semibold">{item.pos}</div>
                                    <div className="text-center text-xs sm:text-sm">{item.driver}</div>
                                    <div className="text-center text-xs sm:text-sm font-mono font-bold">{item.time}</div>
                                    <div className="text-center text-xs sm:text-sm">{item.laps}</div>
                                    <div className="text-center text-xs sm:text-sm font-semibold text-yellow-300">{item.kart}</div>
                                </div>

                                <div
                                    className={`sm:hidden p-3 rounded-lg transition-all ${item.pos === 1
                                        ? 'bg-purple-700/40 border border-purple-500/50'
                                        : 'bg-white/10 border border-white/20'
                                        }`}
                                >
                                    <div className="grid grid-cols-2 gap-2 text-white text-xs">
                                        <div><span className="text-yellow-300 font-bold">POS:</span> {item.pos}</div>
                                        <div><span className="text-yellow-300 font-bold">KART:</span> {item.kart}</div>
                                        <div><span className="text-yellow-300 font-bold">DRIVER:</span> {item.driver}</div>
                                        <div><span className="text-yellow-300 font-bold">LAPS:</span> {item.laps}</div>
                                        <div className="col-span-2"><span className="text-yellow-300 font-bold">TIME:</span> <span className="font-mono font-bold">{item.time}</span></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Secondary Card - Responsive */}
                <Card className="hidden lg:flex p-0 backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl rounded-2xl overflow-hidden w-full lg:max-w-4xl">
                </Card>
            </div>
        </div>
    )
}