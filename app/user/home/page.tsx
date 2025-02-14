export default function() {
    return (
        <div className="bg-blue-800 h-screen w-screen flex flex-col justify-center items-center text-white">
            <h1 className="text-3xl font-sans-BOLD-ITALIC mb-6">USER</h1>
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition-all mb-4">
                Pay Someone
            </button>
            <button className="bg-purple-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-600 transition-all">
                History
            </button>
        </div>
    );
}
