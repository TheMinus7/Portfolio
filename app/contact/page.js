export default function Contact() {
  return (
    <main className="relative">
      <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-10 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />

      <section className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-center">
          <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent">
            Contact
          </span>
        </h1>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-xl font-semibold">Холбогдох мэдээлэл</h2>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li>
                  <a
                    href="mailto:munkhjargal.must@gmail.com"
                    className="inline-flex items-center gap-3 hover:underline"
                  >
                    <span className="text-2xl">✉️</span>
                    <span className="font-medium">
                      munkhjargal.must@gmail.com
                    </span>
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">📱</span>
                  <div className="space-y-1">
                    <a
                      href="tel:+97699875884"
                      className="block font-medium hover:underline"
                    >
                      99875884
                    </a>
                    <a
                      href="tel:+97685335577"
                      className="block font-medium hover:underline"
                    >
                      85335577
                    </a>
                  </div>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/the_minus_7/?__pwa=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 hover:underline"
                  >
                    <span className="text-2xl">📸</span>
                    <span className="font-medium">@the_minus_7</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/minus.uso"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 hover:underline"
                  >
                    <span className="text-2xl">📘</span>
                    <span className="font-medium">facebook.com/minus.uso</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-xl font-semibold">Мессеж үлдээх</h2>
              <form className="mt-4 grid grid-cols-1 gap-4">
                <input
                  type="text"
                  placeholder="Нэр"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
                <input
                  type="email"
                  placeholder="Имэйл"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
                <textarea
                  placeholder="Төслийн товч тайлбар эсвэл мессеж"
                  rows={5}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white hover:bg-violet-700 active:scale-[.99] transition"
                >
                  Илгээх
                </button>
              </form>
              <p className="mt-3 text-sm text-gray-500">
                Имэйл илгээхийг хүсвэл шууд дээрх имэйл хаягийг дарж болно.
              </p>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-3xl p-1 bg-gradient-to-br from-violet-600 via-fuchsia-500 to-rose-500 shadow-xl">
              <div className="rounded-3xl bg-white p-8">
                <h3 className="text-lg font-semibold">Түргэн холбоосууд</h3>
                <div className="mt-6 grid grid-cols-1 gap-4">
                  <a
                    href="mailto:munkhjargal.must@gmail.com"
                    className="rounded-2xl border border-gray-200 px-5 py-4 hover:bg-gray-50 transition font-medium"
                  >
                    Имэйл илгээх
                  </a>
                  <a
                    href="tel:+97699875884"
                    className="rounded-2xl border border-gray-200 px-5 py-4 hover:bg-gray-50 transition font-medium"
                  >
                    Дуудлага: 99875884
                  </a>
                  <a
                    href="tel:+97685335577"
                    className="rounded-2xl border border-gray-200 px-5 py-4 hover:bg-gray-50 transition font-medium"
                  >
                    Дуудлага: 85335577
                  </a>
                  <a
                    href="https://www.instagram.com/the_minus_7/?__pwa=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl border border-gray-200 px-5 py-4 hover:bg-gray-50 transition font-medium"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.facebook.com/minus.uso"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl border border-gray-200 px-5 py-4 hover:bg-gray-50 transition font-medium"
                  >
                    Facebook
                  </a>
                </div>
                <p className="mt-6 text-sm text-gray-500">
                  24–48 цагийн дотор хариу өгөхийг зорьдог.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
