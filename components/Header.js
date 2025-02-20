import Image from "next/image";
import Link from "next/link";

//components
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className='absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[80px]'>
      <div className='container mx-auto flex justify-between items-center'>
        {/*logo*/}
        <Link href={'/'}>
          <div className='h-20 flex items-center'> {/* Adjust the height as needed */}
            <Image 
              src={'/symbol.png'} 
              width={220} 
              height={45} 
              alt="Logo"
              priority={true}
              className='h-full w-auto' // Ensure the image takes the full height of the container
            />
          </div>
        </Link>
        {/*socials*/}
        <Socials />
      </div>
    </header>
  );
};

export default Header;