import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <div className='logo'>
      <Image
        src='/images/logo.png'
        alt='logga för villa ljungbacken. Bokstaven L med vinrankor och ett hus, allt i svart'
        width={35}
        height={35}
      />
      <Link href='/'>Villa Ljungbacken</Link>
    </div>
  );
}
