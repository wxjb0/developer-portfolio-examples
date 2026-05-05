export default function Footer() {
  return (
    <footer className="border-t border-text/10 px-6 py-8">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm text-text/40">
          © {new Date().getFullYear()} Portfolio. Built with React + TypeScript + Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}
