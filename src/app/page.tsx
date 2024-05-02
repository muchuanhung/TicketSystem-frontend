import React from 'react'
import { Header } from '@components/layout'

export default function Home() {
    return (
        <>
            <Header />
            <main className="min-h-screen">
                <div className="">
                    <h1 className="mt-10 text-center text-3xl font-bold">
                        Welcome to my Next.js App!
                    </h1>
                    <p className="mt-4 flex text-center text-lg">
                        This is a simple example page.
                    </p>
                </div>
            </main>
        </>
    )
}
