import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Orrery</title>
        <meta name="description" content="Personal Home Of Moin Ahmed Qidwai On The World Wide Web! Welcome Stranger!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <div className="flex justify-center space-x-5 md:space-x-10">
            <p className="my-1 px-2 py-2 text-2xl md:text-6xl font-bold text-black">Welcome to Orrery</p>
          </div>
          <div className="flex justify-center space-x-5 md:space-x-10">
            <Link href="/contracts">
              <button className="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Invest Now
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}