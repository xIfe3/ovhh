// pages/index.js (or Home.js)

"use client";

import { useState, useRef, useCallback } from "react"; // 👈 CHANGE: Import useRef and useCallback
import Header from "../components/Header";
// ... (other imports)
import HeroSection from "../components/sections/Hero";
import BuiltForTheElite from "../components/sections/BuiltForTheElite";
import ForAthletes from "../components/sections/ForAthletes";
import ForBusinessOwners from "../components/sections/ForBusinessOwners";
import OurServices from "../components/sections/OurServices";
import ClientSuccess from "../components/sections/ClientSuccess";
import TheProcess from "../components/sections/TheProcess";
import Testimonials from "../components/sections/Testimonials";
import ReadyToDominate from "../components/sections/ReadyToDominate";
import ModalForm from "../components/ModalForm"; // The new modal component
import PartnershipSection from "@/components/sections/Partners";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 👇 CHANGE 1: Create a ref to attach to TheProcess section
  const processRef = useRef<HTMLDivElement>(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // 👇 CHANGE 2: Create a function to handle the scroll
  const scrollToProcess = useCallback(() => {
    if (processRef.current) {
      processRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <Header />

      <main>
        {/* 👇 CHANGE 3: Pass the scroll function to HeroSection */}
        <HeroSection
          onBookStrategyCall={openModal}
          onScrollToProcess={scrollToProcess}
        />

        <BuiltForTheElite />
        <OurServices />
        <ForAthletes onBookStrategyCall={openModal} />
        <ForBusinessOwners onScheduleConsultation={openModal} />

        {/* 👇 CHANGE 4: Attach the ref to TheProcess section */}
        <div ref={processRef}>
          <TheProcess />
        </div>

        <ClientSuccess />
        <Testimonials />

        <PartnershipSection />

        <ReadyToDominate onBookStrategyCall={openModal} />
      </main>

      <ModalForm isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
