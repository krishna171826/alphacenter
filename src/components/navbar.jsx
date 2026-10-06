import { useState } from "react";
import alphalogo from "../assets/alphalogo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="border-b border-[#edf2f7] bg-white">
      {/* Main navbar */}
      <nav className="mx-auto flex h-17 max-w-277.5 items-center justify-between px-6 lg:px-0">
        
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img
            src={alphalogo}
            alt="Alpha Logo"
            className="h-12 w-12 object-contain"
          />

          <span className="pr-10 font-['Manrope'] text-[13px] font-bold tracking-[0.03em] text-[#102447]">
            ALPHA{" "}
            <span className="text-[#0969da]">
              CENTER
            </span>
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-10 md:flex">
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
            Nous contacter →
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dae5f2] text-[#102447] md:hidden"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="border-t border-[#edf2f7] bg-white px-6 py-5 md:hidden">
          <div className="mx-auto flex max-w-277.5 flex-col gap-1">
            
            <a
              href="#accueil"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm font-semibold text-[#5c6b83] transition hover:bg-[#f5f9ff] hover:text-[#0969da]"
            >
              Accueil
            </a>

            <a
              href="#programmes"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm font-semibold text-[#5c6b83] transition hover:bg-[#f5f9ff] hover:text-[#0969da]"
            >
              Programmes
            </a>

            <a
              href="#approche"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm font-semibold text-[#5c6b83] transition hover:bg-[#f5f9ff] hover:text-[#0969da]"
            >
              Pourquoi Alpha
            </a>

            <a
              href="#resultats"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm font-semibold text-[#5c6b83] transition hover:bg-[#f5f9ff] hover:text-[#0969da]"
            >
              Résultats
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm font-semibold text-[#5c6b83] transition hover:bg-[#f5f9ff] hover:text-[#0969da]"
            >
              Contact
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-3 rounded-full bg-[#0969da] px-5 py-3 text-center text-sm font-bold text-white shadow-[0_8px_20px_rgba(9,105,218,0.18)] transition hover:bg-[#0752ae]"
            >
              Nous contacter →
            </a>

          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
