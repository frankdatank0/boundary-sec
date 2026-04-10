interface SectionLabelProps {
  number?: string;
  label: string;
  className?: string;
}

export default function SectionLabel({ number, label, className = "" }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 mb-4 ${className}`}>
      {number && (
        <span className="text-xs font-semibold tracking-widest text-primary font-sans">
          {number}
        </span>
      )}
      <div className="h-px w-8 bg-primary/40" />
      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground font-sans">
        {label}
      </span>
    </div>
  );
}
