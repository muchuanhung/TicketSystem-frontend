'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import empty from '@images/empty.png'
import Button from '../Button'

interface EmptyDataProps {
    message: string
    hasButton?: boolean
    buttonMessage?: string
    resetURL?: string
}

const EmptyData: React.FC<EmptyDataProps> = ({
    message,
    hasButton = false,
    buttonMessage,
    resetURL = '',
}) => {
    const router = useRouter()
    return (
        <div className="flex w-full flex-col items-center justify-between md:justify-center">
            <Image src={empty} alt={'no data exist'} width={180} height={180} />
            <p className="text-small1 tracking-wide text-gray-5 md:text-body md:tracking-wider">
                {message}
            </p>
            {hasButton ? (
                <Button
                    className={'mt-8 px-4 py-2 md:mt-10 md:px-5 md:py-3'}
                    type={'button'}
                    title={'navigation'}
                    onClick={() => {
                        router.push(resetURL)
                    }}>
                    <span className="text-btn2 md:text-btn1">
                        {buttonMessage}
                    </span>
                </Button>
            ) : null}
        </div>
    )
}

export default EmptyData
