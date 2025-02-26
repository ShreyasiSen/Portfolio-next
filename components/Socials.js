import Link from 'next/link';
import { RiGithubLine } from 'react-icons/ri';
import { SiLeetcode, SiCodeforces, SiCodechef, SiLinkedin, SiTwitter } from 'react-icons/si';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-3 text-xl">
      <a href="https://x.com/ShreyasiSen10" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300">
        <SiTwitter />
      </a>
      <a href="https://www.linkedin.com/in/shreyasisen/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300">
        <SiLinkedin />
      </a>
      <a href="https://github.com/ShreyasiSen" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300">
        <RiGithubLine />
      </a>
      <a href="https://leetcode.com/u/Shreyasi_Sen/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300">
        <SiLeetcode />
      </a>
      <a href="https://mirror.codeforces.com/profile/Shreyasi_Sen" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300">
        <SiCodeforces />
      </a>
      <a href="https://www.codechef.com/users/shreyasisen05" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300">
        <SiCodechef />
      </a>
    </div>
  );
};

export default Socials;