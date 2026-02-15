import "./globals.css";
import Header from "@/layout/Header/Header";

export const metadata = {
  title: "Korivo - Sistema Empresarial",
  description: "Sistema de Gerenciamento e Organização Empresarial",
  icons: {
    icon: "/krvicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={''}>
        <Header />
        {children}
      </body>
    </html>
  );
}
