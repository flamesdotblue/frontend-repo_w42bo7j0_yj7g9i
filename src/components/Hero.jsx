export default function Hero() {
  return (
    <section className="w-full py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Hello, world!
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            A minimal landing page with a single-field waitlist. Drop your email to get early access.
          </p>
          <ul className="mt-6 space-y-2 text-gray-600">
            <li>• Clean, focused design</li>
            <li>• Email validation and instant feedback</li>
            <li>• Securely stored in the database</li>
          </ul>
        </div>
        <div className="relative">
          <div className="aspect-video w-full rounded-2xl bg-gradient-to-br from-indigo-100 to-blue-100 shadow-inner" />
        </div>
      </div>
    </section>
  )
}
