import "./globals.css"
import { ToastProvider } from "@/components/ui/toast"
import ClientLayout from './ClientLayout'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen text-gray-900 bg-white">
        <ToastProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </ToastProvider>
      </body>
    </html>
  )
}
