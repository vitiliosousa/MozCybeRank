'use client'
import Header from "@/components/header";
import DataTable from "@/components/teamTableAdmin";
export default function Home() {
 
  return (
    <div className="bg-black min-h-screen justify-between w-full sm:p-16 p-4 text-dark flex flex-col sm:text-2xl">
        <div className="space-y-20">
        <Header />
        <DataTable/>
      </div>
    </div>
  );
}
