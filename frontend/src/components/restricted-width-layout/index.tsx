import { cn } from "@/lib/utils";

const RestrictedWidthLayout = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return <div className={cn("w-full max-w-7xl mx-auto", className)}>{children}</div>;
};


export default RestrictedWidthLayout;


