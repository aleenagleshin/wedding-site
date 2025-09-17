import Image from 'next/image'
import dynamic from 'next/dynamic';

const Countdown = dynamic(() => import('../components/Countdown'), { ssr: false });

import MusicPlayer from '../components/MusicPlayer'
import Link from 'next/link'
import { Great_Vibes, Dancing_Script } from 'next/font/google'

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
})

const dancingScript = Dancing_Script({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export default function Home() {
  return (
    <main>
      <section className="container-print text-center">
       <h1 className={`${dancingScript.className} text-6xl md:text-8xl mb-2`}>
  Amal & Abhirami
</h1>
        <div className="text-lg mb-8">OCT 19, 2025</div>

        {/* Top gallery: 3 images arranged like the provided design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch mb-12">
  <div className="md:col-span-2 space-y-1">
    <div className="border p-1">
      <Image
        src="/home1.jpg"
        alt="home1"
        width={600}
        height={100}
        className="object-cover w-full h-64 md:h-72"
      />
    </div>
    <div className="border p-1">
      <Image
        src="/home2_bw.jpg"
        alt="homebw"
        width={800}
        height={500}
        className="object-cover w-full h-48 md:h-56"
      />
    </div>
  </div>

  <div className="border p-1">
    <Image
      src="/home3.jpg"
      alt="home3"
      width={600}
      height={50}
      className="object-cover w-full h-full"
    />
  </div>
</div>


      <div className={`${greatVibes.className} text-4xl md:text-5xl my-12`}>
  Join Our Journey
</div>

      </section>

     {/* Countdown */}
<section className="relative bg-gradient-to-b from-black/10 to-white py-8 shadow-inner">
  <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-b from-black/20 to-transparent pointer-events-none"></div>
  <Countdown />
</section>


      {/* Our Story */}
      <section className="container-print grid md:grid-cols-2 items-center gap-6">
        <div className="max-w-md border p-2"><Image src='/ourstory.jpg' alt='our story' width={600} height={800} className="object-cover w-full h-full"/></div>
        <div>
          <h2 className="text-4xl font-serif mb-4">Our Story</h2>
          <p className="text-lg text-gray-700">What started in school corridors as friendship has grown into love, and today, into a lifetime bond... From laughter to love, from dreams to reality — our story now becomes forever. Bound by love, blessed by family, and cherished by destiny — we are tying the knot.</p>
        </div>
      </section>

      {/* Schedule & Leave a Wish */}
      {/* Schedule & Leave a Wish */}
<section className="container-print grid md:grid-cols-2 items-center gap-6">
  <div>
    <h2 className="text-4xl font-serif mb-4">Schedule</h2>
   <p className="mb-6 font-sans text-gray-800">
  ✨ Like Rama and Sita, may their bond be eternal.<br></br> Like Radha and Krishna, may their love be divine ✨ 
</p>

    {/* Time & Muhurtam Centered */}
    <div className="text-center">
      <div className="text-3xl font-serif font-bold tracking-wide mb-2">
        10:30 AM - 11:15 AM
      </div>
      <div className="text-xl font-serif font-semibold text-gray-700">
        Wedding Ceremony (Muhurtam)
      </div>
    </div>
<div className="flex justify-center mt-6">
  <Link href="/wish">
        <button 
  className="px-6 py-3 rounded-full bg-gradient-to-r from-black to-white text-white font-semibold 
             shadow-lg hover:from-white hover:to-black hover:text-black transition-all duration-300"
>
  Leave a Wish  ❤︎
</button>
  </Link>
</div>


   </div>

{/* Caricature Image with Play Button */}
<div className="relative border p-2 w-64 md:w-80 mx-auto h-96 overflow-hidden">
  <Image
    src="/caricature.jpg"
    alt="caricature"
    width={600}
    height={800}
    className="object-cover w-full h-full"
  />

  {/* Play button at bottom-left */}
  <div className="absolute bottom-4 left-4">
    <MusicPlayer />
  </div>
</div>




</section>

{/* Location */}
<section className="container-print grid md:grid-cols-2 gap-6 items-start">
  <div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.6934756533797!2d76.14556247503943!3d10.603121289535293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7eb80cc746e0f%3A0x13b00891d776e573!2sAlappat%20Auditorium%20(A%2FC)!5e0!3m2!1sen!2sin!4v1758115446824!5m2!1sen!2sin"
      width="100%"
      height="400"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
  <div className="text-center mt-12">
  <h2 className="text-4xl font-serif mb-6">Getting there</h2>
  <p className="text-lg">
                    📍Alappat Auditorium (A/C), <br></br>
                    Arampilly Road, Mundur, Thrissur, Anjur, Kerala 680546
  </p>
</div>


</section>

       
      
{/* Final full width image with overlay and footer */}
<section className="relative">
  <Image
    src='/final.jpg'
    alt='see you there'
    width={2000}
    height={800}
    className="w-full h-[100vh] object-cover"
  />

  {/* Black transparent overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-35"></div>

  {/* Overlay text */}
  <div className="absolute inset-0 flex flex-col justify-center items-center">
    <h2 className={`${dancingScript.className} text-6xl md:text-8xl text-white font-light drop-shadow-lg mb-4`}>
      See you there!
    </h2>
  </div>
  
   {/* Footer */}
<div className="absolute bottom-0 w-full bg-black bg-opacity-90 text-white text-center py-3 text-lg md:text-xl font-semibold">
  Coded with Love ~ Aleena ♡ Athul
</div>


</section>


    </main>
  )
}
