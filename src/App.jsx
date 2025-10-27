import Header from './components/Header'
import Hero from './components/Hero'
import WaitlistForm from './components/WaitlistForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50 text-gray-900">
      <Header />
      <main>
        <Hero />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
