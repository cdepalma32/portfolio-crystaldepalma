"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Navbar() {
  // State to track whether the user has scrolled past the hero section
  const [scrolled, setScrolled] = useState(false)
  // State to track whether the menu dropdown is open
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    // Function to handle scroll events and update the scrolled state
    const handleScroll = () => {
      // Check if page is scrolled past hero section (adjust threshold as needed)
      const isScrolled = window.scrollY > window.innerHeight - 100
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll)

    // Initial check in case page is loaded at a scrolled position
    handleScroll()

    // Clean up event listener when component unmounts
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  // Function to toggle the menu dropdown
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Function to close the menu
  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 ${
        // Change navbar style based on scroll position
        scrolled ? "bg-white/80 backdrop-blur-md border-b border-gray-100" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Menu dropdown button - always on the left */}
        <div className={scrolled ? "text-gray-800" : "text-white"}>
          <Button
            variant="ghost"
            className={`p-0 h-auto hover:bg-transparent ${scrolled ? "text-gray-800" : "text-white"}`}
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              // X icon when menu is open
              <X className="h-6 w-6" />
            ) : (
              // Menu icon when menu is closed - removed the word "Menu"
              <div className="flex items-center">
                <Menu className="h-6 w-6 mr-1" />
                <ChevronDown className="h-4 w-4" />
              </div>
            )}
          </Button>
        </div>

        {/* Empty div to maintain flex layout */}
        <div></div>
      </div>

      {/* Menu dropdown - only visible when isMenuOpen is true */}
      {isMenuOpen && (
        <div
          className={`absolute left-0 right-0 p-4 z-50 border-b mt-2 ${
            // Style dropdown based on scroll position
            scrolled
              ? "bg-white/90 backdrop-blur-md border-gray-200"
              : "bg-black/90 backdrop-blur-md border-emerald-500/30"
          }`}
        >
          <nav className="flex flex-col space-y-4 py-2">
            <a
              href="#work"
              className={`px-4 py-2 transition-colors ${
                scrolled ? "text-gray-800 hover:text-emerald-600" : "text-white hover:text-emerald-400"
              }`}
              onClick={closeMenu}
            >
              Projects
            </a>
            <a
              href="#contact"
              className={`px-4 py-2 transition-colors ${
                scrolled ? "text-gray-800 hover:text-emerald-600" : "text-white hover:text-emerald-400"
              }`}
              onClick={closeMenu}
            >
              Contact me
            </a>
            <a
              href="/resume/crystal-depalma-resume.pdf"
              target="_blank"
              rel="noreferrer"
              className={`px-4 py-2 transition-colors ${
                scrolled ? "text-gray-800 hover:text-emerald-600" : "text-white hover:text-emerald-400"
              }`}
              onClick={closeMenu}
            >
              My resume
            </a>
          </nav>
        </div>
      )}
    </nav>
  )
}

