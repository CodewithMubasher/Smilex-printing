"use client";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";
import { motion } from "motion/react";
import img1 from "@/assets/img1.png";
import img2 from "@/assets/img2.png";
import img3 from "@/assets/img3.png";
import img4 from "@/assets/img4.png";
import img5 from "@/assets/img5.png";
import img6 from "@/assets/img6.png";
import img7 from "@/assets/img7.png";
import img8 from "@/assets/img8.png";
import img9 from "@/assets/img9.png";
import img10 from "@/assets/img10.png";
import img11 from "@/assets/img11.png";
import img12 from "@/assets/img12.png";

const serviceImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

const InstagramIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip-instagram-team02)">
      <path d="M12 2.162c3.204 0 3.584.012 4.849.07 1.17.054 1.805.249 2.228.413.56.218.96.478 1.38.898s.68.82.898 1.38c.164.423.36 1.058.413 2.228.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.053 1.17-.249 1.805-.413 2.228a3.7 3.7 0 0 1-.898 1.38c-.42.42-.82.68-1.38.898-.423.164-1.058.36-2.228.413-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.17-.053-1.805-.249-2.228-.413a3.7 3.7 0 0 1-1.38-.898c-.42-.42-.68-.82-.898-1.38-.164-.423-.36-1.058-.413-2.228-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.054-1.17.249-1.805.413-2.228.218-.56.478-.96.898-1.38s.82-.68 1.38-.898c.423-.164 1.058-.36 2.228-.413 1.265-.058 1.645-.07 4.849-.07M12 0C8.741 0 8.332.014 7.052.072 5.775.131 4.902.333 4.14.63a5.9 5.9 0 0 0-2.126 1.384A5.9 5.9 0 0 0 .63 4.14c-.297.763-.5 1.635-.558 2.912C.014 8.332 0 8.741 0 12s.014 3.668.072 4.948c.059 1.277.261 2.15.558 2.912.307.79.717 1.459 1.384 2.126A5.9 5.9 0 0 0 4.14 23.37c.763.297 1.635.5 2.912.558C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.277-.059 2.15-.261 2.912-.558a5.9 5.9 0 0 0 2.126-1.384 5.9 5.9 0 0 0 1.384-2.126c.297-.763.5-1.635.558-2.912.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.059-1.277-.261-2.15-.558-2.912a5.9 5.9 0 0 0-1.384-2.126A5.9 5.9 0 0 0 19.86.63c-.763-.297-1.635-.5-2.912-.558C15.668.014 15.259 0 12 0m0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324M12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8m7.846-10.406a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0" fill="currentColor" />
    </g>
    <defs>
      <clipPath id="clip-instagram-team02">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip-linkedin-team02)">
      <path d="M13.633 13.633h-2.37V9.92c0-.885-.017-2.025-1.234-2.025-1.235 0-1.424.965-1.424 1.96v3.778h-2.37V5.998H8.51v1.043h.031a2.5 2.5 0 0 1 2.246-1.233c2.403 0 2.846 1.58 2.846 3.637zM3.56 4.954a1.376 1.376 0 1 1 0-2.751 1.376 1.376 0 0 1 0 2.751m1.185 8.679H2.372V5.998h2.373zM14.815.001H1.18A1.17 1.17 0 0 0 0 1.154v13.691A1.17 1.17 0 0 0 1.18 16h13.635A1.17 1.17 0 0 0 16 14.845V1.153A1.17 1.17 0 0 0 14.815 0" fill="currentColor" />
    </g>
    <defs>
      <clipPath id="clip-linkedin-team02">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const DribbbleIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip-dribbble-team02)">
      <path d="M15.942 4.242C12.683 7.617 8.333 8.7 1.874 9.117m16.25 1.583c-5.517-1.175-10.117.833-13.65 5.267M7.133 2.292c3.642 5 5 7.85 6.667 14.766M18.333 10a8.333 8.333 0 1 1-16.666 0 8.333 8.333 0 0 1 16.666 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <clipPath id="clip-dribbble-team02">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

type team = {
  name: string;
  role: string;
  image: string;
  socials: {
    icon: React.ReactNode;
    link: string;
  }[];
}[];

const teamData: team = [
  {
    name: "Graphic Designing",
    role: "Logos, Branding & Digital Art",
    image: serviceImages[0].src,
    socials: [
      { icon: <InstagramIcon size={16} />, link: "https://www.instagram.com/smilex_pk/" },
      { icon: <DribbbleIcon size={16} />, link: "https://www.instagram.com/smilex_pk/" },
      { icon: <LinkedinIcon size={16} />, link: "https://www.instagram.com/smilex_pk/" },
    ],
  },
  {
    name: "Standies & Brochures",
    role: "Custom Standees & Brochure Design",
    image: serviceImages[1].src,
    socials: [
      { icon: <InstagramIcon size={16} />, link: "https://www.instagram.com/smilex_pk/" },
      { icon: <DribbbleIcon size={16} />, link: "https://www.instagram.com/smilex_pk/" },
      { icon: <LinkedinIcon size={16} />, link: "https://www.instagram.com/smilex_pk/" },
    ],
  },
  {
    name: "Wedding Cards",
    role: "Elegant Invitations & Stationery",
    image: serviceImages[2].src,
    socials: [
      { icon: <InstagramIcon size={16} />, link: "https://www.instagram.com/smilex_pk/" },
      { icon: <DribbbleIcon size={16} />, link: "https://www.instagram.com/smilex_pk/" },
      { icon: <LinkedinIcon size={16} />, link: "https://www.instagram.com/smilex_pk/" },
    ],
  },
  {
    name: "Photocopy",
    role: "High-Speed B/W & Color Copies",
    image: serviceImages[3].src,
    socials: [
      { icon: <InstagramIcon size={16} />, link: "https://www.instagram.com/smilex_pk/" },
      { icon: <DribbbleIcon size={16} />, link: "https://www.instagram.com/smilex_pk/" },
      { icon: <LinkedinIcon size={16} />, link: "https://www.instagram.com/smilex_pk/" },
    ],
  },
  {
    name: "Business Cards",
    role: "Premium Business Card Printing",
    image: serviceImages[4].src,
    socials: [
      { icon: <InstagramIcon size={16} />, link: "https://www.instagram.com/smilex_pk/" },
      { icon: <DribbbleIcon size={16} />, link: "https://www.instagram.com/smilex_pk/" },
      { icon: <LinkedinIcon size={16} />, link: "https://www.instagram.com/smilex_pk/" },
    ],
  },
  {
    name: "Digital Stamps",
    role: "Custom Digital Stamp Design",
    image: serviceImages[5].src,
    socials: [
      { icon: <InstagramIcon size={16} />, link: "https://www.instagram.com/smilex_pk/" },
      { icon: <DribbbleIcon size={16} />, link: "https://www.instagram.com/smilex_pk/" },
      { icon: <LinkedinIcon size={16} />, link: "https://www.instagram.com/smilex_pk/" },
    ],
  },
  {
    name: "Photo Framing",
    role: "Custom Frames & Preserve Memories",
    image: serviceImages[6].src,
    socials: [
      { icon: <InstagramIcon size={16} />, link: "https://www.instagram.com/smilex_pk/" },
      { icon: <DribbbleIcon size={16} />, link: "https://www.instagram.com/smilex_pk/" },
      { icon: <LinkedinIcon size={16} />, link: "https://www.instagram.com/smilex_pk/" },
    ],
  },
  {
    name: "VCR to USB",
    role: "Convert VCR Tapes to Digital USB",
    image: serviceImages[7].src,
    socials: [
      { icon: <InstagramIcon size={16} />, link: "https://www.instagram.com/smilex_pk/" },
      { icon: <DribbbleIcon size={16} />, link: "https://www.instagram.com/smilex_pk/" },
      { icon: <LinkedinIcon size={16} />, link: "https://www.instagram.com/smilex_pk/" },
    ],
  },
  {
    name: "Photo Studio",
    role: "Professional Photo Shooting",
    image: serviceImages[8].src,
    socials: [
      { icon: <InstagramIcon size={16} />, link: "https://www.instagram.com/smilex_pk/" },
      { icon: <DribbbleIcon size={16} />, link: "https://www.instagram.com/smilex_pk/" },
      { icon: <LinkedinIcon size={16} />, link: "https://www.instagram.com/smilex_pk/" },
    ],
  },
  {
    name: "Book Binding",
    role: "Professional Book Binding Service",
    image: serviceImages[9].src,
    socials: [
      { icon: <InstagramIcon size={16} />, link: "https://www.instagram.com/smilex_pk/" },
      { icon: <DribbbleIcon size={16} />, link: "https://www.instagram.com/smilex_pk/" },
      { icon: <LinkedinIcon size={16} />, link: "https://www.instagram.com/smilex_pk/" },
    ],
  },
  {
    name: "Panaflex Printing",
    role: "High-Quality Panaflex & Flex Printing",
    image: serviceImages[10].src,
    socials: [
      { icon: <InstagramIcon size={16} />, link: "https://www.instagram.com/smilex_pk/" },
      { icon: <DribbbleIcon size={16} />, link: "https://www.instagram.com/smilex_pk/" },
      { icon: <LinkedinIcon size={16} />, link: "https://www.instagram.com/smilex_pk/" },
    ],
  },
  {
    name: "Visa & Passport Pictures",
    role: "Professional Visa & Passport Photos",
    image: serviceImages[11].src,
    socials: [
      { icon: <InstagramIcon size={16} />, link: "https://www.instagram.com/smilex_pk/" },
      { icon: <DribbbleIcon size={16} />, link: "https://www.instagram.com/smilex_pk/" },
      { icon: <LinkedinIcon size={16} />, link: "https://www.instagram.com/smilex_pk/" },
    ],
  },
];

const Team = () => {
  return (
    <section>
      <div className="lg:py-20 sm:py-16 py-8">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 xl:px-16">
          <div className="flex flex-col items-center justify-center gap-16">
            <motion.div
              initial={{ y: -40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="max-w-xl mx-auto flex flex-col items-center justify-center text-center gap-4"
            >
              <Badge variant={"outline"} className="px-3 py-1 h-auto text-sm sm:text-base">
                Services
              </Badge>
              <div className="flex flex-col items-center justify-center gap-3">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-foreground">
                  Our Services
                </h2>
                <p className="text-sm sm:text-base font-normal text-muted-foreground max-w-xl">
                  From digital and offset printing to custom design, branding, and large-format production — we deliver quality solutions tailored to your business needs.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1.5 sm:gap-x-3 sm:gap-y-3">
                <div className="flex items-center gap-1 sm:gap-2 px-2 py-0.5 sm:px-5 sm:py-1.5 rounded-full bg-blue-500/10 text-blue-600 text-[10px] sm:text-base font-medium">
                  Best Quality
                </div>
                <div className="flex items-center gap-1 sm:gap-2 px-2 py-0.5 sm:px-5 sm:py-1.5 rounded-full bg-teal-400/10 text-teal-600 text-[10px] sm:text-base font-medium">
                  Competitive Rates
                </div>
                <div className="flex items-center gap-1 sm:gap-2 px-2 py-0.5 sm:px-5 sm:py-1.5 rounded-full bg-orange-400/10 text-orange-500 text-[10px] sm:text-base font-medium">
                  Fast Services
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 w-full">
              {teamData?.map((value, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.1,
                      ease: [0.21, 0.47, 0.32, 0.98],
                    }}
                    className="group flex flex-col items-start gap-4 border border-border/60 hover:border-border rounded-xl p-3 sm:p-4 lg:p-5 bg-background transition-all duration-300 hover:shadow-sm"
                  >
                    <div className="relative w-full h-32 sm:h-48 lg:h-56 overflow-hidden rounded-lg">
                      <img
                        src={value.image}
                        alt={value.name}
                        height={190}
                        width={270}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-3">
                        <Heart className="w-5 h-5 text-white fill-white drop-shadow-sm" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-0.5 px-1 pb-1 sm:px-2">
                      <h3 className="text-base sm:text-lg font-semibold text-foreground">
                        {value.name}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        {value.role}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

