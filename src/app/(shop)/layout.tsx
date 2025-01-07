import { Footer, Sidebar, TopMenu } from "@/components";

export default function SopLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className=" min-h-screen ">
      <TopMenu></TopMenu>
      <Sidebar></Sidebar>
      <div className=" mx-5 md:mx-0 md:px-5">{children}</div>
      <Footer></Footer>
    </main>
  );
}

