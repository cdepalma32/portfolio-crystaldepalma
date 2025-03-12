"use client"

import { motion } from "framer-motion"

export default function TechStack() {
  // Array of technologies with their names, icon keys, and brand colors
  const technologies = [
    { name: "HTML5", icon: "html5", color: "#E34F26" },
    { name: "CSS3", icon: "css3", color: "#1572B6" },
    { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
    { name: "TypeScript", icon: "typescript", color: "#3178C6" },
    { name: "React", icon: "react", color: "#61DAFB" },
    { name: "Node.js", icon: "nodejs", color: "#339933" },
    { name: "Express", icon: "express", color: "#000000" },
    { name: "MongoDB", icon: "mongodb", color: "#47A248" },
    { name: "MySQL", icon: "mysql", color: "#4479A1" },
    { name: "GraphQL", icon: "graphql", color: "#E10098" },
    { name: "Apollo", icon: "apollo", color: "#311C87" },
    { name: "Bootstrap", icon: "bootstrap", color: "#7952B3" },
    { name: "jQuery", icon: "jquery", color: "#0769AD" },
    { name: "Git", icon: "git", color: "#F05032" },
    { name: "Netlify", icon: "netlify", color: "#00C7B7" },
  ]

  return (
    <div className="w-full grid grid-cols-3 md:grid-cols-5 lg:flex lg:flex-wrap lg:justify-center gap-8 md:gap-12">
      {/* Map through technologies array to create icon elements */}
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          // Animation properties for each icon
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center group lg:w-[9%]"
        >
          {/* Icon container with grayscale effect that removes on hover */}
          <div className="w-12 h-12 mb-2 transition-all duration-300 grayscale group-hover:grayscale-0">
            <TechIcon name={tech.icon} />
          </div>
          {/* Technology name - hidden by default, visible on hover */}
          <span className="text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {tech.name}
          </span>
        </motion.div>
      ))}
    </div>
  )
}

// Helper component to render the appropriate icon based on the name
function TechIcon({ name }) {
  // Map of icon names to their CDN URLs
  const iconMap = {
    html5: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    css3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    nodejs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    mysql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    graphql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    apollo: "https://cdn.simpleicons.org/apollographql/311C87",
    bootstrap: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    jquery: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
    git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    netlify: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg",
  }

  return (
    <div className="w-12 h-12 flex items-center justify-center">
      {/* If icon exists in the map, display it; otherwise show a fallback */}
      {iconMap[name] ? (
        <img src={iconMap[name] || "/placeholder.svg"} alt={name} className="w-full h-full" />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-lg font-bold">
          {name.substring(0, 2).toUpperCase()}
        </div>
      )}
    </div>
  )
}

