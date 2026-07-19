import { Footprints } from "lucide-react"

import { UploadWidget } from "../components/upload-widget"

export default function App() {
  return (
    <>
      <main className="h-dvh flex flex-col items-center justify-center p-10">
        <UploadWidget />
      </main>

      <footer className="absolute bottom-4 right-4 flex items-center gap-1 text-zinc-500 text-xxs">
        <Footprints strokeWidth={1.5} className="size-3" />
        <span>
          deployed with {import.meta.env.VITE_DEPLOY_PROVIDER} by @burndev on{" "}
          {new Date().getDate().toString()}/{new Date().getMonth().toString()}/
          {new Date().getFullYear().toString()} - {new Date().getHours().toString()}:
          {new Date().getMinutes().toString()}
        </span>
      </footer>
    </>
  )
}
