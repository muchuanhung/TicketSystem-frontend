'use client'
import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import type { FC, ReactNode } from 'react'
import { useRouter } from 'next/navigation'

interface ModalProps {
    children: ReactNode
    onClose?: () => void
}

const Modal: FC<ModalProps> = ({ children, onClose }) => {
    const router = useRouter()

    const handleOnOpenChange = (open: boolean) => {
        if (!open) {
            if (onClose) {
                onClose()
            } else {
                router.back()
            }
        }
    }

    return (
        <Dialog.Root open onOpenChange={handleOnOpenChange}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70" />

                <Dialog.DialogContent className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2  bg-white">
                    {children}
                </Dialog.DialogContent>
            </Dialog.Portal>
        </Dialog.Root>
    )
}

export default Modal
