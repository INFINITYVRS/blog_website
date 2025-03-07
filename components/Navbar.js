"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Search } from "lucide-react"
import SearchModal from "./SearchModal"
import ThemeToggle from "./ThemeToggle"
import Image from "next/image"

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="relative h-8 w-8 mr-2">
                <Image
                  src="/logo.png"
                  alt="KINETON Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span
                className={`text-gray-900 dark:text-white text-xl font-bold transition-opacity duration-300 ${scrolled ? "opacity-0 max-w-0 overflow-hidden" : "opacity-100 max-w-full"}`}
              >
                KINETON
              </span>
            </Link>
          </div>

          <nav className="hidden md:ml-6 md:flex md:space-x-8">
            
            <Link
              href="/"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-blue-500 border-b-2 border-blue-500"
            >
              Blog
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 focus:outline-none"
            >
              <Search size={20} />
            </button>
            <Link
              href="#"
              className="rounded-md bg-gray-100 dark:bg-gray-800 px-4 py-2 text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>

      {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}
    </header>
  )
}

