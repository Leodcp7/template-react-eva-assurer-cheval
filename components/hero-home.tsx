import ModalVideo from "@/components/modal-video";
import VideoThumb from "@/public/images/hero-image-01.jpg";

/** ==== REMPLACE CES VALEURS ==== */
const TITLE = "Ton titre fort ici";
const SUBTITLE =
  "Ton sous-titre en 1–2 phrases, clair et orienté bénéfices.";
const PRIMARY_CTA_LABEL = "Bouton principal";
const PRIMARY_CTA_HREF = "/contact";
const SECONDARY_CTA_LABEL = "Bouton secondaire";
const SECONDARY_CTA_HREF = "/demo";
const BRAND = "#E55058"; // ta couleur primaire (hex)
/** ================================= */

export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl
                         [background:linear-gradient(to_right,#e5e7eb,#c7d2fe,#fafafa,#a5b4fc,#e5e7eb)]"
              data-aos="fade-up"
            >
              {TITLE}
            </h1>

            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                {SUBTITLE}
              </p>

              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 w-full text-white sm:mb-0 sm:w-auto"
                    href={PRIMARY_CTA_HREF}
                    style={{
                      backgroundImage: `linear-gradient(to top, ${BRAND}, ${BRAND})`,
                      backgroundSize: "100% 100%",
                      backgroundPosition: "bottom",
                    }}
                  >
                    <span className="relative inline-flex items-center">
                      {PRIMARY_CTA_LABEL}
                      <span className="ml-1 tracking-normal text-white/60 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>

                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 text-gray-200 sm:ml-4 sm:w-auto
                               before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent
                               before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box]
                               before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
                    href={SECONDARY_CTA_HREF}
                  >
                    {SECONDARY_CTA_LABEL}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Vidéo (mets ton fichier dans /public/videos/video.mp4) */}
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1104}
            thumbHeight={576}
            thumbAlt="Vidéo de démonstration"
            video="videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>
      </div>
    </section>
  );
}
