import { Rocket } from 'lucide-react'

export default function Header() {
  return (
    <header className="w-full py-6">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-lg">
            <Rocket size={20} />
          </div>
          <span className="text-xl font-semibold tracking-tight">Hello World</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
          <a href="#waitlist" className="hover:text-gray-900 transition-colors">Waitlist</a>
        </nav>
      </div>
    </header>
  )
}
