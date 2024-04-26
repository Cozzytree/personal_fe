"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useForm } from "react-hook-form";

const usernameRegex = /^[a-zA-Z0-9\s]+$/;
const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

export default function Page() {
  const form = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex flex-col justify-center items-center">
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[80%] sm:w-[60%] md:w-[35%] lg:w-[25%] flex flex-col gap-2"
      >
        <h1 className="text-xl font-bold">Sign Up</h1>
        <Input
          placeholder="Username"
          type="text"
          id="username"
          {...form.register("username", {
            required: "Username is required",
            validate: {
              min: (value) => value.length >= 6 || "Minimum 6 characters",
              max: (value) =>
                value.length <= 26 || "Maximum character exceeded",
              regex: (value) => usernameRegex.test(value) || "invalid pattern",
            },
          })}
        />
        <p className="text-[14px] text-red-600">
          {form.formState.errors?.username?.message}
        </p>

        <Input
          placeholder="Email"
          type="email"
          id="email"
          {...form.register("email", {
            required: "Email is required",
            validate: {
              // Email minimum and maximum lengths should be for the entire email address, not just its characters
              min: (value) => value.length >= 6 || "Minimum 6 characters",
              max: (value) =>
                value.length <= 320 || "Maximum character exceeded", // Maximum length for email addresses
              regex: (value) => emailRegex.test(value) || "invalid pattern",
            },
          })}
        />
        <p className="text-[14px] text-red-600">
          {form.formState.errors?.email?.message}
        </p>

        <Input
          placeholder="Password"
          type="password"
          id="password"
          {...form.register("password", {
            required: "Password is required",
            validate: {
              min: (value) => value.length >= 6 || "Minimum 6 characters",
              max: (value) =>
                value.length <= 50 || "Maximum character exceeded",
            },
          })}
        />
        <p className="text-[14px] text-red-600">
          {form.formState.errors?.password?.message}
        </p>

        <Input
          type="password"
          id="confirm"
          placeholder="Retype Password"
          {...form.register("confirm", {
            required: "Please retype your password",
            validate: {
              matchesPreviousPassword: (value) => {
                const { password } = form.getValues();
                return password === value || "The passwords do not match";
              },
            },
          })}
        />
        <p className="text-[14px] text-red-600">
          {form.formState.errors?.confirm?.message}
        </p>
        <Button variant="secondary" size="sm">
          Sign Up
        </Button>

        <Link href="/login">
          <Button variant="link" size="sm">
            Already have an acoount ? Login
          </Button>
        </Link>
      </form>
    </div>
  );
}
