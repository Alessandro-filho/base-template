import { ThemeProvider } from "./utils/theme-provider"

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    <div className="flex justify-center items-center h-lvh">
      <h1 className="text-[3.5em]">Seja Bem-vindo(a), utilize esse template como desejar.</h1>
    </div>
    </ThemeProvider>
  )
}
