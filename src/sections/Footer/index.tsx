import { Instagram, Github, Mail, MessageCircle } from "lucide-react";
import { FooterLinkGroup } from "./FooterLinkGroup";
import { Logo } from "../../components/Logo";
import type { FooterProps } from "./types";

export const Footer = ({ branding, social, navigation, location, copyright, status }: FooterProps) => {
  return (
    <footer className="pt-28 pb-12 px-6 md:px-12 bg-fusa-black text-fusa-white relative z-10 border-t border-fusa-indigo/20 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-24 mb-32">
          <div className="flex flex-col gap-10">
            <div className="cursor-pointer inline-block">
              <Logo />
            </div>
            <div className="flex gap-6">
              {social.map((socialItem) => {
                const baseStyle = "w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/60 transition-all duration-300 hover:scale-110 cursor-pointer";
                
                if (socialItem === "Instagram") {
                  return (
                    <a key="instagram" href="https://www.instagram.com/fusa.labs?igsh=anJydmE0N2ZiMHh3" target="_blank" rel="noopener noreferrer" className="block">
                      <div className={`${baseStyle} hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:border-transparent hover:text-white`}><Instagram size={20} strokeWidth={1.5} /></div>
                    </a>
                  );
                }
                if (socialItem === "Github") {
                  return (
                    <a key="github" href="https://github.com/Silicon-Fusa" target="_blank" rel="noopener noreferrer" className="block">
                      <div className={`${baseStyle} hover:bg-white hover:text-black hover:border-transparent`}><Github size={20} strokeWidth={1.5} /></div>
                    </a>
                  );
                }
                if (socialItem === "WhatsApp") {
                  return (
                    <a key="whatsapp" href="https://wa.me/5493518799794?text=Hola%20Fusa%20Labs" target="_blank" rel="noopener noreferrer" className="block">
                      <div className={`${baseStyle} hover:bg-[#25D366] hover:text-white hover:border-[#25D366]`}><MessageCircle size={20} strokeWidth={1.5} /></div>
                    </a>
                  );
                }
                return (
                  <a key="mail" href="mailto:labsfusa@gmail.com" className="block">
                    <div className={`${baseStyle} hover:bg-fusa-indigo hover:text-white hover:border-fusa-indigo`}><Mail size={20} strokeWidth={1.5} /></div>
                  </a>
                );
              })}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <FooterLinkGroup title={navigation.title} links={navigation.links} />
            <div className="flex flex-col gap-8 md:text-right md:items-end">
              <span className="text-[10px] font-black uppercase tracking-widest opacity-30">
                {location.title}
              </span>
              <div className="text-sm font-bold opacity-60 leading-relaxed">
                {location.text.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i === 0 && <br />}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 border-t border-white/10 pt-12">
          <div className="text-[10px] font-inter tracking-[0.2em] text-white/40 uppercase">
            {copyright}
          </div>
          <div className="flex items-center gap-3">
            <span
              className={`w-2 h-2 rounded-full ${
                status.active ? "bg-green-500" : "bg-gray-500"
              }`}
            />
            <span className="text-[10px] font-black tracking-widest opacity-40 uppercase">
              {status.text}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};