import useEmblaCarousel from "embla-carousel-react";

export default function ProjectCard({
  year,
  title,
  description,
  images,
}: {
  year: number;
  title: string;
  description: string;
  images: string[];
}) {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <div className="border border-border rounded-lg p-4 bg-card shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-lg font-heading font-semibold">
          {year} — {title}
        </h2>
      </div>
      <p className="text-muted-foreground text-sm mt-2">{description}</p>

      <div className="mt-4 overflow-hidden rounded-md" ref={emblaRef}>
        <div className="flex">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={title}
              className="w-full sm:w-[400px] object-cover rounded-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
