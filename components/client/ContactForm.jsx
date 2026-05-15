"use client";

import {useState} from "react";

const ContactForm = () =>{
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    })

    const [status, setStatus] = useState("")

    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()

        setStatus("loading")

        try{
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(form)
            })

            if(response.ok){
                setStatus("success")

                setForm({
                    name: "",
                    email: "",
                    message: ""
                })
            }else{
                setStatus("err")
            }
        }catch(err){
            setStatus("err")
        }
    }
    
    return(
        <div className="max-w-md mx-auto p-4 bg-neutral-900 rounded-lg shadow-md">
            <h2 className="text-2xl text-white font-bold mb-4">Contact Me</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name" 
                        name="name" 
                        value={form.name}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm"/>
                <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={form.email}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm" />
                <label className="block text-sm font-medium text-gray-700" htmlFor="message">Message:</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        value={form.message}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                    ></textarea>
                <button 
                    type="submit" 
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    {status === "loading" ? "Sending..." : "Send Message"}
                </button>
                {status === "success" && <p className="text-green-600 mt-2">Message sent successfully!</p>}
                {status === "err" && <p className="text-red-600 mt-2">Something went wrong.</p>}
            </form>
        </div>
    )
}

export default ContactForm