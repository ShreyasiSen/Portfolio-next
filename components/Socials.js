import Link from 'next/link';
import {
  RiInstagramLine,
  RiYoutubeLine,
} from 'react-icons/ri';

const Socials = () => {
  return (
  <div className='flex items-center gap-x-5 text-xl'>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
    <RiInstagramLine/>
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
    <RiYoutubeLine/>
    </Link>
    
  </div>
  );
};

export default Socials;
