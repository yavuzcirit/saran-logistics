"use client"
import Footer from '@/components/Footer'
import React from 'react'

const LayoutClient = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div>
        {children}
        <Footer />
        </div>
  )
}

export default LayoutClient