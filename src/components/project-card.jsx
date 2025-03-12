'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ProjectCard ({
  title,
  description,
  imageSrc,
  projectURL,
  githubURL,
  tags = []
}) {
  // State to track hover status for animations
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className='bg-white rounded-xl overflow-hidden shadow-lg group'
      // Animation properties
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      // Hover event handlers
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project image with hover effects */}
      <div className='relative h-64 overflow-hidden'>
        {/* Project thumbnail image */}
        <Image
          src={imageSrc}
          alt={title}
          fill
          className={`object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        {/* Gradient overlay that appears on hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        ></div>
        {/* Action buttons that slide up on hover */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-4 transition-transform duration-300 ${
            isHovered ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <div className='flex space-x-2'>
            {/* View project button */}
            <a href={projectURL} target='_blank'>
              <Button className='bg-white text-emerald-600 hover:bg-white/90'>
                View Project <ArrowRight className='ml-2 h-4 w-4' />
              </Button>
            </a>
            {/* GitHub repository button */}
            <a href={githubURL} target='_blank'>
              <Button
                variant='outline'
                className='bg-white border-emerald-500 text-emerald-600'
              >
                <Github className='h-4 w-4' />
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Project details */}
      <div className='p-6'>
        {/* Project title */}
        <h3 className='text-xl font-medium mb-2 text-gray-900'>{title}</h3>
        {/* Project description */}
        <p className='text-gray-600 text-sm mb-4'>{description}</p>

        {/* Technology tags */}
        {tags.length > 0 && (
          <div className='flex flex-wrap gap-2 mb-4'>
            {tags.map(tag => (
              <span
                key={tag}
                className='text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-600'
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* <div className="flex justify-between items-center">
          <Button variant="ghost" className="p-0 h-auto text-emerald-600 hover:text-emerald-700 hover:bg-transparent">
            <span className="border-b border-emerald-600 pb-px">Details</span>
          </Button>
          <Button variant="ghost" size="icon" className="text-emerald-600 hover:text-emerald-700 hover:bg-transparent">
            <ExternalLink className="h-5 w-5" />
          </Button>
        </div> */}
      </div>
    </motion.div>
  )
}
