'use client'
import React from 'react'

import { SocialBtn } from '@/components/Buttons'
import Image from 'next/image'

const Footer: React.FC = () => {
    return (
        <div className="footer-container h-[275px] bg-gray-1">
            <div className="footer-content-container container flex h-full flex-col">
                <div className="footer-content flex flex-1 flex-col items-center justify-center gap-6">
                    <div className="footer-title-container">
                        <Image
                            src="/assets/movie-go-logo.png"
                            alt="Movie go logo"
                            width={176}
                            height={59}
                        />
                    </div>
                    <div className="social-media-btns-container flex gap-4">
                        <SocialBtn type="facebook" />
                        <SocialBtn type="line" />
                        <SocialBtn type="x" />
                        <SocialBtn type="link" />
                    </div>
                </div>
                <div className="copyright border-t border-t-gray-3 py-3 text-center text-gray-5">
                    © Photo, Inc. 2024. We love our users!
                </div>
            </div>
        </div>
    )
}

export default Footer