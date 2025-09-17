import './globals.css'
import Head from 'next/head'

export const metadata = {
  title: 'Amal & Abhirami — Wedding',
  description: 'Join our journey — Oct 19, 2025',
  openGraph: {
    title: 'Amal & Abhirami — Wedding',
    description: 'Join our journey — Oct 19, 2025',
    images: ['https://wedding-site-jnv87wczv-aleena-gleshin-s-projects.vercel.app/og.png'], // full URL
  },
};




export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <Head>
  <meta property="og:title" content="Amal & Abhirami — Wedding" />
  <meta property="og:description" content="Join our journey — Oct 19, 2025" />
  <meta property="og:image" content="https://wedding-site-qepw2e7ev-aleena-gleshin-s-projects.vercel.app/og.png" />
  <meta property="og:url" content="https://wedding-site-qepw2e7ev-aleena-gleshin-s-projects.vercel.app" />
  <meta property="og:type" content="website" />
</Head>

      <body>{children}</body>
    </html>
  );
}

