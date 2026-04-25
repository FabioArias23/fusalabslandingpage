import Image from "next/image";

export const Logo = () => (
  <div className="flex items-center gap-3 group">
    <Image
      src="/img/LOGOS/ISOTIPO1.svg"
      alt="FUSA LABS Logo"
      width={48}
      height={48}
      className="h-11 md:h-12 w-auto transition-transform duration-700 group-hover:scale-105"
      priority
    />
    <Image
      src="/img/LOGOS/WORDMARK 1.svg"
      alt="FUSA LABS"
      width={200}
      height={17}
      className="h-[14px] md:h-[17px] w-auto transition-opacity duration-500 group-hover:opacity-90"
      priority
    />
  </div>
);
