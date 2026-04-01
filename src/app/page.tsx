"use client";

import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Navbar } from "@/components/layout/Navbar";
import { About } from "@/components/sections/About";
import { Resume } from "@/components/sections/Resume";
import { Portfolio } from "@/components/sections/Portfolio";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <>
      <Sidebar />
      <div className="main-content">
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
        
        <About isActive={activeSection === "about"} />
        <Resume isActive={activeSection === "resume"} />
        <Portfolio isActive={activeSection === "portfolio"} />
      </div>
    </>
  );
}
