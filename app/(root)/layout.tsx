import Footer from "@/components/layout/Footer"
import Navbar from "@/components/layout/Navbar"

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen">
        <header>
          <Navbar />
        </header>

        <main className="flex-grow">
            {children}
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
  )
}
