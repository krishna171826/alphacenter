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

                        {/* Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          <a
            href="#accueil"
            className="text-[11px] font-semibold text-[#5c6b83] transition hover:text-[#0969da]"
          >
            Accueil
          </a>

          <a
            href="#programmes"
            className="text-[11px] font-semibold text-[#5c6b83] transition hover:text-[#0969da]"
          >
            Programmes
          </a>

          <a
            href="#approche"
            className="text-[11px] font-semibold text-[#5c6b83] transition hover:text-[#0969da]"
          >
            Pourquoi Alpha
          </a>

          <a
            href="#resultats"
            className="text-[11px] font-semibold text-[#5c6b83] transition hover:text-[#0969da]"
          >
            Résultats
          </a>

          <a
            href="#contact"
            className="text-[11px] font-semibold text-[#5c6b83] transition hover:text-[#0969da]"
          >
            Contact
          </a>

          <a
            href="#contact"
            className="rounded-full bg-[#0969da] px-5 py-3 text-[11px] font-bold text-white shadow-[0_8px_20px_rgba(9,105,218,0.18)] transition hover:bg-[#0752ae]"
          >
            Nous contacter&nbsp; →
          </a>
        </div>

        {/* Mobile button */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dae5f2] text-[#102447] md:hidden"
        >
          ☰
        </button>
            </nav>
        </header>

    )
}

export default Navbar;