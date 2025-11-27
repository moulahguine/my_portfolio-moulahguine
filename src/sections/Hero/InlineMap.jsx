"use client";

import dynamic from "next/dynamic";

const DynamicMap = dynamic(
  () => import("@/components/Location/InteractiveMap"),
  {
    ssr: false,
    loading: () => (
      <div className="aside__mapLoading" aria-live="polite">
        Loading map...
      </div>
    ),
  }
);

export default function AsideInlineMap() {
  return <DynamicMap />;
}
