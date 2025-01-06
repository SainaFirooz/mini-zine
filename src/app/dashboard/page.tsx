import { Button } from "@/components/ui/button";
import { auth, currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function Dashboard() {
  const { userId } = await auth();

  if (!userId) {
    return <div>You are not logged in</div>;
  }

  const user = await currentUser();

  return (
    <div className="mt-10 text-start max-w-xl mx-auto bg-white p-5 rounded">
      <h1 className="text-4xl font-bold">Welcome {user?.firstName} {user?.lastName} </h1>
     
     <div className="mt-5">
     <Link href="/mini-zine">
      <Button>Create minizine</Button>
              </Link>
     </div>
     
    </div>
  );
}
