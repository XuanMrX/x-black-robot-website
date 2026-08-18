import { SplineSceneBasic } from "@/components/spline-scene-basic";
import { Feature72 } from "@/components/ui/feature-72";
import { BookOpen, Github, MessageCircle } from "lucide-react";
import Image from "next/image";

const portfolioFeatures = [
  {
    id: "interactive-hero",
    title: "Interactive 3D Hero",
    description: "用 Spline 和聚光交互做开屏，让访客第一眼先记住视觉气质。",
    image: "/work-interactive-hero.jpg",
  },
  {
    id: "motion-gallery",
    title: "Motion Gallery",
    description: "为精选作品做带节奏的展示卡片，适合承接项目案例、实验和 Demo。",
    image: "/work-motion-gallery.jpg",
  },
  {
    id: "visual-system",
    title: "AI Visual System",
    description: "把封面、配图和发布素材做成可复用的视觉系统，适合长期内容创作。",
    image: "/work-ai-visual-system.jpg",
  },
  {
    id: "creator-home",
    title: "Creator Home",
    description: "把作品、关注入口和订阅收口组合成一个轻量独立站主页。",
    image: "/work-creator-home.jpg",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SplineSceneBasic />
      <div id="next">
        <Feature72
          heading="作品橱窗"
          description="这里放 4 个最能代表你能力的作品。先让人看到完整视觉，再用短文案说明它解决了什么问题。"
          linkText="查看全部作品"
          linkUrl="#works-gallery"
          features={portfolioFeatures}
        />
      </div>
      <section className="group/about relative min-h-[88svh] overflow-hidden border-t border-white/10 bg-[#070708] px-6 py-24 font-[-apple-system,BlinkMacSystemFont,'SF_Pro_Display','PingFang_SC','Helvetica_Neue',Arial,sans-serif] text-white">
        <div className="absolute inset-x-0 bottom-0 h-64 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.1),transparent_62%)]" />
        <div className="relative mx-auto flex min-h-[62svh] max-w-6xl flex-col items-center justify-center text-center">
          <div className="relative mb-10 grid h-40 w-40 place-items-center rounded-full border border-white/10 bg-black shadow-[0_0_72px_rgba(255,255,255,0.08)]">
            <div className="absolute inset-7 rounded-full bg-[conic-gradient(from_210deg,#ff6464,#8b5cf6,#5eead4,#ff6464)] blur-sm" />
            <div className="absolute inset-[3.1rem] rounded-full bg-[radial-gradient(circle_at_45%_35%,rgba(255,255,255,0.55),rgba(255,255,255,0.08)_38%,rgba(0,0,0,0.6)_72%)]" />
            <span className="absolute bottom-6 left-10 h-2.5 w-2.5 rounded-full bg-[#ff6464] shadow-[0_0_16px_rgba(255,100,100,0.9)]" />
          </div>

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-neutral-500">
            About
          </p>
          <h2 className="text-2xl font-normal leading-tight md:text-4xl">
            我是小宣
          </h2>
          <p className="mt-5 text-2xl font-normal leading-tight md:text-4xl">
            关注AI、个人成长、一人公司
          </p>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-20 flex h-44 items-end justify-center px-4 pb-7">
          <div className="absolute inset-x-0 bottom-0 h-full" aria-hidden="true" />
          <div className="translate-y-16 opacity-0 transition duration-300 ease-out group-hover/about:translate-y-0 group-hover/about:opacity-100 focus-within:translate-y-0 focus-within:opacity-100">
            <div className="relative flex min-h-16 w-[min(360px,calc(100vw-32px))] items-center justify-center gap-2 rounded-full border border-white/10 bg-[#111215]/95 px-4 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <a
                href="https://github.com/XuanMrX"
                target="_blank"
                rel="noreferrer"
                className="grid h-11 w-11 place-items-center rounded-full text-white transition hover:bg-white/10 focus-visible:bg-white/10"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://www.xiaohongshu.com/user/profile/5faff23e0000000001004642"
                target="_blank"
                rel="noreferrer"
                className="grid h-11 min-w-11 place-items-center rounded-full px-3 text-xs font-medium text-white transition hover:bg-white/10 focus-visible:bg-white/10"
                aria-label="小红书"
              >
                RED
              </a>
              <a
                href="#works-gallery"
                className="grid h-11 w-11 place-items-center rounded-full text-white transition hover:bg-white/10 focus-visible:bg-white/10"
                aria-label="作品橱窗"
              >
                <BookOpen className="h-5 w-5" aria-hidden="true" />
              </a>
              <div className="group/wechat relative grid h-11 w-11 place-items-center rounded-full text-white transition hover:bg-white/10 focus-within:bg-white/10">
                <button type="button" className="grid h-full w-full place-items-center" aria-label="微信二维码">
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                </button>
                <div className="pointer-events-none absolute bottom-20 left-1/2 w-56 -translate-x-1/2 translate-y-3 rounded-xl border border-white/10 bg-neutral-950 p-3 opacity-0 shadow-2xl transition duration-200 group-hover/wechat:translate-y-0 group-hover/wechat:opacity-100 group-focus-within/wechat:translate-y-0 group-focus-within/wechat:opacity-100">
                  <Image
                    src="/wechat-xiaoxuan.jpg"
                    alt="小宣微信二维码"
                    width={448}
                    height={638}
                    className="w-full rounded-lg"
                    loading="lazy"
                    sizes="224px"
                  />
                  <p className="mt-2 text-center text-xs text-neutral-400">微信扫码添加</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
