import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('https://blog.rhinolinux.org');
  }, [router]);

  return null; // Don't render anything.
}
