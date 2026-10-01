import Celebration from "@/components/Celebration";
import ReplayButton from "@/components/ReplayButton";
import { Arrow } from "@/components/icons";

const wrap = "mx-auto max-w-[1280px] px-[clamp(20px,4vw,48px)]";
const label = "font-mono text-[13px] uppercase tracking-[0.08em]";
const h2 = "wide text-[clamp(34px,5vw,64px)] leading-none font-extrabold tracking-[-0.03em]";

const SERVICES = [
  {
    title: "Društvene mreže",
    text: "Strategija, plan objava i vođenje profila na Instagramu, Facebooku, TikToku i LinkedInu. Redovito, dosljedno i s jasnim ciljem.",
  },
  {
    title: "Plaćeno oglašavanje",
    text: "Meta i Google kampanje postavljene oko jednog pitanja: koliko košta novi klijent. Testiramo, mjerimo i optimiziramo svaki euro.",
  },
  {
    title: "Sadržaj",
    text: "Fotografije, kratki videi i tekstovi koji zaustavljaju scroll i govore jezikom tvoje publike.",
  },
  {
    title: "Web i SEO",
    text: "Brze, jasne web stranice i optimizacija za tražilice, da te kupci pronađu baš kad te traže.",
  },
];

export default function Home() {
  return (
    <>
      {/* Rođendansko izdanje — makni ovu liniju (i ReplayButton) kad prođe. */}
      <Celebration />

      <header className={`${wrap} flex flex-wrap items-center justify-between gap-x-8 gap-y-4 py-6`}>
        <a href="#top" className="wide text-[22px] font-extrabold tracking-[-0.02em]">
          KLIKNIK
        </a>
        <nav className="flex flex-wrap items-center gap-x-7 gap-y-2 text-[15px]">
          <a href="#usluge" className="hover:underline">Usluge</a>
          <a href="#o-nama" className="hover:underline">O nama</a>
          <a href="#kontakt" className="inline-flex min-h-11 items-center rounded-full bg-ink px-[22px] font-semibold text-white">
            Kontakt
          </a>
        </nav>
      </header>

      <main>
        <section id="top" className={`${wrap} flex flex-col gap-8 pt-[clamp(48px,8vw,120px)] pb-[clamp(56px,8vw,112px)]`}>
          <p className={`${label} text-neutral-500`}>Obrt za digitalni marketing · Zagreb</p>
          <h1 className="wide max-w-[11ch] text-[clamp(44px,8.5vw,128px)] leading-[0.95] font-extrabold tracking-[-0.035em]">
            Klikovi koji postaju klijenti.
          </h1>
          <div className="flex flex-wrap items-end justify-between gap-7">
            <p className="max-w-[52ch] text-[clamp(17px,1.6vw,20px)] leading-normal text-neutral-700">
              Vodimo društvene mreže, oglase i sadržaj za brendove koji žele više od lajkova — stvarne upite, prodaju i klijente.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#kontakt" className="inline-flex min-h-13 items-center gap-2.5 rounded-full bg-ink px-7 font-semibold text-white">
                Pošalji upit
                <Arrow size={18} />
              </a>
              <a href="#usluge" className="inline-flex min-h-13 items-center rounded-full border-[1.5px] border-ink px-7 font-semibold">
                Usluge
              </a>
            </div>
          </div>
          <ReplayButton />
        </section>

        <div className="bg-ink px-[clamp(20px,4vw,48px)] py-6 text-white">
          <div className="wide mx-auto flex max-w-[1280px] flex-wrap items-center gap-x-8 gap-y-2 text-[clamp(18px,2.2vw,28px)] font-bold tracking-[-0.02em]">
            {SERVICES.map((s, i) => (
              <span key={s.title} className="contents">
                {i > 0 && <span className="text-neutral-500">/</span>}
                <span>{s.title === "Plaćeno oglašavanje" ? "Oglašavanje" : s.title}</span>
              </span>
            ))}
          </div>
        </div>

        <section id="usluge" className={`${wrap} flex scroll-mt-4 flex-col gap-12 py-[clamp(64px,9vw,128px)]`}>
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 className={h2}>Usluge</h2>
            <p className={`${label} text-neutral-500`}>01 — Što radimo</p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-x-8 gap-y-10">
            {SERVICES.map((s, i) => (
              <div key={s.title} className="flex flex-col gap-3.5 border-t-2 border-ink pt-[22px]">
                <span className="font-mono text-[13px] text-neutral-500">0{i + 1}</span>
                <h3 className="text-2xl font-bold tracking-[-0.01em]">{s.title}</h3>
                <p className="leading-relaxed text-neutral-700">{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="o-nama" className="scroll-mt-4 border-t border-neutral-200">
          <div className={`${wrap} grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center gap-12 py-[clamp(64px,9vw,128px)]`}>
            <div className="flex flex-col gap-6">
              <p className={`${label} text-neutral-500`}>02 — O nama</p>
              <h2 className={h2}>Tko stoji iza Kliknika</h2>
              <p className="max-w-[52ch] text-lg leading-relaxed text-neutral-700">
                Iza Kliknika stoji Nikola Iličić. Kliknik je nastao 2026. u Zagrebu iz jednostavne ideje: marketing mora
                donositi rezultate, a ne samo lijepe brojke u izvještaju. Svaki klijent dobiva direktan kontakt, jasan plan i
                iskrene brojke — bez agencijskog žargona i skrivenih troškova.
              </p>
              <dl className="flex flex-wrap gap-8 pt-2">
                <div className="flex flex-col-reverse gap-1">
                  <dt className="font-mono text-xs uppercase tracking-[0.08em] text-neutral-500">Osnovan</dt>
                  <dd className="wide text-4xl font-extrabold tracking-[-0.02em]">2026</dd>
                </div>
                <div className="flex flex-col-reverse gap-1">
                  <dt className="font-mono text-xs uppercase tracking-[0.08em] text-neutral-500">Klijenata — zasad</dt>
                  <dd className="wide text-4xl font-extrabold tracking-[-0.02em]">0</dd>
                </div>
              </dl>
            </div>
            {/* Placeholder dok ne stigne fotografija. */}
            <div className="flex aspect-[4/5] max-h-[560px] w-full items-center justify-center border border-neutral-300 bg-[repeating-linear-gradient(135deg,#f4f4f4_0,#f4f4f4_12px,#ffffff_12px,#ffffff_24px)]">
              <span className={`${label} bg-white px-3 py-2 text-neutral-500`}>Fotografija uskoro</span>
            </div>
          </div>
        </section>

        <section id="kontakt" className="bg-ink text-white">
          <div className={`${wrap} grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-14 py-[clamp(64px,9vw,128px)]`}>
            <div className="flex flex-col gap-6">
              <p className={`${label} text-neutral-400`}>03 — Kontakt</p>
              <h2 className={h2}>Imaš projekt? Javi se.</h2>
              <div className="flex flex-col items-start gap-2.5 pt-2 text-lg">
                <a href="mailto:info@kliknik.hr" className="underline underline-offset-4">info@kliknik.hr</a>
                <a href="tel:+385996938537" className="underline underline-offset-4">+385 99 693 8537</a>
              </div>
            </div>
            {/* Forma za sada samo otvara mail klijent — slanje se spaja kad proradi info@kliknik.hr. */}
            <form action="mailto:info@kliknik.hr" method="post" encType="text/plain" className="flex flex-col gap-7">
              {[
                { id: "ime", label: "Ime", type: "text" },
                { id: "email", label: "Email", type: "email" },
              ].map((f) => (
                <div key={f.id} className="flex flex-col gap-1.5">
                  <label htmlFor={f.id} className="font-mono text-xs uppercase tracking-[0.08em] text-neutral-400">{f.label}</label>
                  <input id={f.id} name={f.id} type={f.type} className="border-b border-neutral-600 bg-transparent py-3 text-lg outline-none focus:border-white" />
                </div>
              ))}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="poruka" className="font-mono text-xs uppercase tracking-[0.08em] text-neutral-400">Poruka</label>
                <textarea id="poruka" name="poruka" rows={4} className="resize-y border-b border-neutral-600 bg-transparent py-3 text-lg outline-none focus:border-white" />
              </div>
              <button type="submit" className="inline-flex min-h-13 cursor-pointer items-center gap-2.5 self-start rounded-full bg-white px-7 font-semibold text-ink">
                Pošalji upit
                <Arrow size={18} />
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-800 bg-ink">
        <div className={`${wrap} flex flex-wrap justify-between gap-3 py-6 font-mono text-xs text-neutral-400`}>
          <span>© 2026 Kliknik, obrt za digitalni marketing</span>
          <span>Zagreb · info@kliknik.hr</span>
        </div>
      </footer>
    </>
  );
}
