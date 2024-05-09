import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { truncateName } from '../../../utils/numberUtils'

interface Movie {
    name: string
    number: number
    price: number
    image: string
    date: string
}

interface CardProps {
    movies: Movie[]
    imageSizeMap: { [key: string]: { width: number; height: number } }
}

const ShareCard: React.FC<CardProps> = ({ movies, imageSizeMap }) => {
    return (
        <div className="grid grid-cols-4 gap-4 px-32">
            {movies.map((movie, index) => (
                <div
                    key={index}
                    className="m-4 flex flex-col items-center rounded-lg shadow-md">
                    <Link href="">
                        <Image
                            src={movie.image}
                            alt={movie.name}
                            width={imageSizeMap[movie.image]?.width}
                            height={imageSizeMap[movie.image]?.height}
                            className="rounded-lg object-cover"
                        />
                    </Link>
                    <div className="mt-2 text-center">
                        <div className="text-headline5 font-medium text-white">
                            {truncateName(movie.name)}
                        </div>
                        <div className="text-small2">
                            <div className="flex items-center justify-center text-gray-5">
                                剩餘
                                <nav className="px-2 text-number4 text-primary">
                                    {' '}
                                    1{' '}
                                </nav>
                                張
                            </div>
                            <div className="flex items-center justify-center text-gray-5">
                                NT$
                                <nav className="px-2 text-number4 text-primary">
                                    {' '}
                                    {movie.price}{' '}
                                </nav>
                            </div>
                        </div>
                        <div className="flex items-center justify-center text-gray-5">
                            時效性
                            <nav className="px-2 text-number5 text-white">
                                {' '}
                                {movie.date}{' '}
                            </nav>
                        </div>
                    </div>
                    <button className="rounded-lg bg-blue-500 text-white hover:bg-blue-600">
                        聊聊
                    </button>
                </div>
            ))}
        </div>
    )
}
export default ShareCard