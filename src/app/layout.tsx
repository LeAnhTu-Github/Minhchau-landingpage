import { Outlet, ScrollRestoration } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Root() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-cyan-500/30">
      <Header />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}
