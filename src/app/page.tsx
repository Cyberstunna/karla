import EmailInput from "@/@components/Inputs/EmailInput";

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-between p-24">
      <div className="text-center space-y-5 my-auto">
        <h1 className="text-karla-500 text-2xl">Hey customer, I’m Karla!</h1>
        <p className="text-karla-200 ">Please enter the email associated with your order to get started</p>
        <EmailInput />
      </div>
    </main>
  );
}
