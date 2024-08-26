"use client"
import EmailInput from "@/@components/Inputs/EmailInput";
import { auth } from "@/data/auth";
import { redirect, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function Home() {

  const [email, setEmail] = useState('')
  const router = useRouter()

  function handleTextChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value)
  }

  function authenticateUser () {
    try {
      if (email === auth.email) {
        // Navigate to support page
        router.push(`/support/${12345}`)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-between p-24">
      <div className="text-center space-y-5 my-auto">
        <h1 className="text-karla-500 text-2xl">Hey customer, I’m Karla!</h1>
        <p className="text-karla-200 ">Please enter the email associated with your order to get started</p>
        <EmailInput onTextChangeAction={handleTextChange} onSubmitAction={authenticateUser}/>
      </div>
    </main>
  );
}
