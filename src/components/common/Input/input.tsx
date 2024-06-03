'use client'

import React from 'react'
import clsx from 'clsx'

interface InputProps {
    label?: string
    type: string
    value: string
    placeholder?: string
    onChange: (value: string) => void
    theme?: 'light' | 'dark'
    rounded?: 'full' | 'none' | 'md'
    required?: boolean
    name?: string
    className?: string // Add className prop
}

const InputComponent: React.FC<InputProps> = ({
    label,
    type,
    value,
    placeholder = '',
    onChange,
    theme = 'dark',
    rounded = 'md',
    required = false,
    name = '',
    className, // Add className prop
}) => {
    return (
        <div>
            <label
                htmlFor={name}
                className={clsx(
                    'mb-2 block text-small2 leading-150 text-white md:text-small1',
                    {
                        'text-gray-900': theme === 'light',
                    },
                )}>
                {label}
                {required ? <span className="text-primary">*</span> : null}
            </label>
            <div className="mt-auto md:mt-2.5">
                <input
                    name={name}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    type={type}
                    className={clsx(
                        'border-1 ring-black-300/10 block h-full w-full border-gray-3 bg-gray-1 px-2.5 py-2 text-small2 leading-150 text-white shadow-sm ring-1 placeholder:text-gray-4 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary md:px-4 md:py-2.5 md:text-body',
                        {
                            'text-gray-900': theme === 'light',
                            'bg-opacity-0': theme === 'light',
                            'rounded-full': rounded === 'full',
                            'rounded-none': rounded === 'none',
                            'rounded-md': rounded === 'md',
                        },
                        className, // Apply custom className
                    )}
                    placeholder={placeholder}
                />
            </div>
        </div>
    )
}

export default InputComponent
