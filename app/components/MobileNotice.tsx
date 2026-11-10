"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function MobileNotice() {
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateViewport = () => setIsMobileViewport(mediaQuery.matches);

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);

    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  return (
    <Dialog
      open={isMobileViewport && !dismissed}
      onOpenChange={(open) => {
        if (!open) setDismissed(true);
      }}
    >
      <DialogContent
        showCloseButton={false}
        style={{
          left: "calc(50% - 48px)",
          top: "calc(50% - 80px)",
          translate: "-50% -50%",
        }}
        className="max-h-[calc(100dvh-2rem)] w-[calc(100vw-2.5rem)] max-w-[20rem] gap-4 overflow-y-auto border border-white/10 bg-[#10291d] p-5 text-slate-100 shadow-2xl sm:w-full sm:max-w-md sm:gap-6 sm:p-7"
      >
        <DialogHeader className="gap-3 sm:gap-4">
          <DialogTitle className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
            Welcome to my portfolio website
          </DialogTitle>
          <DialogDescription className="text-sm leading-relaxed text-slate-300 sm:text-base">
            <strong>leeroiv.dev</strong> is a work in progress and isn&apos;t fully optimized for
            mobile yet. For the best experience, I recommend viewing my website on a
            desktop.
          </DialogDescription>
        </DialogHeader>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="inline-flex h-11 w-full items-center justify-center rounded-full bg-emerald-400 px-5 text-sm font-semibold text-emerald-950 transition-colors hover:bg-emerald-300 active:bg-emerald-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
        >
          Continue to portfolio
        </button>
      </DialogContent>
    </Dialog>
  );
}
