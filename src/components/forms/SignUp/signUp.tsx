'use client' // This is a client component 👈🏽

import React, { useState } from 'react'
import { useSignUpMutation } from '@/services/modules/auth'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { InputComponent, Checkbox } from '../../common'
import { Button } from '@/components/common'

export default function SignUp() {
    const [signUp] = useSignUpMutation()
    const router = useRouter()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [passWord, setPassWord] = useState('')
    const [checkPassWord, setCheckPassWord] = useState('')
    const [agree, setAgree] = useState('')

    const handleUsernameChange = (value: string) => {
        setUsername(value)
    }

    const handleEmailChange = (value: string) => {
        setEmail(value)
    }

    const handlePasswordChange = (value: string) => {
        setPassWord(value)
    }

    const handleCheckPasswordChange = (value: string) => {
        setCheckPassWord(value)
    }

    const handleAgreeChange = (value: string) => {
        setAgree(value)
    }

    const handleSubmit = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        try {
            await signUp({
                account: username,
                email,
                pwd: passWord,
                confirmPwd: checkPassWord,
            })
            router.push('/login', { scroll: false })
        } catch (error) {
            console.log('ERROR', error)
        }
    }
    return (
        <>
            <div className="text-center">
                <h2 className="text-header5 font-bold tracking-wide text-white md:text-header4">
                    建立新帳號
                </h2>
            </div>
            <form action="#" method="POST" className="mx-auto mt-6">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                        <div>
                            <InputComponent
                                label={'使用者帳號'}
                                type={'text'}
                                value={username}
                                onChange={handleUsernameChange}
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <div>
                            <InputComponent
                                label={'電子信箱'}
                                type={'email'}
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <InputComponent
                            label={'密碼'}
                            type={'password'}
                            value={passWord}
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <InputComponent
                            label={'確認密碼'}
                            type={'password'}
                            value={checkPassWord}
                            onChange={handleCheckPasswordChange}
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <Checkbox
                            label={'我已詳閱所有條款及同意個人資料'}
                            value={agree}
                            onChange={handleAgreeChange}
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <div className="flex items-center">
                            <label
                                htmlFor="message"
                                className="block text-small2 font-semibold leading-6 text-primary md:text-small1">
                                已經有帳號了？
                            </label>
                            <Link
                                href="/login"
                                className="focus-visible:outline-indigo-60 block rounded-md px-3.5 text-center text-small2 font-semibold text-primary underline shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 md:text-small1"
                                scroll={false}>
                                登入
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <Button
                        type={'button'}
                        title="signUp"
                        onClick={handleSubmit}
                        className="w-full py-3 text-btn2 text-white md:text-btn1 rounded-md font-semibold">
                        註冊
                    </Button>
                </div>
            </form>
        </>
    )
}
