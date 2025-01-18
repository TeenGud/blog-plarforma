export const HeaderUnauthorized = () => {
    return (
        <header className="p-4 flex justify-between items-center h-[80px] bg-white">
            <h1 className="text-xl">Realworld Blog</h1>
            <div>
                <button className="w-[110px] h-[50px] hover:text-purple-500 transition-colors text-xl">Sign In</button>
                <button className="w-[110px] h-[50px] hover:text-purple-500 transition-colors border-green-400 border-2 text-green-400 text-xl">Sign Up</button>
            </div>
        </header>
    )
}