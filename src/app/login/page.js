"use client";

import { Button } from "@/components/ui/button";
import { Cedarville_Cursive } from "next/font/google";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import Link from "next/link";

const cursive = Cedarville_Cursive({
  subsets: ["latin"],
  style: "normal",
  weight: "400",
});

const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

export default function Page() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (!emailRegex.test(data.email)) {
      let email = data.email;
      delete data.email;
      data.username = email;
    }
    console.log(data);
  };
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center">
      <h1 className={`${cursive.className} text-3xl font-extrabold py-3 `}>
        Persona
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <Input
          placeholder="Username or Email"
          type="text"
          id="email"
          {...register("email", { required: "email or username is required" })}
        />
        <Input
          placeholder="password"
          type="password"
          id="password"
          {...register("password", { required: "password is required" })}
        />
        <Button type="submit" variant="secondary" size="sm">
          Login
        </Button>
        <span className="w-full text-center">or</span>
        <Link href="signup">
          <Button type="button" variant="link" size="sm">
            Dont have an account ? Sign Up
          </Button>
        </Link>
      </form>
    </div>
  );
}
