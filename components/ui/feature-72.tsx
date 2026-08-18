"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import Image from "next/image";

interface Feature {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface Feature72Props {
  heading?: string;
  description?: string;
  linkUrl?: string;
  linkText?: string;
  features?: Feature[];
}

export const Feature72 = ({
  heading = "Powerful Features",
  description = "Discover the powerful features that make our platform stand out from the rest. Built with the latest technology and designed for maximum productivity.",
  linkUrl = "https://www.shadcnblocks.com",
  linkText = "Book a demo",
  features = [
    {
      id: "feature-1",
      title: "Modern Design",
      description:
        "Clean and intuitive interface built with the latest design principles. Optimized for the best user experience.",
      image: "/work-interactive-hero.jpg",
    },
    {
      id: "feature-2",
      title: "Responsive Layout",
      description:
        "Fully responsive design that works seamlessly across all devices and screen sizes. Perfect for any platform.",
      image: "/work-motion-gallery.jpg",
    },
    {
      id: "feature-3",
      title: "Easy Integration",
      description:
        "Simple integration process with comprehensive documentation and dedicated support team.",
      image: "/work-ai-visual-system.jpg",
    },
    {
      id: "feature-4",
      title: "Advanced Analytics",
      description:
        "Powerful analytics tools to help you understand your users and make data-driven decisions.",
      image: "/work-creator-home.jpg",
    },
  ],
}: Feature72Props) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [dragStartX, setDragStartX] = useState<number | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 28, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const closeLightbox = () => setActiveIndex(null);
  const showPrevious = () => {
    setActiveIndex((current) => {
      if (current === null) return current;
      return (current - 1 + features.length) % features.length;
    });
  };
  const showNext = () => {
    setActiveIndex((current) => {
      if (current === null) return current;
      return (current + 1) % features.length;
    });
  };

  useEffect(() => {
    if (activeIndex === null) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  const activeFeature = activeIndex === null ? null : features[activeIndex];

  return (
    <section id="works-gallery" className="bg-black py-24 text-white md:py-28">
      <div className="flex max-w-none flex-col gap-16 px-6 md:px-12 lg:px-16">
        <motion.div
          className="lg:max-w-xl"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
            Selected works
          </p>
          <h2 className="mb-4 text-4xl font-black leading-none tracking-tight md:text-6xl lg:mb-6">
            {heading}
          </h2>
          <p className="mb-8 max-w-lg text-neutral-400 lg:text-lg">{description}</p>
          <a
            href={linkUrl}
            className="group inline-flex min-h-11 items-center text-sm font-bold text-white md:text-base"
          >
            {linkText}
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
        <motion.div
          className="grid gap-5 md:grid-cols-2 lg:gap-7"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {features.map((feature, index) => (
            <motion.article
              key={feature.id}
              className="group flex flex-col overflow-clip rounded-lg border border-white/10 bg-white/[0.04] transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.07]"
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.015,
                transition: { duration: 0.22, ease: "easeOut" },
              }}
            >
              <button
                type="button"
                className="relative block aspect-[16/10] w-full cursor-zoom-in overflow-hidden text-left"
                onClick={() => setActiveIndex(features.findIndex((item) => item.id === feature.id))}
                aria-label={`放大查看 ${feature.title}`}
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover object-center grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  loading={index < 2 ? "eager" : "lazy"}
                  sizes="(min-width: 1024px) calc((100vw - 156px) / 2), (min-width: 768px) calc((100vw - 116px) / 2), calc(100vw - 48px)"
                  quality={72}
                />
              </button>
              <div className="px-6 py-7 md:px-8 md:py-9 lg:px-10">
                <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  {feature.title}
                </h3>
                <p className="text-neutral-400 lg:text-lg">{feature.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {activeFeature ? (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-black/92 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={`作品预览：${activeFeature.title}`}
            onClick={closeLightbox}
          >
            <button
              type="button"
              className="absolute right-4 top-4 z-20 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20"
              onClick={(event) => {
                event.stopPropagation();
                closeLightbox();
              }}
              aria-label="关闭预览"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <button
              type="button"
              className="absolute left-4 top-1/2 z-20 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              aria-label="上一张"
            >
              <ChevronLeft className="h-6 w-6" aria-hidden="true" />
            </button>

            <button
              type="button"
              className="absolute right-4 top-1/2 z-20 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="下一张"
            >
              <ChevronRight className="h-6 w-6" aria-hidden="true" />
            </button>

            <motion.div
              className="w-full max-w-6xl overflow-hidden rounded-lg border border-white/10 bg-neutral-950 shadow-2xl"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.24 }}
              onClick={(event) => event.stopPropagation()}
              onPointerDown={(event) => setDragStartX(event.clientX)}
              onPointerUp={(event) => {
                if (dragStartX === null) return;
                const delta = event.clientX - dragStartX;
                setDragStartX(null);
                if (Math.abs(delta) < 48) return;
                if (delta > 0) showPrevious();
                else showNext();
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature.id}
                  className="relative h-[min(72vh,760px)] w-full bg-black"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={activeFeature.image}
                    alt={activeFeature.title}
                    fill
                    className="object-contain"
                    sizes="min(100vw, 1152px)"
                    quality={82}
                    draggable={false}
                  />
                </motion.div>
              </AnimatePresence>
              <div className="flex items-start justify-between gap-4 border-t border-white/10 p-5">
                <div>
                  <h3 className="text-xl font-bold text-white">{activeFeature.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-400">
                    {activeFeature.description}
                  </p>
                </div>
                <p className="shrink-0 text-sm font-bold text-neutral-500">
                  {(activeIndex ?? 0) + 1} / {features.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
};
