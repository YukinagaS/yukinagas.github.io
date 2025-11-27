import "./globals.css";
import { Zen_Kaku_Gothic_Antique, Gochi_Hand } from 'next/font/google'

const zenKaku = Zen_Kaku_Gothic_Antique({
  weight: ["300", "400", "500", "700", "900"],
  variable: '--font-zenkaku',
  display: 'swap',
})

const gochiHand = Gochi_Hand({
  weight: ["400"],
  variable: '--font-gochihand',
  display: 'swap',
})

export const metadata = {
  title: 'stuart.tokyo',
  description: '雪永スチュアートのポートフォリオサイト'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp" className={`${zenKaku.variable} ${gochiHand.variable}`}>
      <body className=" bg-neutral-dk text-neutral-lt font-zenkaku">
        <div className="min-h-screen w-full mx-auto flex flex-col sm:w-lg">
          <main className="flex-1">
            {children}
          </main>
          <footer className="py-3 font-light bg-neutral-xdk text-xs text-center">
            <p>© Yukinaga Heavy Industries, Inc.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
