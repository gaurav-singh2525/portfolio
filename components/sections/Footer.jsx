import { Terminal } from "lucide-react";
import { siteConfig } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="section-container flex flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm text-text-tertiary">
          <Terminal className="h-4 w-4 text-text-tertiary" />
          <span>
            © {year} {siteConfig.name}
          </span>
        </div>
        <p className="text-xs text-text-tertiary">
          systems &gt; scripts
        </p>
      </div>
    </footer>
  );
}
