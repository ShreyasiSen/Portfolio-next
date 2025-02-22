import Link from 'next/link';
import { RiGithubLine } from 'react-icons/ri';
import { SiLeetcode, SiCodeforces } from 'react-icons/si';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-xl">
      <a href="https://github.com/ShreyasiSen" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300">
        <RiGithubLine />
      </a>
      <a href="https://leetcode.com/u/Shreyasi_Sen/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300">
        <SiLeetcode />
      </a>
      <a href="https://mirror.codeforces.com/profile/Shreyasi_Sen" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300">
        <SiCodeforces />
      </a>
    </div>
  );
};

export default Socials;
