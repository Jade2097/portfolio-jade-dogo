"use client";

import { usePathname } from 'next/navigation';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return pathname === '/' ? <>{children}</> : <div className="legacy-page">{children}</div>;
}
