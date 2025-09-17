import Image from 'next/image'
import dynamic from 'next/dynamic';

const Countdown = dynamic(() => import('../components/Countdown'), { ssr: false });

import MusicPlayer from '../components/MusicPlayer'
import Link from 'next/link'
import { Great_Vibes, Dancing_Script } from 'next/font/google'
import { Heart, MapPin, MapPinned, Navigation, Sparkle, Sparkles } from 'lucide-react';

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

        <div className="mb-12">
          <div className="border p-1">
            <Image
              src="/collage-1.jpg"
              alt="wedding collage"
              width={1200}   // adjust to your collage width
              height={1000}   // adjust to your collage height
              className="w-full h-auto"
            />
          </div>
        </div>



        <div className={`${greatVibes.className} text-4xl md:text-5xl `}>
          Join Our Journey
        </div>

      </section>

      {/* Countdown */}
      <Countdown />


      {/* Our Story */}
      <section className="container-print grid grid-cols-2 gap-6 items-stretch">
        {/* Image */}
        <div className="max-w-md border p-2 h-full">
          <Image
            src="/ourstory.jpg"
            alt="our story"
            width={600}
            height={800}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Text */}
        <div className="h-full flex flex-col justify-center">
          <h2 className="text-4xl mb-4 flex items-center gap-2">Our Story<span>
            <Heart className="w-6 h-6 text-rose-400 fill-current" />
          </span></h2>
          <p className="text-lg text-gray-700">
            What started in school corridors as friendship has grown into love, and today, into a lifetime bond...
            From laughter to love, from dreams to reality — our story now becomes forever. Bound by love, blessed by family, and cherished by destiny — we are tying the knot.
          </p>
        </div>
      </section>


      {/* Schedule & Leave a Wish */}
      {/* Schedule & Leave a Wish */}
      <section className="container-print grid grid-cols-2 items-center gap-6">
        <div className=' text-center'>
          <h2 className="text-4xl  mb-4">Schedule</h2>
          <p className="mb-6 font-serif text-lg text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center align-middle">
              <Sparkles className="w-4 h-4 fill-current text-rose-400 mr-2 animate-pulse" />
            </span>
            Like Rama and Sita, may their bond be eternal.
            <br />
            Like Radha and Krishna, may their love be divine
            <span className="inline-flex items-center align-middle">
              <Sparkles className="w-4 h-4 fill-current text-pink-400 ml-2 animate-pulse" />
            </span>
          </p>

          {/* Time & Muhurtam Centered */}
          <div className="text-center">
            <div className="lg:text-3xl text-2xl whitespace-nowrap font-semibold  mb-2">
              10:30 AM - 11:15 AM
            </div>
            <div className="text-xl  font-semibold text-gray-700">
              Wedding Ceremony (Muhurtham)
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <Link href="/wish">
              <button className="relative rounded-full bg-gradient-to-r from-rose-400 to-pink-500 px-6 py-3 flex items-center gap-2 font-serif font-semibold text-white transition-all duration-300 ease-in-out shadow-lg  backdrop-blur-sm">
                Leave a Wish
                <span>
                  <Heart className="w-5 h-5 fill-current" />
                </span>
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

      <section className="py-16 px-4 bg-gradient-to-b from-white to-rose-50/30">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Heart className="w-5 h-5 text-rose-400 fill-current" />
              <h2 className="text-3xl md:text-4xl font-serif text-gray-800">
                Getting There
              </h2>
              <Heart className="w-5 h-5 text-rose-400 fill-current" />
            </div>
            <p className="text-gray-600 font-serif italic">Join us at our special venue</p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 items-start">

            {/* Map */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-200 to-pink-200 rounded-xl blur-sm opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-xl shadow-lg border border-white/50 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.6934756533797!2d76.14556247503943!3d10.603121289535293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7eb80cc746e0f%3A0x13b00891d776e573!2sAlappat%20Auditorium%20(A%2FC)!5e0!3m2!1sen!2sin!4v1758115446824!5m2!1sen!2sin"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                ></iframe>
              </div>
            </div>

            {/* Location Details */}
            <div className="flex flex-col justify-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/50 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-rose-100 rounded-full">
                    <MapPin className="w-6 h-6 text-rose-500 " />
                  </div>
                  <h3 className="text-2xl  text-gray-800">Venue Details</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className=" text-lg text-gray-800 mb-2">Alappat Auditorium (A/C)</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Arampilly Road, Mundur, Thrissur,<br />
                      Anjur, Kerala 680546
                    </p>
                  </div>
                </div>
              </div>


            </div>
          </div>
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
