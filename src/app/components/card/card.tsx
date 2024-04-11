export default function Card() {
    return (

        <div className=" text-center flex min-h-full flex-col justify-center">
            <div className=" max-w-[400px] px-3  items-center rounded-xl shadow-xl border-white border-2 bg-white font-light ">
                <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <div className="">
                                <input id="email" name="email" type="email" placeholder="Email address or phone number"
                                    required className=" w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset
                                     ring-gray-300  placeholder:text-gray-400 pl-4 placeholder:text-lg text-lg focus:ring-2 focus:ring-inset
                                      focus:ring-blue-400 inline-block " />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">

                            </div>
                            <div className="">
                                <input id="password" name="password" type="password" placeholder="Password"
                                    required className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset
                                ring-gray-300 placeholder:text-gray-400 pl-4 placeholder:text-lg text-lg focus:ring-2 focus:ring-inset
                                 focus:ring-blue-400 show-app"/>
                               

                                </div>

                            </div>

                            <div>
                                <button type="submit" className="flex w-full justify-center rounded-md bg-[#0866FF] px-3 py-3 text-xl font-semibold leading-6 text-white shadow-sm
                        hover:bg-[#1776F3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                        focus-visible:outline-[#0866FF]">Log in</button>
                            </div>
                            <div className="text-sm mt-2">
                                <a href="#" className=" text-center font-light text-[#0866FF] hover:text-blue-600 hover:underline tracking-wide">Forgotten password?</a>
                            </div>
                            <div>
                                <button type="submit" className=" mb-5 justify-center rounded-md 
                         bg-[#42B72A] hover:bg-[#36A420] px-8 py-3 text-base font-semibold text-white">Create new account</button>
                            </div>
                    </form>

                </div>

            </div>
            <div className="mt-5 text-center text-sm text-gray-500">

                <a href="#" className=" text-black hover:underline font-semibold">Create a page</a>
                <span className="text-black"> for a celebrity, brand or business</span>

            </div>
        </div>
    )
}