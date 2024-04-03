import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import './styles.css'
import Header from "@/components/Header";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}</body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
