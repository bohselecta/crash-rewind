import Image from "next/image";

export function BrandMark() {
  return (
    <div className="flex items-center gap-2">
      <Image 
        src="/brand/crashrewind-128.png" 
        alt="Crash Rewind" 
        width={28} 
        height={28}
        className="w-7 h-7"
      />
      <span className="font-semibold tracking-tight">
        <span className="text-brand-warm">Crash</span>{" "}
        <span className="text-brand-primary">Rewind</span>
      </span>
    </div>
  );
}
