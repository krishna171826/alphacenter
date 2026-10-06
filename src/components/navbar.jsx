function Navbar() {
    return (
        <header className="border-b border-[#edf2f7] bg-white">
            <nav className="mx-auto flex h-17 max-w-277.5 items-center justify-center px-6 lg:px-0">
                <a href="/" className="flex items-center gap-2">
                    <img src="src/assets/alphalogo.png" 
                    alt="Alpha Logo" 
                    className="h-12 w-12 object-contain"
                    />

                    <span className="font-['Manrope'] text-[13px] font-bold tracking-[0.03em] text-[#102447]">
                    ALPHA <span className="text-[#0969da]">CENTER</span>
                    </span>

                </a>
            </nav>
        </header>

    )
}

export default Navbar;