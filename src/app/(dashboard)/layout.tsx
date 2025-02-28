import Link from "next/link";
import Menu from "../Components/Menu";
import Navbar from "../Components/Navbar";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen flex">
            {/* LEFT */}
            <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:[14%] p-4">
                <Link href='/' className="flex gap-2 items-center justify-center lg:justify-start">
                    <h1 className="flex justify-center items-center text-2xl h-9 w-9 pt-[2px] rounded-full bg-purple-200 text-purple-600 font-semibold">V</h1>
                    <p className="hidden lg:block text-xl text-purple-600 font-semibold">V/Veerapuram M.M.V</p>
                </Link>
                <Menu />
            </div>
            {/* RIGHT */}
            <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:[86%] bg-[#F7F8FA] overflow-y-scroll flex flex-col">
                <Navbar />
                {children}
            </div>
        </div>
    )
}