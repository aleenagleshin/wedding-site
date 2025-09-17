'use client';
import Image from 'next/image'
import { useState } from 'react';

export default function WishPage() {
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);
  return (
    <main className="container-print">
      <div className="grid grid-cols-2 gap-6 items-center">

        <div className="border p-2 max-w-sm"><Image src='/wish_image.jpg' alt='wish' width={600} height={800} className='object-cover w-full h-full' /></div>
        <div>
          <h2 className="text-4xl font-serif mb-4">Leave a Wish</h2>
          {submitted ? (
            <div className="p-6 rounded border bg-white">Thanks for the love ❤️</div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); /* TODO: hook up API */ }}>
              <label className="block mb-2">Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} className="w-full mb-4 p-3 border" placeholder="Your name" required />
              <label className="block mb-2">Your message</label>
              <textarea value={msg} onChange={(e) => setMsg(e.target.value)} className="w-full mb-4 p-3 border" rows={6} placeholder="Share your wish..." required />
              <button
                className="px-6 py-3 rounded-full bg-gradient-to-r from-black to-white text-white font-semibold 
             shadow-lg hover:from-white hover:to-black hover:text-black transition-all duration-300"
              >
                Share Love ❤︎
              </button>

            </form>
          )}
        </div>
      </div>
    </main>
  )
}
