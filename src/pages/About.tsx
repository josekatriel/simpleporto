import { Link } from "react-router-dom";
import { motion, easeOut } from "framer-motion";
import {
  ArrowLeft,
  FileDown,
  ExternalLink,
  Send,
  Gamepad2,
} from "lucide-react";

import { FaDiscord, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import PixelTransition from "../components/PixelTransition";
import { useState } from "react";
import { useSound } from "../context/SoundContext";

const ME_EMAIL = "work.josekatriel@gmail.com"; // TODO: replace
const CV_URL = "/cv/cv.pdf"; // TODO: put your PDF in public/cv/
const DISCORD_INVITE = "https://discord.gg/KRADGAwmu5"; // TODO
const DISCORD_MC_SERVER = "https://discord.gg/mKv7C7rpSs";
const MINECRAFT_SERVER = "currently private"; // TODO (just text shown)
const MODPACK_URL = "https://www.curseforge.com/members/zhangyg/projects"; // TODO
const YT_URL = "https://www.youtube.com/@KatrGames"; // TODO confirm
const XKatr_URL = "https://x.com/katr_games"; // TODO
const X_URL = "https://x.com/katrjjjj"; // TODO
const LI_URL = "https://www.linkedin.com/in/jktrl/"; // TODO

const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: easeOut, delay: d },
  viewport: { once: true, margin: "-10% 0px -10% 0px" },
});

export default function About() {
  const [showContent, setShowContent] = useState(false);

  const { play } = useSound();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: easeOut }}
      className="min-h-screen bg-background text-foreground"
    >
      {!showContent && (
        <PixelTransition onComplete={() => setShowContent(true)} />
      )}
      {showContent && (
        <div className="mx-auto max-w-4xl px-6 py-12">
          {/* Back + Title */}
          <div className="flex items-center gap-4 mb-10">
            <motion.div
              initial={{ scale: 0, rotate: -45, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
            >
              <motion.div
                whileHover={{ x: -3, y: 0 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link to="/" className="p-2" title="Back to Home">
                  <ArrowLeft strokeWidth={3} size={24} />
                </Link>
              </motion.div>
            </motion.div>
            <motion.h1
              className="text-3xl sm:text-4xl font-heading font-bold"
              {...fadeUp(0.1)}
            >
              About Me
            </motion.h1>
          </div>

          {/* Intro / Bio */}
          <motion.section className="space-y-3" {...fadeUp(0.15)}>
            <p className="text-[0.95rem] text-muted-foreground leading-relaxed">
              I’m a programmer & developer with a design background (Petra
              Christian University - Bachelor of Design). I build games and web
              apps with a focus on clean UX, performance, and playful
              interactions.
            </p>
          </motion.section>

          {/* Quick Actions */}
          <motion.section
            className="mt-8 flex flex-wrap gap-3"
            {...fadeUp(0.2)}
          >
            <a
              href={CV_URL}
              download
              onMouseEnter={() => play("/sounds/click.mp3")}
              className="px-3 py-2 bg-primary text-primary-foreground text-sm inline-flex items-center gap-2 hover:opacity-90 transition"
            >
              <FileDown className="w-4 h-4" /> Download CV
            </a>

            <Link
              to="/work"
              onMouseEnter={() => play("/sounds/click.mp3")}
              className="px-3 py-2 border text-sm inline-flex items-center gap-2 hover:bg-muted transition"
            >
              <ExternalLink className="w-4 h-4" /> View My Projects
            </Link>
          </motion.section>

          {/* Education */}
          <motion.section className="mt-12" {...fadeUp(0.25)}>
            <h2 className="text-lg font-heading font-semibold">Education</h2>
            <p className="text-sm text-muted-foreground mt-2">
              2019 Petra Christian University - Bachelor of Design
            </p>
          </motion.section>

          {/* Socials */}
          <motion.section className="mt-12" {...fadeUp(0.3)}>
            <h2 className="text-lg font-heading font-semibold">Socials</h2>
            <div className="mt-3 grid sm:grid-cols-2 gap-3">
              <SocialLink
                href={YT_URL}
                icon={<FaYoutube className="w-4 h-4" />}
                label="YouTube · KatrGames"
                onHover={() => play("/sounds/click.mp3")}
              />
              <SocialLink
                href={XKatr_URL}
                icon={<FaXTwitter className="w-4 h-4" />}
                label="Twitter / X KatrGames"
                onHover={() => play("/sounds/click.mp3")}
              />
              <SocialLink
                href={DISCORD_INVITE}
                icon={<FaDiscord className="w-4 h-4" />}
                label="Discord Channel"
                onHover={() => play("/sounds/click.mp3")}
              />
              <SocialLink
                href={X_URL}
                icon={<FaXTwitter className="w-4 h-4" />}
                label="Twitter / X Pixel Art"
                onHover={() => play("/sounds/click.mp3")}
              />
            </div>
          </motion.section>

          {/* Hobbies / Side Projects */}
          <motion.section className="mt-12" {...fadeUp(0.35)}>
            <h2 className="text-lg font-heading font-semibold">
              Outside of Work
            </h2>
            <div className="mt-3 space-y-4">
              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                Outside of development, I like building and exploring creative
                projects with friends — one of our favorites is running a custom{" "}
                <span className="font-medium text-foreground">
                  Minecraft server
                </span>{" "}
                and crafting our own modpack together with{" "}
                <span className="font-medium text-foreground">ZhangYG</span>.
              </p>
              <div className="pt-8">
                <h3 className="text-sm font-medium flex items-center gap-2">
                  <Gamepad2 className="w-4 h-4" /> Minecraft Server
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Server: <span className="font-mono">{MINECRAFT_SERVER}</span>
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium flex items-center gap-2">
                  <Gamepad2 className="w-4 h-4" /> Modpack
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Grab the modpack here:{" "}
                  <a
                    className="underline text-primary inline-flex items-center gap-1"
                    href={MODPACK_URL}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => play("/sounds/click.mp3")}
                  >
                    Modpack Link <ExternalLink className="w-3 h-3" />
                  </a>
                </p>
                <p className="text-sm text-muted-foreground">
                  Discord support:{" "}
                  <a
                    className="underline text-primary inline-flex items-center gap-1"
                    href={DISCORD_MC_SERVER}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => play("/sounds/click.mp3")}
                  >
                    Join <ExternalLink className="w-3 h-3" />
                  </a>
                </p>
              </div>
            </div>
          </motion.section>

          {/* Inquiry CTA */}
          <motion.section className="mt-14" {...fadeUp(0.4)}>
            <div className="border p-5 bg-card">
              <h3 className="text-base font-heading font-semibold">
                Project Inquiry
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Interested in working together? Send me a message with a short
                brief.
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                <a
                  href={`mailto:${ME_EMAIL}?subject=Project%20Inquiry`}
                  className="px-3 py-2 bg-primary text-primary-foreground text-sm inline-flex items-center gap-2 hover:opacity-90 transition
                  "
                  onMouseEnter={() => play("/sounds/click.mp3")}
                >
                  <Send className="w-4 h-4" /> Email Inquiry
                </a>
                <a
                  href={LI_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2 border text-sm inline-flex items-center gap-2 hover:bg-muted transition"
                  onMouseEnter={() => play("/sounds/click.mp3")}
                >
                  <FaLinkedin className="w-4 h-4" /> Contact on LinkedIn
                </a>
              </div>
            </div>
          </motion.section>
        </div>
      )}
    </motion.div>
  );
}

function SocialLink({
  href,
  icon,
  label,
  onHover,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  onHover?: () => void;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={onHover} // 👈 play hover sound
      className="group flex items-center justify-between border px-3 py-2 hover:bg-muted transition"
    >
      <span className="inline-flex items-center gap-2 text-sm">
        {icon}
        {label}
      </span>
      <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100 transition" />
    </a>
  );
}
