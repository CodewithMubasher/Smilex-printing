"use client";

import { Badge } from "@/components/ui/badge";

const highlights = [
  "State-of-the-art digital & offset printing",
  "Expert graphic design team",
  "Fast turnaround with rush orders available",
  "Wide format & UV printing capabilities",
  "Custom branding & stationery solutions",
];

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <Badge variant={"outline"} className="px-3 py-1 h-auto text-sm w-fit">
          About Us
        </Badge>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight">
          Your Trusted Partner for{" "}
          <span className="text-[#0690D4]">Printing & Design</span>
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-lg">
          At Smilex, we bring your ideas to life with top-quality printing and creative design solutions. From business cards and wedding invitations to large-format banners and custom branding, we deliver precision, quality, and creativity in every project.
        </p>
      </div>

      <div className="flex flex-col items-start gap-2">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 text-xs sm:text-sm font-medium w-fit"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
