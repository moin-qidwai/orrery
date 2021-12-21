import '../styles/globals.css'

import { AppProps } from 'next/app'
import Link from 'next/link'

import { RecoilRoot } from "recoil";

function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <div>
        <header className="w-full">
          <div className="w-full border-b-2 border-gray-100 px-4 sm:px-6">
            <div className="flex justify-center py-3 space-x-5 md:space-x-10">
              <Link href="/"><h2 className="font-bold italic font-sans text-4xl cursor-pointer">ORRERY</h2></Link>
            </div>
          </div>
        </header>
        
        <Component {...pageProps} />
        
        <footer className="flex border-t z-20 border-gray-100 w-screen bg-white fixed bottom-0 py-5 justify-center">
          Moin Ahmed Qidwai - &copy; Copyright 2022
        </footer>
      </div>
    </RecoilRoot>
  )
}

export default App