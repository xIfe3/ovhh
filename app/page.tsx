"use client";

import { useState } from "react";
import Header from "../components/Header";
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

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Note: You must update the HeroSection, ForAthletes, ForBusinessOwners, and ReadyToDominate
  // components to accept and use the openModal function on their buttons.

  return (
    <>
      <Header />

      <main>
        {/* The Hero section buttons must trigger openModal */}
        <HeroSection onBookStrategyCall={openModal} />

        <BuiltForTheElite />
        <OurServices />
        <ForAthletes onBookStrategyCall={openModal} />
        <ForBusinessOwners onScheduleConsultation={openModal} />
        <TheProcess />
        <ClientSuccess />
        <Testimonials />

        {/* The Footer CTA button must trigger openModal */}
        <ReadyToDominate onBookStrategyCall={openModal} />
      </main>

      {/* The Modal Component */}
      <ModalForm isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
