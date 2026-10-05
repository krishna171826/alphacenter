
function Announcement() {
  return (
    <div className="bg-[#071d3d] px-3 py-2 text-center text-[10px] leading-4 text-white sm:px-4 sm:py-2 sm:text-[13px]">
      <div className="flex flex-col items-center justify-center gap-1 sm:flex-row sm:gap-0">
        <span>
          Les inscriptions sont ouvertes pour la nouvelle année scolaire
        </span>

        <a
          href="#contact"
          className="font-bold text-[#4fc3f7] hover:underline sm:ml-5"
        >
          Nous contacter →
        </a>
      </div>
    </div>
  );
}

export default Announcement;