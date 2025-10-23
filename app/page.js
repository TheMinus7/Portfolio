export default function Home() {
  return (
    <main className="relative">
      <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-10 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />

      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent">
                Hi I am Minus
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Намайг Minus гэдэг. Front-end хөгжүүлэгчээр карьерээ эхлүүлж
              байгаа оюутан бөгөөд ШУТИС-ийн 3-р курст суралцаж байна. React,
              Next.js, Tailwind зэрэг технологийг төлөвлөлттэйгээр суралцаж,
              хурд, хүртээмж, цэгцтэй UI/UX-ийг гол зарчмаа болгодог. Үүнтэй
              зэрэгцэн Tenger Jargalant Logistic LLC-ийн Гүйцэтгэх захирал хийж,
              шийдвэр гаргах, хариуцлага хүлээх, багтай харилцах чадвараа өдөр
              тутамд хөгжүүлж байна. Одоо бол туршлагаа хуримтлуулж буй шатдаа
              ч, ариун цэврийн код, баримтжуулалт, тасралтгүй суралцах
              хандлагаараа ялгарахыг зорьдог.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/projects"
                className="inline-flex items-center rounded-xl bg-violet-600 px-5 py-3 text-white font-semibold shadow-md hover:bg-violet-700 active:scale-[.99] transition"
              >
                Төслүүдийг үзэх
              </a>
              <a
                href="/contact"
                className="inline-flex items-center rounded-xl border border-gray-300 px-5 py-3 font-semibold text-gray-800 hover:bg-gray-50 transition"
              >
                Холбоо барих
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="px-3 py-1 rounded-full text-sm bg-violet-100 text-violet-700">
                ШУТИС • 3-р курс
              </span>
              <span className="px-3 py-1 rounded-full text-sm bg-emerald-100 text-emerald-700">
                CEO • Tenger Jargalant Logistic LLC
              </span>
              <span className="px-3 py-1 rounded-full text-sm bg-sky-100 text-sky-700">
                19 настай
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="flex lg:justify-end">
            <div className="relative rounded-3xl p-1 bg-gradient-to-br from-violet-600 via-fuchsia-500 to-rose-500 shadow-xl">
              <img
                src="/bii.jpg"
                alt="Minus"
                className="block h-[520px] w-[380px] max-w-full rounded-3xl object-cover bg-white"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
