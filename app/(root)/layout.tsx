import Header from "@/components/Header";
import { headers } from "next/headers";
import { auth } from "@/lib/better-auth/auth";
import { redirect } from "next/navigation";

const Layout = async({ children }: { children : React.ReactNode }) => {
    const session = await auth.api.getSession({ headers: await headers() });

    if(!session?.user) redirect('/sign-in');

    const user: User = {
        id: session.user.id,
        name: session.user.name,
        email: session.user.email,
    }

    console.log(user); //delete later just to see what a session looks like 

    return (
        <main className="min-h-screen text-gray-400">
            <Header user= {user} />

            <h2>id: {user.id}</h2>
            <h2>name: {user.name}</h2>
            <h2>email: {user.email}</h2>


            <div className="container py-10">
                {children}
            </div>
        </main>
    )
}
export default Layout
