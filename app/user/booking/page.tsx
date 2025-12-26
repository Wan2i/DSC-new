import { BookingForm } from "@/components/booking-form"
import { BookingInfo } from "@/components/booking-info"

export default function BookingPage() {
    return (
        <main className="min-h-screen">
            <div className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
                        Book Your <span className="text-primary">Racing Session</span>
                    </h1>
                    <p className="text-muted-foreground mt-2">
                        Reserve your spot on the track and experience the thrill of karting
                    </p>
                </div>

                <div className="grid lg:grid-cols-[350px_1fr] gap-8">
                    <BookingInfo />
                    <BookingForm />
                </div>
            </div>
        </main>
    )
}
