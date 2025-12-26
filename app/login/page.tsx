import { LoginForm } from "@/components/login-form"
import Link from "next/link"

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">
            Welcome <span className="text-primary">Back</span>
          </h1>
          <p className="text-muted-foreground">Sign in to your account to book sessions and track your records</p>
        </div>

        <LoginForm />

        <div className="text-center text-sm text-muted-foreground">
          {"Don't have an account? "}
          <Link href="/booking" className="text-primary hover:underline">
            Book as guest
          </Link>
        </div>
      </div>
    </main>
  )
}
