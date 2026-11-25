"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { site } from "@/lib/site";

const SRC = "/audio/background.webm";
const VOLUME = 0.6;

export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [opened, setOpened] = useState(false);

  // Lock page scroll while the welcome screen is showing.
  useEffect(() => {
    document.body.style.overflow = opened ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [opened]);

  const play = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = VOLUME;
    audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  };

  // Browsers only allow sound after a click/tap, so the "Open" button
  // doubles as the visitor's permission to start the music.
  const openInvitation = () => {
    setOpened(true);
    play();
  };

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      play();
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={SRC} loop preload="auto" />

      {!opened && (
        <div className="welcome-overlay" role="dialog" aria-modal="true" aria-label="Wedding invitation">
          <div className="welcome-inner">
            <p className="eyebrow">You are invited to the wedding of</p>
            <h2 className="welcome-names">
              {site.partnerOne}
              <span className="ampersand"> & </span>
              {site.partnerTwo}
            </h2>
            <p className="welcome-date">{site.dateLabel}</p>
            <button type="button" className="primary-button" onClick={openInvitation} autoFocus>
              Open invitation <span>✦</span>
            </button>
          </div>
        </div>
      )}

      {opened && (
        <button
          type="button"
          className={`music-toggle${playing ? " is-playing" : ""}`}
          onClick={toggle}
          aria-label={playing ? "Stop music" : "Play music"}
          aria-pressed={playing}
          title={playing ? "Stop music" : "Play music"}
        >
          {playing ? <Volume2 size={18} /> : <VolumeX size={18} />}
        </button>
      )}
    </>
  );
}
