export default function About() {
  return (
    <main className="px-6 py-12">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-10">
        <section className="lg:col-span-7 space-y-8">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent">
                Minus
              </span>
              <span className="block text-gray-900 dark:text-gray-100">
                Ирээдүйн front-end хөгжүүлэгч
              </span>
            </h1>
            <div className="mt-5 flex flex-wrap gap-3">
              <span className="px-3 py-1 rounded-full text-sm bg-violet-100 text-violet-700">
                ШУТИС • 3-р курс
              </span>
              <span className="px-3 py-1 rounded-full text-sm bg-emerald-100 text-emerald-700">
                CEO • Тэнгэр Жаргалант Ложистик ХХК
              </span>
              <span className="px-3 py-1 rounded-full text-sm bg-sky-100 text-sky-700">
                19 настай
              </span>
            </div>
          </div>

          <p className="text-lg leading-8 text-gray-700 dark:text-gray-300">
            Би вебийн суурь технологиудаар чанартай, хүртээмжтэй туршлагыг шат
            дараатай бүтээхээр зорьдог. Миний анхаарлын цөм нь: цэгцтэй
            мэдээллийн архитектур, гүйцэтгэлийн хурд, бүх төрлийн дэлгэц дээрх
            найдвартай UI. Туршлагаа хуримтлуулж буй энэ үедээ бодит төслөөр
            суралцахаа илүүд үзэж, жижиг фичрүүдийг богино давтлагаар туршиж
            сайжруулдаг.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-5 shadow-sm">
              <h3 className="text-base font-semibold mb-3">Чиглэл</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>React/Next.js • Tailwind CSS</li>
                <li>Гүйцэтгэлийн оновчлол • Хүртээмж</li>
                <li>Ойлгомжтой, цэгцтэй UI/UX</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-5 shadow-sm">
              <h3 className="text-base font-semibold mb-3">Одоогоор</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>Компонентчлагдсан бүтэц, layout боловсруулалт</li>
                <li>Git/GitHub workflow, баримтжуулалт</li>
                <li>Жижиг API интеграц туршилтууд</li>
              </ul>
            </div>
          </div>
        </section>

        <aside className="lg:col-span-5">
          <div className="relative rounded-3xl p-1 bg-gradient-to-br from-violet-600 via-fuchsia-500 to-rose-500">
            <div className="rounded-3xl bg-white dark:bg-gray-900 p-8 h-full">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-violet-100 text-violet-700 grid place-items-center text-lg font-bold">
                    M
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Нэр</p>
                    <p className="font-semibold">Minus</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-700 grid place-items-center text-lg font-bold">
                    CEO
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Албан тушаал</p>
                    <p className="font-semibold">
                      Тэнгэр Жаргалант Ложистик ХХК-ийн Гүйцэтгэх захирал
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-sky-100 text-sky-700 grid place-items-center text-lg font-bold">
                    EDU
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Суралцаж буй</p>
                    <p className="font-semibold">ШУТИС • 3-р курс</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-rose-100 text-rose-700 grid place-items-center text-lg font-bold">
                    19
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Нас</p>
                    <p className="font-semibold">19 настай</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-3 divide-x divide-gray-200 dark:divide-gray-800 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                <div className="p-4 text-center">
                  <div className="text-2xl font-bold">2025</div>
                  <div className="text-xs text-gray-500">Одоо</div>
                </div>
                <div className="p-4 text-center">
                  <div className="text-2xl font-bold">UI/UX</div>
                  <div className="text-xs text-gray-500">Төвлөрөл</div>
                </div>
                <div className="p-4 text-center">
                  <div className="text-2xl font-bold">Next.js</div>
                  <div className="text-xs text-gray-500">Экосистем</div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
