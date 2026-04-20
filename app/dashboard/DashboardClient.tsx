"use client";

import { useMemo, useState } from "react";
import { products, type Video } from "./data";
import { useWatched } from "./useWatched";
import ProductSection from "./ProductSection";
import ProgressStrip from "./ProgressStrip";
import VideoModal from "./VideoModal";
import CommunityIsland from "./CommunityIsland";

export default function DashboardClient() {
  const { watched, toggle, markWatched } = useWatched();
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  const totals = useMemo(() => {
    const total = products.reduce((sum, p) => sum + p.videos.length, 0);
    const done = products.reduce(
      (sum, p) => sum + p.videos.filter((v) => watched.has(v.id)).length,
      0
    );
    return { total, done };
  }, [watched]);

  return (
    <>
      <ProgressStrip watchedCount={totals.done} totalCount={totals.total} />

      <div className="mt-10 flex flex-col gap-6">
        {products.map((p, i) => (
          <ProductSection
            key={p.id}
            product={p}
            watched={watched}
            onPlayVideo={setActiveVideo}
            onToggleWatched={toggle}
            defaultOpen={i === 0}
          />
        ))}
      </div>

      <VideoModal
        video={activeVideo}
        alreadyWatched={activeVideo ? watched.has(activeVideo.id) : false}
        onClose={() => setActiveVideo(null)}
        onDoneWatching={markWatched}
      />

      <CommunityIsland />
    </>
  );
}
