import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { truncateName, truncateContent } from '../../../utils/numberUtils'

interface Movie {
    name: string
    image: string
    content: string
    city: string
    ticket: string
}

interface CardProps {
    movies: Movie[]
    imageSizeMap: { [key: string]: { width: number; height: number } }
}

const RecCard: React.FC<CardProps> = ({ movies, imageSizeMap }) => {
    return (
        <div className="grid grid-cols-5 gap-4 px-32">
            {movies.map((movie, index) => (
                <div key={index} className="m-4 overflow-hidden rounded-lg p-4">
                    <Link href="">
                        <div className="relative">
                            <Image
                                src={movie.image}
                                alt={movie.name}
                                width={imageSizeMap[movie.image]?.width}
                                height={imageSizeMap[movie.image]?.height}
                                className="rounded-lg border-2 border-white border-opacity-0 border-opacity-100 transition-opacity duration-300"
                            />
                            {/* Border-primary with blur effect */}
                            <div className="absolute inset-0 rounded-lg border-4 border-primary border-opacity-0 blur-sm transition-opacity duration-300 hover:border-opacity-100"></div>
                        </div>
                    </Link>
                    <div className="text-start">
                        <div className="mt-2 text-btn1 font-medium text-white">
                            {truncateName(movie.name)}
                        </div>
                        <div className="text-small2 font-regular">
                            <div className="text-gray-5">
                                {truncateContent(movie.content)}
                            </div>
                            <div className="flex text-white">
                                <div>{movie.ticket}</div>
                                <div className=" px-2">{movie.city}</div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RecCard
