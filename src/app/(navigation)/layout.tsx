import Navbar from "@/components/navbar";

import { cn } from "@/lib/utils";

export default function NavigationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6">
      {children}
      <Navbar />
    </div>
  );
}
