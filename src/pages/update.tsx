import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function UpdateRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/');
  }, [router]);

  return null;
}
