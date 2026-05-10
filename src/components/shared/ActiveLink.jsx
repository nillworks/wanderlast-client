'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ActiveLink = ({ href, name }) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-sm font-medium transition ${
        isActive
          ? 'text-cyan-600 border-b-2 border-cyan-600 pb-1'
          : 'text-gray-700 hover:text-cyan-600'
      }`}
    >
      {name}
    </Link>
  );
};

export default ActiveLink;
