"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

export default function ContactForm() {
  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  // States to track form submission status
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission with a delay
    // In a real application, this would be replaced with an API call
    setTimeout(() => {
      console.log("Form submitted:", formData)
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name and Email fields in a two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name field */}
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-700 flex">
            Name
          </label>
          <Input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-white rounded-lg border-gray-200 focus:border-emerald-500 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="Your name"
          />
        </div>
        {/* Email field */}
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700 flex">
            Email
          </label>
          <Input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-white rounded-lg border-gray-200 focus:border-emerald-500 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      {/* Subject field */}
      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium text-gray-700 flex">
          Subject
        </label>
        <Input
          id="subject"
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="bg-white rounded-lg border-gray-200 focus:border-emerald-500 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          placeholder="How can I help you?"
        />
      </div>

      {/* Message field */}
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-700 flex">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="min-h-[120px] rounded-lg border-gray-200 focus:border-emerald-500 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          placeholder="Tell me about your project..."
        />
      </div>

      {/* Submit button or success message */}
      <div>
        {isSubmitted ? (
          // Success message shown after form submission
          <div className="bg-emerald-50 text-emerald-700 px-4 py-3 rounded-lg flex items-center">
            <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Message sent successfully! I'll get back to you soon.
          </div>
        ) : (
          // Submit button with loading state
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white py-3"
          >
            {isSubmitting ? (
              // Loading spinner and text when submitting
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </>
            ) : (
              // Default button state
              <>
                Send Message <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        )}
      </div>
    </form>
  )
}

