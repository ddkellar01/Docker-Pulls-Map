import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Docker Pulls Map 3D',
  description: 'Real-time 3D Google Earth Container Pull Telemetry',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

  return (
    <html lang="en" className="dark">
      <head>
        <script
          src={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=weekly&libraries=marker`}
          async
          defer
        />
      </head>
      <body className="bg-zinc-950 text-zinc-100 antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
