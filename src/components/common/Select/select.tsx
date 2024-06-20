'use client'

import React from 'react'
import * as Select from '@radix-ui/react-select'
import clsx from 'clsx'
import {
    CheckIcon,
    ChevronDownIcon,
    ChevronUpIcon,
} from '@radix-ui/react-icons'
interface SelectProps {
    placeholder?: string
    label: string
    options: string[] // 將 options 改為 string 的數組形式
    onSelectChange: (selectedValue: string) => void // 使用函數類型來描述 onSelectChange，它接收一個 string 參數並且不返回任何值
    className?: string // Add className prop
}

const SelectInput: React.FC<SelectProps> = ({
    placeholder,
    label,
    onSelectChange,
    options,
    className, // Add className prop
}) => {
    const [selectedValue, setSelectedValue] = React.useState<string>('')

    const handleChange = (value: string) => {
        setSelectedValue(value)
        onSelectChange(value)
    }
    return (
        <Select.Root
            value={selectedValue}
            onValueChange={(newValue) => handleChange(newValue ?? '')}>
            <Select.Trigger
                className="text-violet11 hover:bg-mauve3 data-[placeholder]:text-violet9 inline-flex w-full items-center justify-between gap-[5px] rounded border border-gray-3 bg-gray-1 px-4 py-3 text-body leading-none text-white shadow-[0_2px_10px] shadow-black/10 outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary w-f"
                aria-label="city"
                disabled={options.length === 0}
                asChild={false}
                data-state={'open'}>
                <Select.Value placeholder={placeholder} />
                <Select.Icon className="text-violet11">
                    <ChevronDownIcon />
                </Select.Icon>
            </Select.Trigger>
            <Select.Portal>
                <Select.Content
                    className="z-50 mt-1 overflow-hidden rounded-md bg-gray-1 text-white shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]"
                    position="popper"
                    style={{ width: 'var(--radix-select-trigger-width)' }}
                    sideOffset={5}>
                    <Select.ScrollUpButton className="text-violet11 flex h-[25px] cursor-default items-center justify-center bg-white">
                        <ChevronUpIcon />
                    </Select.ScrollUpButton>
                    <Select.Viewport className="rounded-lg border border-gray-3">
                        <Select.Group>
                            <Select.Label className="flex items-center justify-start px-4 py-3 text-body">
                                {label}
                            </Select.Label>
                            {options.map((option, index) => (
                                <SelectItem
                                    key={index}
                                    value={option}
                                    onClick={() => handleChange(option)}
                                    className="flex items-center justify-start border border-x-0 border-gray-3 px-4 py-3 text-body hover:text-primary">
                                    {option}
                                </SelectItem>
                            ))}
                        </Select.Group>
                    </Select.Viewport>
                    <Select.ScrollDownButton className="text-violet11 flex  h-[25px] cursor-default items-center justify-center bg-white">
                        <ChevronDownIcon />
                    </Select.ScrollDownButton>
                </Select.Content>
            </Select.Portal>
        </Select.Root>
    )
}
interface SelectItemProps {
    value: string
    className?: string
    children?: React.ReactNode
    disabled?: boolean
    onClick: () => void // 更新 onClick 属性
}
const SelectItem: React.FC<SelectItemProps> = ({
    value,
    children,
    onClick,
    ...props
}) => {
    return (
        <Select.Item value={value} onClick={onClick} {...props}>
            <Select.ItemText>{children}</Select.ItemText>
            {/* <Select.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
                <CheckIcon />
            </Select.ItemIndicator> */}
        </Select.Item>
    )
}

export default SelectInput
