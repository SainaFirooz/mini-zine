import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center flex-col gap-10">
      <div className="mb-20">
        <SignIn />
      </div>
    </div>
  );
}
