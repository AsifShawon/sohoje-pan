
import RootClientLayout from "./RootClientLayout";

export const metadata = {
  title: "সহজে পান",
  description: "Asif Bhuiyan Shawon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RootClientLayout>
      {children}
    </RootClientLayout>
  );
}
