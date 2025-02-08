import Link from 'next/link'
import React from 'react'

export default function About() {
    return (
        <div className="h-screen w-screen flex items-center justify-center flex-col bg-gray-600">
          <div className="block">hello world</div>
          <div className="text-blue-400">
            <Link href='/'>go to home....</Link>
          </div>
        </div>
      )

}
