import './globals.css'
import Head from 'next/head'

export const metadata = {
  title: 'Amal & Abhirami — Wedding',
  description: 'Join our journey — Oct 19, 2025',
  openGraph: {
    title: 'Amal & Abhirami — Wedding',
    description: 'Join our journey — Oct 19, 2025',
    images: ['/og.png'],
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* OG image is in /public/og.png — replace with your image */}
      </Head>
      <body>
        {children}
      </body>
    </html>
  )
}
