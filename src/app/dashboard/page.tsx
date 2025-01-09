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
    <div className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
    
      <h1 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5">Welcome {user?.firstName} {user?.lastName} </h1>
     
     <div className="text-center mt-10">
     <Link href="/mini-zine">
      <Button className="btn btn-primary">Create minizine</Button>
              </Link>
     </div>
    </div>
  );
}
