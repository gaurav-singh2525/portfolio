import { Terminal } from "lucide-react";
import { siteConfig } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-8">
      <div className="section-container flex flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm text-white/40">
          <Terminal className="h-4 w-4 text-accent-cyan" />
          <span>
            © {year} {siteConfig.name}
          </span>
        </div>
        <p className="font-mono text-xs text-white/30">
          systems &gt; scripts
        </p>
      </div>
    </footer>
  );
}
