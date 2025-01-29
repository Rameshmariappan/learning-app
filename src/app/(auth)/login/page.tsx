"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Home } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="w-full flex flex-col space-y-8">
      <div className="space-y-3">
        <Button
          variant="outline"
          className="relative h-12 w-full justify-start px-4 text-[#6C5DD3]"
        >
          <img
            src="https://www.google.com/favicon.ico"
            className="mr-3 h-5 w-5"
            alt=""
          />
          Sign in with Google
        </Button>
        <Button
          variant="outline"
          className="relative h-12 w-full justify-start px-4 text-[#6C5DD3]"
        >
          <img
            src="https://www.github.com/favicon.ico"
            className="mr-3 h-5 w-5"
            alt=""
          />
          Sign in with Github
        </Button>
      </div>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <Separator />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-white px-2 text-gray-500">Or</span>
        </div>
      </div>

      {/* Login Form */}
      <div className="space-y-4">
        <Input
          type="email"
          placeholder="Email"
          className="h-12 rounded-lg border-gray-200"
        />
        <Input
          type="password"
          placeholder="Password"
          className="h-12 rounded-lg border-gray-200"
        />
        <Button className="h-12 w-full bg-[#6C5DD3] text-white hover:bg-[#5B4EC2]">
          Log in
        </Button>
      </div>

      {/* Sign Up Link */}
      <p className="text-center text-sm text-gray-500">
        Don't have an account?{" "}
        <Link href="/signup" className="text-[#6C5DD3] hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}
