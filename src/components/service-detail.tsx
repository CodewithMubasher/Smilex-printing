"use client";
import { motion } from "motion/react";
import { ChevronRight, Check, Package, Clock, Zap } from "lucide-react";
import Link from "next/link";
import { servicesData } from "@/data/services";
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

interface ServiceDetailProps {
  slug: string;
}

export default function ServiceDetail({ slug }: ServiceDetailProps) {
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Service Not Found</h1>
          <Link href="/" className="text-blue-600 hover:text-blue-700">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const mainImage = serviceImages[service.image - 1];
  const galleryImages = service.gallery.map((idx) => serviceImages[idx - 1]);

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16 py-6 sm:py-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 text-sm text-muted-foreground"
        >
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">{service.name}</span>
        </motion.div>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16 py-8 sm:py-12 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Main Image */}
          <div className="relative h-96 sm:h-96 lg:h-full rounded-xl overflow-hidden shadow-xl">
            <img
              src={mainImage.src}
              alt={service.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-3">
                {service.name}
              </h1>
              <p className="text-lg text-blue-600 font-semibold mb-4">{service.role}</p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-semibold text-foreground">Turnaround</span>
                </div>
                <p className="text-sm text-muted-foreground">{service.turnaroundTime}</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Package className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-semibold text-foreground">Formats</span>
                </div>
                <p className="text-sm text-muted-foreground">{service.sizes.length} options</p>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.a
              href={`https://wa.me/923325156123?text=Hi! I'm interested in ${service.name} service`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors w-full sm:w-auto shadow-lg"
            >
              <Zap className="w-5 h-5" />
              Get Started
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16 py-12 sm:py-16 border-t border-border">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-foreground mb-8"
        >
          Gallery
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ scale: 1.08, y: -8 }}
              className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer border border-border/50"
            >
              <img
                src={img.src}
                alt={`${service.name} Gallery ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16 py-12 sm:py-16 border-t border-border">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-foreground mb-8"
        >
          Key Features
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {service.features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ x: 5, y: -3 }}
              className="flex items-start gap-4 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all"
            >
              <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span className="text-foreground font-medium">{feature}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Pricing */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16 py-12 sm:py-16 border-t border-border">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-foreground mb-8"
        >
          Pricing Plans
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {service.pricing.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.15)" }}
              className="p-6 border border-border rounded-xl shadow-sm hover:shadow-xl transition-all bg-gradient-to-br from-white to-blue-50 dark:from-slate-950 dark:to-blue-950/20"
            >
              <h3 className="text-xl font-bold text-foreground mb-2">{plan.plan}</h3>
              <p className="text-sm text-muted-foreground mb-4">{plan.details}</p>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-bold text-blue-600">{plan.price}</span>
                <span className="text-muted-foreground">PKR</span>
              </div>
              <button className="w-full px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg font-semibold transition-all hover:shadow-md">
                Select Plan
              </button>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Sizes & Specifications */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16 py-12 sm:py-16 border-t border-border">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-foreground mb-8"
        >
          Available Sizes & Formats
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.08 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {service.sizes.map((size, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ scale: 1.05, y: -3 }}
              className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-900 text-center hover:shadow-lg transition-all"
            >
              <p className="font-semibold text-foreground">{size}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Process & Comprehensive Details */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16 py-12 sm:py-16 border-t border-border">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-foreground mb-8"
        >
          How It Works
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Process */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Our Process</h3>
            <div className="space-y-4">
              {service.comprehensive.process.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex gap-4 items-start p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 shadow-md">
                    {idx + 1}
                  </div>
                  <p className="text-foreground pt-1">{step}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">About This Service</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {service.comprehensive.description}
            </p>
            <motion.div 
              whileHover={{ y: -3 }}
              className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-800 shadow-sm hover:shadow-md transition-all"
            >
              <p className="text-sm font-semibold text-foreground mb-2">Tools & Equipment:</p>
              <p className="text-sm text-muted-foreground">{service.comprehensive.tools}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16 py-12 sm:py-16 border-t border-border">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 sm:p-12 text-center text-white shadow-xl hover:shadow-2xl transition-all"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Our team is ready to help bring your project to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href={`https://wa.me/923325156123?text=Hi! I'm interested in ${service.name} service`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
            >
              Contact via WhatsApp
            </motion.a>
            <motion.a
              href="/#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Back to Services */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16 py-8 sm:py-12 border-t border-border">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors hover:gap-3"
          >
            <ChevronRight className="w-5 h-5 rotate-180" />
            Back to All Services
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
