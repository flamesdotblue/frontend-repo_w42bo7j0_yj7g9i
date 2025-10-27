export default function Footer() {
  return (
    <footer className="w-full py-10">
      <div className="max-w-5xl mx-auto px-6 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} Hello World. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
