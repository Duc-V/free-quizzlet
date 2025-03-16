import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/pages/components/Navbar/Navbar"
import Home from "@/pages/pages/Home"
export default function App() {
  return (
    <div>
        <Navbar/>
        <Home/>
    </div>
  );
}
