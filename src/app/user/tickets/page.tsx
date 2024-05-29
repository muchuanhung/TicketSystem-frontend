import React from 'react'
import { ButtonGroup, TicketGroup } from '@/components/layout'
import clsx from 'clsx'

interface Props {}

const Page: React.FC<Props> = () => {
    return (
        <div className=" py-6 md:py-0 md:pl-[60px]">
            <div className="flex gap-2">
                <ButtonGroup />
            </div>
            <div
                className={clsx(
                    'mt-4 md:mt-10',
                    'md:relative md:after:absolute md:after:bottom-0 md:after:z-10 md:after:h-[80px] md:after:w-full md:after:shadow-[inset_0_-35px_30px_-15px_rgba(0,0,0,0.5)] md:after:shadow-gray-1',
                )}>
                <TicketGroup />
            </div>
        </div>
    )
}

export default Page
