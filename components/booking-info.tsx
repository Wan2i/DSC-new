import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Users, Phone, Mail } from "lucide-react"

export function BookingInfo() {
  return (
    <div className="space-y-6">
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Clock className="w-5 h-5 text-primary" />
            Opening Hours
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-foreground font-medium">Everyday</p>
          <p className="text-muted-foreground">4:00 PM - 12:00 AM</p>
        </CardContent>
      </Card>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Users className="w-5 h-5 text-primary" />
            Requirements
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div>
            <p className="text-foreground font-medium">Minimum Age</p>
            <p className="text-muted-foreground">10 years old</p>
          </div>
          <div>
            <p className="text-foreground font-medium">Minimum Height</p>
            <p className="text-muted-foreground">140 cm</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Need Help?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-muted-foreground">Call us</p>
              <a href="tel:+60196646360" className="text-foreground hover:text-primary transition-colors">
                019-664 6360
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-muted-foreground">Email us</p>
              <a
                href="mailto:dsckarting@gmail.com"
                className="text-foreground hover:text-primary transition-colors break-all"
              >
                dsckarting@gmail.com
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
