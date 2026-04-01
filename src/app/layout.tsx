import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const poppins = Poppins({
  variable: "--ff-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kaue.dev"), // Substitua pelo seu domínio de produção
  title: "Kauê Rian | Portfólio Pessoal",
  description: "Portfólio pessoal de Kauê Rian, Desenvolvedor Full Stack especializado em arquiteturas escaláveis e infraestrutura cloud.",
  openGraph: {
    title: "Kauê Rian | Desenvolvedor Full Stack",
    description: "Especialista em infraestrutura cloud (Oracle OCI/Docker) e desenvolvimento moderno com React e Node.js.",
    url: "https://kaue.dev", // Substitua pelo seu domínio real
    siteName: "Kauê Rian Portfolio",
    images: [
      {
        url: "/images/AchaAi.png", // Imagem de destaque para o preview
        width: 1200,
        height: 630,
        alt: "Kauê Rian Portfolio Preview",
      },
    ],
    locale: "pt-BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kauê Rian | Portfólio",
    description: "Desenvolvedor Full Stack & Cloud Infra.",
    images: ["/images/AchaAi.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <head>
        <link rel="shortcut icon" href="/images/logo.ico" type="image/x-icon" />
      </head>
      <body>
        <main>{children}</main>
        {/* Ionicons */}
        <Script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        />
        <Script
          noModule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        />
      </body>
    </html>
  );
}
