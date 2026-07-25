import { useState } from "react"

export default function Authentication() {
    const [isRegister, setIsRegister] = useState(false)
    const [error,setError] = useState("")
    const [loading, setLoading] = useState(false)
    
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        password:"",
        confirmpassword:""

    })

    const toggleMode = () => setIsRegister((prev) => !prev)

    return (
        <section className="min-h-screen flex flex-col">
            <nav>
                <div className="px-4 py-6"></div>
            </nav>
            <div className="flex flex-1 items-center justify-center">
                <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
                    <form className="text-center">
                        <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                            {isRegister ? "Sign Up" : "Sign In"}
                        </h1>

                        {isRegister && (
                            <div className="py-2 text-left">
                                <input
                                    type="text"
                                    className="bg-gray-100 border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-gray-700"
                                    placeholder="Full Name"
                                />
                            </div>
                        )}

                        <div className="py-2 text-left">
                            <input
                                type="email"
                                className="bg-gray-100 border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-gray-700"
                                placeholder="Email"
                            />
                        </div>

                        <div className="py-2 text-left">
                            <input
                                type="password"
                                className="bg-gray-100 border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-gray-700"
                                placeholder="Password"
                            />
                        </div>

                        {isRegister && (
                            <div className="py-2 text-left">
                                <input
                                    type="password"
                                    className="bg-gray-100 border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-gray-700"
                                    placeholder="Confirm Password"
                                />
                            </div>
                        )}

                        <div className="py-2">
                            <button
                                type="submit"
                                className="border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700"
                            >
                                {isRegister ? "Sign Up" : "Sign In"}
                            </button>
                        </div>
                    </form>

                    {!isRegister && (
                        <div className="text-center">
                            <a href="#" className="hover:underline">Forgot password?</a>
                        </div>
                    )}

                    {error&&(
                        <div className="text-red-400 mt-3">
                            {error}
                        </div>
                    )}

                    <div className="text-center mt-12">
                        <span>
                            {isRegister ? "Already have an account?" : "Don't have an account?"}
                        </span>{" "}
                        <span
                            onClick={toggleMode}
                            className="text-blue-900 hover:text-blue-400 hover:cursor-pointer"
                        >
                            {isRegister ? "Sign in" : "Create one"}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}