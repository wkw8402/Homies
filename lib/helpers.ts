import sha256 from 'crypto-js/sha256';
import { headers } from 'next/headers';

export const hashPassword = (password: string) => {
  return sha256(password).toString();
};

export async function getData(
  url,
  options: RequestInit = {
    cache: 'no-store',
    headers: headers(),
  }
) {
  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  try {
    return res.json();
  } catch (error) {
    console.error('Unexpected end of JSON input', error);
    return null;
  }
}
