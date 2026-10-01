"use client";

import { REPLAY_EVENT } from "./Celebration";
import { Replay } from "./icons";

export default function ReplayButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(REPLAY_EVENT))}
      className="inline-flex min-h-11 cursor-pointer items-center gap-2 self-start font-mono text-[13px] uppercase tracking-[0.08em] text-neutral-500 underline underline-offset-4 hover:text-ink"
    >
      <Replay />
      Ponovi vatromet
    </button>
  );
}
