import { useState } from "react";

const Login = () => {

    const [showPassword, setShowPassword] = useState(true);

    return (
        <div className="login font-poppins text-white">
            <div className="h-screen w-full bg-[url(/src/Asset/TalassaBg.jpeg)] bg-cover bg-center">
                <div className="bg-black bg-opacity-50 grid md:grid-cols-2 h-full">
                    <div className="bg-gray-400 flex flex-col items-center justify-center [&>*]:my-2 rounded-r-xl h-full">
                        <div className="text-3xl">Welcome Back</div>
                        {/* <img src={require('../Asset/TalassaHello.png')} alt="" /> */}
                        <form action="" className="w-full max-w-[350px] px-3">
                            <div className="w-full border-b-2 border-b-white p-1 my-5 [&>*]:mx-2 text-sm">
                                <i class="fa-solid fa-envelope w-[20px] h-[16px]"></i>
                                <span className="border-2 border-white"></span>
                                <input type="text" className="outline-none bg-transparent placeholder-white" placeholder="Email" />
                            </div>
                            <div className="w-full border-b-2 border-b-white p-1 my-5 [&>*]:mx-2 text-sm">
                                {showPassword ? <i class="fa-solid fa-unlock w-[20px] h-[16px]" onClick={() => setShowPassword(!showPassword)}></i> :
                                    <i class="fa-solid fa-lock w-[20px] h-[16px]" onClick={() => setShowPassword(!showPassword)}></i>}
                                <span className="border-2 border-white"></span>
                                <input type={showPassword ? 'text' : 'password'} className="outline-none bg-transparent placeholder-white" placeholder="Password" />
                            </div>
                            <div className="w-full text-center rounded-xl p-1 my-4 font-bold text-lg bg-talassa-tertiary">
                                <button className="">Login</button>
                            </div>
                            <div className="w-full text-center border-2 border-talassa-tertiary rounded-xl p-1 my-4 font-bold text-lg text-talassa-tertiary">
                                <button className="">Exit</button>
                            </div>
                        </form>
                    </div>
                    <div className="flex justify-center items-center p-2">
                        {/* <img src={require('../Asset/Talassa.png')} alt="" /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;