import React from "react";
import Link from "next/link";
import { TeamMember } from "@/types";
import {
  InstagramIcon,
  LinkedinIcon,
  GithubIcon,
  WhatsappIcon,
} from "@/components/ui/social-icons";

export interface SocialLinksProps {
  member: TeamMember;
}

export function SocialLinks({ member }: SocialLinksProps) {
  return (
    <>
      {/* Social Icons — horizontal on mobile, vertical on md+ */}
      <div className="flex md:hidden items-center justify-center gap-6">
        <Link
          href={member.instagram || "https://www.instagram.com/fusa.labs"}
          className="text-[#1C058E]/60 hover:text-[#1C058E] dark:text-white/60 dark:hover:text-white transition-all duration-300 hover:scale-110"
          target="_blank"
        >
          <InstagramIcon className="w-5 h-5" />
        </Link>
        <Link
          href={member.linkedin || "https://www.linkedin.com/company/fusa-labs"}
          className="text-[#1C058E]/60 hover:text-[#1C058E] dark:text-white/60 dark:hover:text-white transition-all duration-300 hover:scale-110"
          target="_blank"
        >
          <LinkedinIcon className="w-5 h-5" />
        </Link>
        <Link
          href={member.github || "https://github.com/Fusa-Labs"}
          className="text-[#1C058E]/60 hover:text-[#1C058E] dark:text-white/60 dark:hover:text-white transition-all duration-300 hover:scale-110"
          target="_blank"
        >
          <GithubIcon className="w-5 h-5" />
        </Link>
        <Link
          href={
            member.phone
              ? `https://wa.me/${member.phone.replace(/[\+\s]/g, "")}`
              : "https://wa.me/5493518799794"
          }
          className="text-[#1C058E]/60 hover:text-[#1C058E] dark:text-white/60 dark:hover:text-white transition-all duration-300 hover:scale-110"
          target="_blank"
        >
          <WhatsappIcon className="w-5 h-5" />
        </Link>
      </div>

      {/* Social Icons Vertical — desktop only */}
      <div className="hidden md:flex items-center gap-8 h-56">
        <div className="w-[1px] h-full bg-[#1C058E] dark:bg-white/40 relative">
          <div className="absolute inset-y-0 -left-[1.5px] w-[4px] bg-white/20 blur-[2px] hidden dark:block"></div>
        </div>
        <div className="flex flex-col justify-between h-full py-4">
          <Link
            href={member.instagram || "https://www.instagram.com/fusa.labs"}
            className="text-[#1C058E]/60 hover:text-[#1C058E] dark:text-white/60 dark:hover:text-white transition-all duration-300 hover:scale-110"
            target="_blank"
          >
            <InstagramIcon className="w-6 h-6" />
          </Link>
          <Link
            href={member.linkedin || "https://www.linkedin.com/company/fusa-labs"}
            className="text-[#1C058E]/60 hover:text-[#1C058E] dark:text-white/60 dark:hover:text-white transition-all duration-300 hover:scale-110"
            target="_blank"
          >
            <LinkedinIcon className="w-6 h-6" />
          </Link>
          <Link
            href={member.github || "https://github.com/Fusa-Labs"}
            className="text-[#1C058E]/60 hover:text-[#1C058E] dark:text-white/60 dark:hover:text-white transition-all duration-300 hover:scale-110"
            target="_blank"
          >
            <GithubIcon className="w-6 h-6" />
          </Link>
          <Link
            href={
              member.phone
                ? `https://wa.me/${member.phone.replace(/[\+\s]/g, "")}`
                : "https://wa.me/5493518799794"
            }
            className="text-[#1C058E]/60 hover:text-[#1C058E] dark:text-white/60 dark:hover:text-white transition-all duration-300 hover:scale-110"
            target="_blank"
          >
            <WhatsappIcon className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </>
  );
}
