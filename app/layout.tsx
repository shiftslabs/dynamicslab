import './globals.css';

export const metadata = {
  title: 'DynamicsLab — Dynamics 7 (MetierBM)',
  description: 'Your business operating system, run well.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 antialiased">{children}</body>
    </html>
  );
}
