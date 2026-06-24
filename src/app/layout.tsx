import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { Nav } from '@/components/Nav';
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.devlucasgabriel.com.br'),
  title: 'Lucas Gabriel | Desenvolvedor Full Stack Pleno',
  description:
    'Desenvolvedor Full Stack Pleno especializado em sistemas em produção — performance, escalabilidade e arquitetura limpa. Node.js, NestJS, Next.js, React Native, C#/.NET, PostgreSQL e Docker.',
  keywords: [
    'Desenvolvedor Full Stack', 'Full Stack Developer', 'Node.js', 'NestJS', 'Next.js',
    'React', 'React Native', 'TypeScript', 'C#', '.NET', 'PostgreSQL', 'Docker', 'Lucas Gabriel',
  ],
  authors: [{ name: 'Lucas Gabriel', url: 'https://www.devlucasgabriel.com.br' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.devlucasgabriel.com.br',
    title: 'Lucas Gabriel | Desenvolvedor Full Stack Pleno',
    description:
      'Sistemas em produção com performance medida (~900ms → ~94ms), multi-tenant e arquitetura escalável.',
    siteName: 'Lucas Gabriel — Portfólio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lucas Gabriel | Desenvolvedor Full Stack Pleno',
    description: 'Sistemas em produção: performance, escala e arquitetura limpa.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${inter.variable} font-sans antialiased bg-background text-foreground min-h-screen overflow-x-hidden`}>
        <LanguageProvider>
          <span id="top" />
          <Nav />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
