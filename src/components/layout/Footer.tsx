import * as React from "react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border py-8 mt-auto">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground font-mono">
          &copy; {currentYear} Kauê Rian. Todos os direitos reservados.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/KauêRian"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/Kauêrian"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a
            href="mailto:seu-email@exemplo.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
