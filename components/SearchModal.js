"use client"

import { useState, useEffect, useRef } from "react"
import { Search, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function SearchModal({ onClose }) {
  const [searchTerm, setSearchTerm] = useState("")
  const inputRef = useRef(null)

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose()
    }

    document.addEventListener("keydown", handleEscape)
    inputRef.current?.focus()

    return () => document.removeEventListener("keydown", handleEscape)
  }, [onClose])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-16"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 w-full max-w-2xl rounded-lg shadow-xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center border-b dark:border-gray-700 p-4">
            <Search className="w-5 h-5 text-gray-400 dark:text-gray-500 mr-3" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search blog posts..."
              className="flex-1 focus:outline-none text-lg bg-transparent dark:text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4">
            {searchTerm ? (
              <p className="text-gray-500 dark:text-gray-400 text-sm">Search results will appear here</p>
            ) : (
              <p className="text-gray-500 dark:text-gray-400 text-sm">Start typing to search blog posts</p>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

