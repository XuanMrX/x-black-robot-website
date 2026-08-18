"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowDownRight, Sparkles } from "lucide-react";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

export function SplineSceneBasic() {
  const [sceneLoaded, setSceneLoaded] = useState(false);
  const [shouldLoadScene, setShouldLoadScene] = useState(false);
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

  useEffect(() => {
    const timeout = window.setTimeout(() => setShouldLoadScene(true), 1200);

    return () => window.clearTimeout(timeout);
  }, []);

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
              enabled={shouldLoadScene}
              onLoad={() => setSceneLoaded(true)}
              preview={<RobotPreview isLoading={shouldLoadScene && !sceneLoaded} />}
            />
          </motion.div>
          {shouldLoadScene && !sceneLoaded ? (
            <p className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 text-xs font-semibold uppercase tracking-[0.24em] text-white/50">
              Loading 3D in background
            </p>
          ) : null}
        </div>
      </div>
    </Card>
  );
}

function RobotPreview({ isLoading }: { isLoading: boolean }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.22),transparent_34%),radial-gradient(circle_at_70%_45%,rgba(255,255,255,0.08),transparent_42%)]" />
      <div className="absolute right-[10%] top-[12%] h-36 w-20 rotate-[18deg] rounded-full bg-[linear-gradient(120deg,rgba(255,255,255,0.42),rgba(28,28,28,0.95)_36%,rgba(0,0,0,1)_72%)] blur-[0.2px] shadow-[0_22px_80px_rgba(255,255,255,0.14)] md:h-52 md:w-28" />
      <div className="absolute right-[3%] top-[30%] h-20 w-28 rotate-[-18deg] rounded-[2rem] bg-[radial-gradient(circle_at_35%_28%,rgba(255,255,255,0.62),rgba(25,25,25,0.96)_38%,rgba(0,0,0,1)_70%)] shadow-[0_18px_72px_rgba(255,255,255,0.13)] md:h-28 md:w-40" />
      <div className="absolute right-[7%] top-[31%] flex rotate-[-18deg] gap-1.5 md:gap-2">
        {[0, 1, 2, 3].map((item) => (
          <span
            key={item}
            className="h-12 w-4 rounded-full bg-[linear-gradient(110deg,rgba(255,255,255,0.72),rgba(24,24,24,0.98)_46%,rgba(0,0,0,1))] shadow-[inset_0_0_10px_rgba(255,255,255,0.18)] md:h-16 md:w-5"
          />
        ))}
      </div>
      <div className="absolute inset-x-[8%] bottom-16 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-24 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/55 backdrop-blur">
        {isLoading ? <span className="h-2 w-2 rounded-full bg-white/70 animate-pulse" /> : null}
        <span>{isLoading ? "Preparing 3D" : "3D preview"}</span>
      </div>
    </div>
  );
}
