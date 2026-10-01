// Privremena stranica — služi samo da se provjeri da lanac
// push → build → VPS radi. Prava stranica dolazi poslije.
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-semibold">Kliknik</h1>
      <p className="text-zinc-500">Uskoro.</p>
    </main>
  );
}
