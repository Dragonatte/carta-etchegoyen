import "./globals.css";

import { ReactNode, JSX } from "react";

import { Bebas_Neue, Montserrat } from "next/font/google";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: [ "latin" ],
  variable: "--font-bebas",
});

const montserrat = Montserrat( {
  weight: [ "400", "700" ],
  subsets: [ "latin" ],
  variable: "--font-montserrat",
});

type LayoutProps = {
  children: ReactNode;
};

export default function RootLayout( { children }: LayoutProps ): JSX.Element
{

  return (
    <html lang="es" className={`${bebas.variable} ${montserrat.variable} scroll-smooth`}>
      <body className={"bg-bg text-text antialiased font-body"}>
          <main className={"relative mx-auto max-w-6xl"}>
            {children}
          </main>
      </body>
    </html>
  );
}