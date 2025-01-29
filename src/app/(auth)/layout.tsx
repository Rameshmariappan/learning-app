import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Home } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-full">
      {/* Left Side - Login Form */}
      <div className="flex w-full lg:w-1/2 flex-col items-center justify-center bg-white px-12">
        <div className="w-full max-w-[400px] space-y-8">
          {/* Logo and Welcome */}
          <div className="space-y-2 flex justify-center flex-col w-full items-center">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#6C5DD3]">
              <Home className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl font-semibold text-gray-800">
              Hey, welcome back
            </h1>
          </div>

          {children}
        </div>
      </div>

      {/* Right Side - Hero */}
      <div className="relative lg:flex lg:w-1/2 items-center justify-center bg-[#6C5DD3] px-12 hidden">
        <div className="max-w-[480px] space-y-4 text-white">
          <h2 className="text-4xl font-semibold leading-tight">
            Spendesk cards are getting smarter
          </h2>
          <p className="text-lg text-purple-200">
            With personalized spending limits on physical purchasing card.
          </p>
          <div className="relative h-80">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-N9LAgEcOZGl5nyOl0buM0jCI8Of1vZ.png"
              alt="Spendesk Cards"
              className="absolute right-0 top-0 h-full w-full object-contain"
            />
          </div>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white/10"
          >
            Watch the video
          </Button>
        </div>
      </div>
    </div>
  );
}
