import Image from "next/image"
import { Mail, MapPin, Phone, ArrowRight, Github, Linkedin } from "lucide-react"
import ProjectCard from "@/components/project-card"
import TechStack from "@/components/tech-stack"
import ContactForm from "@/components/contact-form"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 
      ===========================================
      NAVIGATION BAR
      ===========================================
      The Navbar component handles both desktop and mobile navigation.
      It includes a scroll effect that changes its appearance when scrolling past the hero section.
      */}
      <Navbar />

      {/* 
      ===========================================
      HERO SECTION
      ===========================================
      Full-screen hero section with background image and overlay.
      The name display is centered with a semi-transparent black background.
      */}
      <section className="relative h-screen flex justify-center">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image src="/main-bg.jpg" alt="Background" fill className="object-cover" priority />
          {/* Gradient overlay to improve text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/50"></div>
        </div>

        {/* Name display with border accent */}
        <div className="relative z-10 text-center px-4 pt-[40vh]">
          <div className="bg-black/70 py-8 px-12 inline-block border-b-2 border-emerald-500">
            {/* Name - slightly smaller than before */}
            <h1 className="text-3xl md:text-5xl font-light tracking-widest text-white uppercase">Crystal DePalma</h1>
            {/* Added subtitle with spacing */}
            <p className="text-lg md:text-xl text-white mt-3 font-light tracking-wide">Full Stack Web Developer</p>
          </div>
        </div>
      </section>

      {/* 
      ===========================================
      PROJECTS SECTION
      ===========================================
      Displays a grid of project cards with images, descriptions, and tags.
      Each card has hover effects and links to GitHub repositories.
      */}
      <section id="work" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-gray-900">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                Projects
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Here are some of my recent works:</p>
          </div>

          {/* Project cards grid - responsive layout with 1, 2, or 3 columns based on screen size */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 - IntPrepApp */}
            <ProjectCard
              title="IntPrepApp"
              description="Full-stack MERN application designed for interactive technical interview preparation with authentication and progress tracking."
              imageSrc="/project-1.png"
              // projectURL={"https://github.com/cdepalma32/intPrepApp"}
              githubURL={"https://github.com/cdepalma32/intPrepApp"}
              tags={["React", "MongoDB", "Express", "Node.js", "GraphQL"]}
            />
            {/* Project 2 - SocialNetAPI */}
            <ProjectCard
              title="SocialNetAPI"
              description="Backend API for a social network using Express.js, MongoDB, and Mongoose ODM with CRUD functionality for users, friends, and posts."
              imageSrc="/project-2.png"
              // projectURL={"https://github.com/cdepalma32/intPrepApp"}
              githubURL={"https://github.com/cdepalma32/intPrepApp"}
              tags={["Express", "MongoDB", "Mongoose", "REST API"]}
            />
            {/* Project 3 - EmpTrackSQL */}
            <ProjectCard
              title="EmpTrackSQL"
              description="Command-line interface application for managing a company's employee database with efficient CRUD functionality."
              imageSrc="/project-3.png"
              // projectURL={"https://github.com/JackeGould/expense-tracker"}
              githubURL={"https://github.com/JackeGould/expense-tracker"}
              tags={["Node.js", "MySQL", "Inquirer"]}
            />
          </div>
        </div>
      </section>

      {/* 
      ===========================================
      TECH STACK SECTION
      ===========================================
      Displays a grid of technology icons with hover effects.
      The TechStack component handles the display of all technology icons.
      */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto flex justify-center">
          <TechStack />
        </div>
      </section>

      {/* 
      ===========================================
      CONTACT SECTION
      ===========================================
      Three-column layout on large screens:
      Left column: Profile image and resume download button
      Middle column: Contact form
      Right column: Map and contact info
      */}
      <section id="contact" className="py-24 px-4 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-gray-900">
              Get in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Touch</span>
            </h2>
          </div>

          {/* Contact information cards - location, phone, email */}
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {/* Location card */}
            <div className="relative flex items-center gap-3 bg-white py-4 pr-4 pl-11 rounded-lg shadow-sm">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-emerald-600" />
              <span className="text-gray-600">New York, NY</span>
            </div>
            {/* Phone card */}
            <div className="relative flex items-center gap-3 bg-white py-4 pr-4 pl-11 rounded-lg shadow-sm">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-emerald-600" />
              <span className="text-gray-600">(201) 622-8522</span>
            </div>
            {/* Email card - removed truncate class and adjusted layout */}
            <div className="relative flex items-center gap-3 bg-white py-4 pr-4 pl-11 rounded-lg shadow-sm">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-emerald-600" />
              <span className="text-gray-600 break-all">crystaldepalma@yahoo.com</span>
            </div>
          </div>

          {/* Three-column layout for profile, contact form, and map */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* 
            LEFT COLUMN: Profile Image & Resume Download
            Includes a circular profile image with gradient shadow effect
            and a download resume button below it
            */}
            <div className="flex flex-col items-center">
              {/* Profile image with decorative effects */}
              <div className="relative mb-8">
                {/* Gradient blur effect behind the image */}
                <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-emerald-200 to-teal-200 blur-lg opacity-70"></div>
                {/* Circular image container with border */}
                <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <Image src="/Crystal-DePalma-Pic.jpeg" alt="Crystal DePalma" fill className="object-cover" />
                </div>
              </div>
              {/* Resume download button */}
              <a href="/resume/crystal-depalma-resume.pdf" target="_blank" rel="noreferrer">
                <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white">
                  Download Resume <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>

            {/* 
            MIDDLE COLUMN: Contact Form
            Contact form for sending messages
            */}
            <div className="lg:col-span-1">
              {/* Contact form container */}
              <div className="bg-white rounded-lg shadow-lg p-6 h-full">
                <ContactForm />
              </div>
            </div>

            {/* 
            RIGHT COLUMN: Map
            Google Maps embed showing New York location
            */}
            <div className="lg:col-span-1">
              <div className="rounded-lg overflow-hidden shadow-lg h-full min-h-[350px] bg-white">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25897420897!2d-74.11976373946234!3d40.697403441901946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1697932882838!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "350px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
      ===========================================
      FOOTER SECTION
      ===========================================
      Simple footer with social media links and copyright information.
      Responsive layout that stacks on mobile and aligns horizontally on desktop.
      */}
      <footer className="py-8 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-7 justify-between items-center">
            {/* Social media links */}
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/crystal-depalma-496710304/"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
                rel="noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/cdepalma32"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
                rel="noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
              <a href="mailto:crystaldepalma@yahoo.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
            {/* Copyright text */}
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Crystal DePalma. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

