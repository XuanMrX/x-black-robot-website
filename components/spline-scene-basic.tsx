"use client";

import { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowDownRight, Sparkles } from "lucide-react";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

export function SplineSceneBasic() {
  const [sceneLoaded, setSceneLoaded] = useState(false);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothRotateX = useSpring(rotateX, { stiffness: 170, damping: 24, mass: 0.25 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 170, damping: 24, mass: 0.25 });
  const smoothX = useSpring(x, { stiffness: 160, damping: 22, mass: 0.25 });
  const smoothY = useSpring(y, { stiffness: 160, damping: 22, mass: 0.25 });

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const pointerX = (event.clientX - rect.left) / rect.width - 0.5;
    const pointerY = (event.clientY - rect.top) / rect.height - 0.5;

    rotateY.set(pointerX * 7);
    rotateX.set(pointerY * -5);
    x.set(pointerX * 10);
    y.set(pointerY * 8);
  }

  function handlePointerLeave() {
    rotateX.set(0);
    rotateY.set(0);
    x.set(0);
    y.set(0);
  }

  return (
    <Card className="relative h-[100svh] w-full overflow-hidden rounded-none border-0 bg-black/[0.96]">
      <Spotlight className="z-0" fill="white" size={420} />

      <div className="absolute left-5 top-5 z-20 flex min-h-11 items-center gap-2 rounded-full border border-white/20 px-4 text-xs font-bold uppercase text-white/80 backdrop-blur">
        <Sparkles className="h-4 w-4" aria-hidden="true" />
        Visual lab
      </div>

      <div className="absolute right-5 top-5 z-20 flex min-h-11 items-center rounded-full border border-white/20 px-4 text-xs font-bold uppercase text-white/80 backdrop-blur">
        Follow
      </div>

      <div className="grid h-full grid-cols-1 md:grid-cols-[0.92fr_1.08fr]">
        <div className="relative z-10 flex flex-col justify-center px-6 py-24 md:px-12 lg:px-16">
          <h1 className="max-w-3xl bg-gradient-to-b from-neutral-50 to-neutral-500 bg-clip-text text-5xl font-black leading-[0.9] text-transparent md:text-7xl lg:text-8xl">
            AI First
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-neutral-300 md:text-lg">
            关注AI、个人成长、一人公司
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#works-gallery"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-5 text-sm font-bold text-black transition hover:-translate-y-0.5"
            >
              查看作品
              <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div
          className="relative min-h-[46svh] md:min-h-0"
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.16),transparent_58%)]" />
          <motion.div
            className="relative h-full w-full will-change-transform"
            style={{
              rotateX: smoothRotateX,
              rotateY: smoothRotateY,
              x: smoothX,
              y: smoothY,
              transformPerspective: 1200,
            }}
          >
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="h-full w-full"
              onLoad={() => setSceneLoaded(true)}
            />
          </motion.div>
          {!sceneLoaded ? (
            <p className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 text-xs font-semibold uppercase tracking-[0.24em] text-white/50">
              Loading 3D scene
            </p>
          ) : null}
        </div>
      </div>
    </Card>
  );
}
