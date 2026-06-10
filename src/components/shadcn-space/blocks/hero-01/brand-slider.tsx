"use client";
import { Marquee } from "@/components/shadcn-space/animations/marquee";
import { motion } from "motion/react";

function BrandSlider() {
  return (
    <section>
      <div className="py-6 md:py-10">
        <div className="mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
            className="flex flex-col gap-3"
          >
            <div className="flex justify-center text-center py-3 md:py-4 relative">
              <div className="flex items-center justify-center gap-4">
                <div className="hidden md:block h-0.5 w-40 bg-linear-to-l from-muted-foreground to-white dark:from-muted-foreground dark:to-transparent opacity-20" />
                <p className="text-sm font-normal sm:px-2 px-10 text-muted-foreground text-center">
                  Providing 100+ Digital Printing and Design Services to Help You Bring Your Ideas to Life
                </p>
                <div className="hidden md:block h-0.5 w-40 bg-linear-to-r from-muted-foreground to-white dark:from-muted-foreground dark:to-transparent opacity-20" />
              </div>
            </div>
            <div className="py-4">
              <Marquee pauseOnHover className="[--duration:80s] p-0">
                {[
                  "Stamps",
                  "Photocopy",
                  "Printing",
                  "Design",
                  "Binding",
                  "Laminating",
                  "Scanning",
                  "Business Cards",
                  "Flyers",
                  "Brochures",
                  "Posters",
                  "Stickers",
                  "Labels",
                  "Envelopes",
                  "Signage",
                  "Embroidery",
                  "Textile Printing",
                  "Booklets",
                  "Invitations",
                  "Banners",
                  "Large-format Printing",
                  "Digital Printing",
                  "Offset Printing",
                  "Photo Printing",
                  "UV Printing",
                  "Heat Transfer",
                  "Vehicle Wraps",
                  "Promotional Items",
                  "Packaging",
                  "Stationery",
                  "Exhibition Stands",
                ].map((service, index) => (
                  <div key={index} className="flex items-center">
                    <span className="px-6 py-2 mr-6 lg:mr-20 text-sm font-medium text-muted-foreground">
                      {service}
                    </span>
                  </div>
                ))}
              </Marquee>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default BrandSlider;
