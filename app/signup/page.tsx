export default function() {
    return(
        <div className="bg-slate-700 h-screen w-screen flex justify-center items-center">
            <div className="min-h-screen w-full flex justify-center items-center p-8 py-8">
            <div className=" rounded-md flex flex-col bg-white h-[50vh] items-center justify-between text-bolded text-black w-1/3 p-4" >
                <div className="text-2xl font-bold">
                    SignUp
                </div>
                <input type = "text" placeholder="email" className="border-2 rounded-md h-1/6 w-1/2 p-4"></input>
                <input type = "name" placeholder="name" className="border-2 rounded-md h-1/6 w-1/2 p-4"></input>
                <input type = "phone" placeholder="phone" className="border-2 rounded-md h-1/6 w-1/2 p-4"></input>
                <input type = "password" placeholder="password" className="border-2 rounded-md w-1/2 h-1/6 p-4"></input>
                <button className="bg-blue-500 w-1/3 rounded-md h-1/6">Sign in</button>
            </div>
            </div>

        </div>
    )
}
