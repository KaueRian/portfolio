import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  children: React.ReactNode;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ id, className, children, ...props }, ref) => {
    return (
      <section
        id={id}
        ref={ref}
        className={cn("w-full py-16 md:py-24", className)}
        {...props}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = "Section";
