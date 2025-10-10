import { useEffect, useRef, useState } from "react";
import PixelTransition from "../components/PixelTransition";
import ProjectTabs from "../components/ProjectTabs";
import useEmblaCarousel from "embla-carousel-react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const projects = [
  {
    year: "2025",
    title: "Web Design · Amares Residence",
    description:
      'Developed a modern, responsive website for the client using React + Vite. With Strapi as backend <a href="https://amaresresidence.com" target="_blank" class="underline text-primary">Visit Site</a>',
    category: "Web",
    tags: ["React", "Vite", "Strapi"],
    images: [
      "/images/amares1.jpg",
      "/images/amares2.jpg",
      "/images/amares3.jpg",
      "/images/amares4.jpg",
      "/images/amares5.jpg",
    ],
  },
  {
    year: "2025",
    title: "Web Design · Alpha Pro Engineering",
    description:
      'Built a corporate website for <a href="https://alphaproe.co.id/" target="_blank" class="underline text-primary">Alpha Pro Engineering</a> using PHP (Laravel framework) with a focus on clean UI and fast performance.',
    category: "Web",
    tags: ["PHP", "Laravel"],
  },
  {
    year: "2025",
    title: "Panic Porter · KatrGames",
    description:
      "Developed for Brackeys Game Jam 2025.1 | A fast-paced management game where players handle chaotic delivery operations. <a href='https://katrgames.itch.io/panic-porters' target='_blank' class='underline text-primary'>Play Game</a>",
    category: "Game",
    images: ["/images/panicporter1.jpg"],
    tags: ["Unity", "C#", "Game Jam"],
  },
  {
    year: "2025",
    title: "Stock Management App · Freelance",
    description:
      "Designed and developed a full-stack internal stock management system for client operations. Built with Go (backend), MongoDB, and React + Vite for a fast, maintainable interface.",
    category: "Web",
    tags: ["Go", "MongoDB", "React+Vite"],
  },
  {
    year: "2024",
    title: "Mochi Coin Dozer · Freelance",
    description:
      "Created a coin-dozer style mobile game with integrated Google Ads and custom visual assets for the client's in-house gaming platform.",
    category: "Game",
    images: [
      "/images/mochi1.png",
      "/images/mochi2.png",
      "/images/mochi3.png",
      "/images/mochi4.jpg",
    ],
    tags: ["Unity", "C#", "Google Ads"],
  },
  {
    year: "2023",
    title: "Tiny Chaos · KatrGames",
    description:
      "Released on Steam <a href='https://store.steampowered.com/app/2500680/Tiny_Chaos/' target='_blank' class='underline text-primary'>Tiny Chaos</a> — a top-down survival roguelite focused on chaotic gameplay and replayability. Designed and developed all gameplay systems and content.",
    category: "Game",
    videos: ["/videos/tc1.mp4", "/videos/tc2.mp4"],
    images: ["/images/tc1.png", "/images/tc2.png", "/images/tc3.png"],
    tags: ["Unity", "C#", "Steam"],
  },
  {
    year: "2022",
    title: "3D Product Design · Riff",
    description:
      "Created high-quality 3D product visualizations and packaging mockups for client presentation and marketing campaigns.",
    category: "Design",
    images: ["/images/riff1.jpg", "/images/riff2.png", "/images/riff3.jpg"],
    tags: ["Blender", "Illustrator"],
  },
  {
    year: "2021",
    title: "Web Design · Tokka",
    description:
      "Designed and developed the official <a href='https://tokka.id/' target='_blank' class='underline text-primary'>Tokka Website</a> with a responsive, modern interface and visual storytelling approach.",
    category: "Web",
    tags: ["Html", "CSS", "JS"],
    images: ["/images/tokkaweb1.png", "/images/tokkaweb2.png"],
  },
  {
    year: "2021",
    title: "Marketing · Tokka",
    description:
      "Created visual marketing materials, product mockups, and promotional designs to strengthen Tokka’s online brand identity.",
    category: "Design",
    tags: ["Photoshop", "Premiere Pro", "After Effects"],
    videos: ["/videos/tokka1.mp4", "/videos/tokka2.mp4"],
    images: ["/images/tokka1.png", "/images/tokka2.jpg"],
  },
  {
    year: "2021",
    title: "Product Design · Mamago",
    description:
      "Designed packaging and created 3D product mockups for Mamago’s retail launch presentation.",
    category: "Design",
    tags: ["Photoshop", "Blender"],
    images: ["/images/mamago1.jpg"],
  },
  {
    year: "2020",
    title: "Graphic Design · Cocrea",
    description:
      "Developed visual branding and marketing materials to ensure cohesive brand communication and appeal.",
    category: "Design",
    tags: ["Photoshop", "Blender"],
    images: [
      "/images/cocrea1.jpg",
      "/images/cocrea2.jpg",
      "/images/cocrea3.jpg",
      "/images/cocrea4.jpg",
    ],
  },
  {
    year: "2019",
    title: "Traffic Rules · College Project",
    description:
      "A traffic safety educational game built as a final-year project. Received <strong>TEDx Jalan Tunjungan's “Most Innovative Project”</strong> award.",
    category: "Game",
    tags: ["Unity", "C#", "College Project"],
    images: ["/images/tr1.png"],
  },
];

export default function Work() {
  const [showContent, setShowContent] = useState(false);
  const [filter, setFilter] = useState("All");

  const playClick = () => {
    const audio = new Audio("/sounds/click.mp3");
    audio.volume = 0.25;
    audio.play();
  };

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {!showContent && (
        <PixelTransition onComplete={() => setShowContent(true)} />
      )}

      {showContent && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center py-16 px-6"
        >
          {/* Title + Button */}
          {/* Title + Back Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <motion.div
              whileHover={{ x: -3, y: 0 }}
              whileTap={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link to="/" className="p-2" title="Back to Home">
                <ArrowLeft strokeWidth={3} size={24} />
              </Link>
            </motion.div>

            <h1 className="text-4xl font-heading font-bold">My Portfolio</h1>
          </motion.div>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <ProjectTabs
              value={filter}
              onChange={(f) => {
                setFilter(f);
                playClick();
              }}
            />
          </motion.div>

          {/* Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="my-36 pb-16 w-full max-w-5xl space-y-24"
          >
            {filtered.map((p, i) => (
              <ProjectItem key={i} {...p} playClick={playClick} />
            ))}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

function ProjectItem({
  year,
  title,
  description,
  images = [],
  videos = [],
  tags = [],
  playClick,
}: {
  year: string;
  title: string;
  description: string;
  images?: string[];
  videos?: string[];
  tags?: string[];
  playClick: () => void;
}) {
  const [emblaRef] = useEmblaCarousel({ loop: false, dragFree: true });
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-40% 0px -40% 0px" });

  useEffect(() => {
    if (inView) playClick();
  }, [inView, playClick]);

  return (
    <motion.section
      ref={ref}
      className="transition-transform duration-500"
      animate={{ scale: inView ? 1.04 : 1, opacity: inView ? 1 : 0.6 }}
    >
      <div className="grid grid-cols-[100px_1fr] gap-8 items-start">
        {/* Left: Year */}
        <div>
          <span className="block text-muted-foreground text-[0.95rem] mt-[2px]">
            {year}
          </span>
        </div>

        {/* Right: Title, tags, description, media */}
        <div>
          <h2 className="text-[1.05rem] font-heading font-medium">{title}</h2>

          {/* Tech/Tool badges */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-[2px] text-[0.75rem] bg-muted text-foreground border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <p
            className="mt-2 text-muted-foreground text-[0.95rem] leading-relaxed max-w-3xl"
            dangerouslySetInnerHTML={{ __html: description }}
          />

          {(videos.length > 0 || images.length > 0) && (
            <div
              ref={emblaRef}
              className="overflow-hidden mt-3 cursor-grab active:cursor-grabbing"
            >
              <div className="flex gap-3">
                {videos.map((src, i) => (
                  <video
                    key={`video-${i}`}
                    src={src}
                    muted
                    autoPlay
                    loop
                    playsInline
                    className="h-[260px] w-auto object-cover flex-shrink-0"
                  />
                ))}

                {images.map((src, i) => (
                  <img
                    key={`img-${i}`}
                    src={src}
                    alt={title}
                    className="h-[260px] w-auto object-cover flex-shrink-0"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
}
