import React, { useEffect } from "react";
import { useState } from "react";
import { Link, router, usePage } from "@inertiajs/react";

export default function Login(){
    const {errors, flash} = usePage().props
    
    const [cred, setCred] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setCred({
            ...cred,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        router.post('masuk', cred)
    }

    return (
        <div className="bg-cyan-500 h-screen w-full flex items-center justify-center">
            <div className="p-10 rounded-lg shadow border bg-white w-10/12 md:w-6/12 lg:w-4/12">
                <h3 className="text-2xl mb-7 font-semibold text-gray-500">Masuk</h3>
                {
                    flash.message && 
                    <span className="block px-5 py-2 bg-cyan-100 mb-7 text-center text-cyan-500 rounded-lg text-xs font-light">
                        {flash.message}
                    </span>
                }
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="block">
                            <span className="block font-light text-sm text-gray-500 mb-2">Email</span>
                            <input onChange={handleChange} type="text" className="px-4 py-2 rounded-lg border w-full" name="email" />
                            {errors.email && <div className="text-xs mt-1 font-light text-pink-500">{errors.email}</div>}
                        </label>
                    </div>
                    <div className="mb-3">
                        <label className="block">
                            <span className="block font-light text-sm text-gray-500 mb-2">kata Sandi</span>
                            <input onChange={handleChange} type="password" className="px-4 py-2 rounded-lg border w-full" name="password" />
                            {errors.password && <div className="text-xs mt-1 font-light text-pink-500">{errors.password}</div>}
                            <Link href="lupa-katasandi" className="block text-sm mt-3 font-semibold text-gray-500">Lupa kata sandi?</Link>
                        </label>
                    </div>
                    <button className="btn-primary text-sm">Masuk</button>
                </form>
                <span className="block mt-5 pt-5 border-t text-gray-500 text-sm text-center">Belum punya akun? <Link href="daftar" className="text-cyan-500 font-semibold">Daftar Sekarang!</Link></span>
            </div>
        </div>
    )
}