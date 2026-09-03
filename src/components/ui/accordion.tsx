import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  value: string;
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

function AccordionItem({ value, trigger, children, className }: AccordionItemProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState<number | undefined>(undefined);

  React.useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [children]);

  return (
    <div className={cn("border-b border-slate-200", className)}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between py-4 text-left font-medium text-slate-900 hover:text-blue-brand transition-colors"
      >
        {trigger}
        <ChevronDown
          className={cn(
            "h-4 w-4 flex-shrink-0 transition-transform duration-300",
            isOpen ? "rotate-180" : ""
          )}
        />
      </button>
      <div
        style={{
          height: isOpen ? height : 0,
          overflow: "hidden",
          transition: "height 0.3s ease",
        }}
      >
        <div ref={contentRef} className="pb-4 text-sm text-slate-600 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

interface AccordionProps {
  type?: "single" | "multiple";
  defaultValue?: string | string[];
  className?: string;
  children: React.ReactNode;
}

function Accordion({
  type = "single",
  defaultValue,
  className,
  children,
}: AccordionProps) {
  return <div className={cn("", className)}>{children}</div>;
}

export { Accordion, AccordionItem };
