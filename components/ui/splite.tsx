"use client";

import React, { Suspense, lazy, useEffect, useState } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  scene: string;
  className?: string;
  enabled?: boolean;
  onLoad?: () => void;
  preview?: React.ReactNode;
}

class SplineErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_52%)]">
          <div className="max-w-sm px-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-neutral-400">
              3D preview
            </p>
            <p className="mt-4 text-lg font-bold text-white">
              当前环境无法创建 WebGL 场景。
            </p>
            <p className="mt-3 text-sm leading-6 text-neutral-400">
              在支持 WebGL 的浏览器中打开时会显示 Spline 互动模型。
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function SplineUnavailable() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_52%)]">
      <div className="max-w-sm px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-neutral-400">
          3D preview
        </p>
        <p className="mt-4 text-lg font-bold text-white">当前环境无法创建 WebGL 场景。</p>
        <p className="mt-3 text-sm leading-6 text-neutral-400">
          在支持 WebGL 的浏览器中打开时会显示 Spline 互动模型。
        </p>
      </div>
    </div>
  );
}

export function SplineScene({
  scene,
  className,
  enabled = true,
  onLoad,
  preview,
}: SplineSceneProps) {
  const [webglSupported, setWebglSupported] = useState<boolean | null>(null);
  const [sceneLoaded, setSceneLoaded] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const canvas = document.createElement("canvas");
    const context =
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");
    setWebglSupported(Boolean(context));
  }, [enabled]);

  if (!enabled) {
    return preview ? <>{preview}</> : null;
  }

  if (webglSupported === false) {
    return <SplineUnavailable />;
  }

  return (
    <SplineErrorBoundary>
      <div className="relative h-full w-full">
        {!sceneLoaded ? (
          <div className="absolute inset-0 z-10 bg-black">
            {preview ?? (
              <div className="flex h-full w-full items-center justify-center">
                <span className="loader" />
              </div>
            )}
          </div>
        ) : null}
        <Suspense
          fallback={
            <div className="flex h-full w-full items-center justify-center">
              <span className="loader" />
            </div>
          }
        >
          <Spline
            scene={scene}
            className={className}
            onLoad={() => {
              setSceneLoaded(true);
              onLoad?.();
            }}
          />
        </Suspense>
      </div>
    </SplineErrorBoundary>
  );
}
