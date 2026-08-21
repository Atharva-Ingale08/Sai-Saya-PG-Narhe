import { useCallback, useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export type GalleryImage = { src: string; alt: string };

/**
 * To replace gallery images: swap the imported files in src/assets and update
 * the `images` array passed in from the page.
 */
export function Gallery({ images }: { images: GalleryImage[] }) {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (dir: number) =>
      setIndex((i) => (i === null ? i : (i + dir + images.length) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, step]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setIndex(i)}
            className={`group relative overflow-hidden rounded-2xl bg-muted shadow-[var(--shadow-soft)] ${
              i === 0 ? "col-span-2 row-span-2 lg:col-span-2" : ""
            }`}
            aria-label={`View image: ${img.alt}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              width={1200}
              height={900}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/20" />
          </button>
        ))}
      </div>

      {index !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/92 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close viewer"
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-background/15 text-background transition-colors hover:bg-background/25"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            className="absolute left-3 grid h-11 w-11 place-items-center rounded-full bg-background/15 text-background transition-colors hover:bg-background/25 sm:left-8"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-h-full">
            <img
              src={images[index]?.src}
              alt={images[index]?.alt ?? ""}
              className="max-h-[80vh] w-auto rounded-xl object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-background/80">
              {images[index]?.alt}
            </figcaption>
          </figure>

          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            className="absolute right-3 grid h-11 w-11 place-items-center rounded-full bg-background/15 text-background transition-colors hover:bg-background/25 sm:right-8"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </>
  );
}
