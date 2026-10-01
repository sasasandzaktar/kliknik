"use client";

// Rođendanski uvod: crni ekran s gumbom → vatromet → pretapanje u stranicu.
// Vatromet je čisti CSS (transition), bez biblioteka: svaka eksplozija prolazi
// kroz faze 0 mirovanje → 1 raketa leti → 2 prasak → 3 gašenje.

import { useCallback, useEffect, useRef, useState } from "react";
import { Arrow } from "./icons";

export const REPLAY_EVENT = "kliknik:vatromet";

type Phase = "intro" | "boom" | "done";

const BURSTS = [
  { x: 24, y: 30 }, { x: 72, y: 24 }, { x: 48, y: 18 }, { x: 84, y: 46 },
  { x: 14, y: 52 }, { x: 60, y: 40 }, { x: 34, y: 62 }, { x: 78, y: 68 },
];

const COLORS = ["#ffffff", "#ffffff", "#d4d4d4", "#9a9a9a"];

// Iskre su determinističke, pa server i preglednik renderaju isto.
const SPARKS = BURSTS.map((_, k) => {
  const n = k % 2 ? 24 : 32;
  return Array.from({ length: n }, (_, i) => ({
    a: Math.round((i * 360) / n + k * 7),
    d: 120 + ((i * 37 + k * 53) % 80),
    color: COLORS[(i + k) % 4],
  }));
});

const IDLE = BURSTS.map(() => 0);

export default function Celebration() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [stages, setStages] = useState<number[]>(IDLE);
  const [titleOn, setTitleOn] = useState(false);
  const [fading, setFading] = useState(false);
  const [scale, setScale] = useState(1);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };
  const later = (ms: number, fn: () => void) => {
    timers.current.push(setTimeout(fn, ms));
  };
  const setStage = (k: number, v: number) =>
    setStages((s) => s.map((x, i) => (i === k ? v : x)));

  const launch = useCallback(() => {
    clearTimers();
    setScale(Math.max(0.55, Math.min(1, window.innerWidth / 1200)));
    setPhase("boom");
    setStages(IDLE);
    setTitleOn(false);
    setFading(false);
    window.scrollTo({ top: 0 });

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      // Bez letećih iskri: samo natpis, pa stranica.
      later(50, () => setTitleOn(true));
      later(2200, () => setFading(true));
      later(3200, () => setPhase("done"));
      return;
    }

    BURSTS.forEach((_, k) => {
      const t0 = 80 + k * 360;
      later(t0, () => setStage(k, 1));
      later(t0 + 550, () => setStage(k, 2));
      later(t0 + 1450, () => setStage(k, 3));
    });
    later(700, () => setTitleOn(true));
    later(4500, () => setFading(true));
    later(5500, () => setPhase("done"));
  }, []);

  // Gumb "Ponovi vatromet" na stranici javlja se preko eventa.
  useEffect(() => {
    window.addEventListener(REPLAY_EVENT, launch);
    return () => {
      window.removeEventListener(REPLAY_EVENT, launch);
      clearTimers();
    };
  }, [launch]);

  // Dok je uvod preko ekrana, stranica ispod se ne skrola.
  useEffect(() => {
    document.body.style.overflow = phase === "done" ? "" : "hidden";
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden bg-ink text-white"
      style={{
        opacity: fading ? 0 : 1,
        pointerEvents: fading ? "none" : "auto",
        transition: "opacity 1000ms ease",
      }}
    >
      {phase === "intro" ? (
        <div className="flex h-full flex-col justify-between gap-6 p-[clamp(20px,4vw,48px)]">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="wide text-[22px] font-extrabold tracking-[-0.02em]">KLIKNIK</div>
            <div className="font-mono text-xs uppercase tracking-[0.08em] text-neutral-400">
              Rođendansko izdanje
            </div>
          </div>

          <div className="flex flex-col items-center gap-7 text-center">
            <p className="font-mono text-[13px] uppercase tracking-[0.08em] text-neutral-400">
              Jedan klik. Samo jedan.
            </p>
            <button
              type="button"
              onClick={launch}
              className="flex cursor-pointer flex-col items-center gap-2.5 rounded-full bg-white px-[clamp(32px,6vw,72px)] py-[clamp(24px,3.5vw,40px)] text-ink shadow-[0_0_0_10px_rgba(255,255,255,0.08),0_0_0_22px_rgba(255,255,255,0.04)] transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-[28px] focus-visible:outline-white active:scale-[0.98]"
            >
              <span className="wide text-[clamp(26px,4.4vw,56px)] leading-none font-extrabold tracking-[-0.03em]">
                Sretan rođendan!
              </span>
              <span className="flex items-center gap-2 font-mono text-[13px] uppercase tracking-[0.12em]">
                Pritisni
                <Arrow />
              </span>
            </button>
          </div>

          <div className="flex flex-wrap justify-between gap-3 font-mono text-xs text-neutral-500">
            <span>Za Nikolu · 30 godina</span>
            <span>kliknik.hr</span>
          </div>
        </div>
      ) : (
        <div className="absolute inset-0" aria-hidden="true">
          {BURSTS.map((b, k) => {
            const st = stages[k];
            return (
              <div key={k}>
                <div
                  className="absolute -ml-px h-14 w-0.5 bg-gradient-to-b from-white to-transparent"
                  style={{
                    left: `${b.x}%`,
                    top: `${st >= 1 ? b.y : 100}%`,
                    opacity: st === 1 ? 1 : 0,
                    transition: "top 550ms cubic-bezier(0.3,0.6,0.4,1), opacity 200ms ease",
                  }}
                />
                <div
                  className="absolute h-0 w-0"
                  style={{
                    left: `${b.x}%`,
                    top: `${b.y}%`,
                    transform: `translateY(${st === 3 ? 40 : 0}px)`,
                    transition: "transform 1400ms ease-in",
                  }}
                >
                  <div
                    className="absolute -top-[60px] -left-[60px] h-[120px] w-[120px] rounded-full"
                    style={{
                      background: "radial-gradient(circle, rgba(255,255,255,0.75), rgba(255,255,255,0) 65%)",
                      opacity: st === 2 ? 0.8 : 0,
                      transform: `scale(${st === 2 ? 1.4 : st === 3 ? 2.2 : 0.2})`,
                      transition: "opacity 600ms ease, transform 600ms ease",
                    }}
                  />
                  {SPARKS[k].map((s, i) => {
                    const t = st === 2 ? -s.d * scale : st === 3 ? -s.d * scale * 1.12 : 0;
                    return (
                      <div
                        key={i}
                        className="absolute -top-[7px] -left-[1.5px] h-3.5 w-[3px] rounded-sm"
                        style={{
                          background: s.color,
                          transform: `rotate(${s.a}deg) translateY(${Math.round(t)}px)`,
                          opacity: st === 2 ? 1 : 0,
                          transition: `transform 1100ms cubic-bezier(0.12,0.75,0.25,1), opacity ${st === 3 ? 900 : 120}ms ease`,
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {phase === "boom" && (
        <div
          className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-4 p-6"
          style={{ opacity: titleOn ? 1 : 0, transition: "opacity 900ms ease" }}
        >
          <h1 className="wide text-center text-[clamp(44px,9vw,140px)] leading-[0.95] font-extrabold tracking-[-0.035em]">
            Sretan rođendan!
          </h1>
          <p className="font-mono text-[13px] uppercase tracking-[0.12em] text-neutral-400">Nikola · 30</p>
        </div>
      )}
    </div>
  );
}
