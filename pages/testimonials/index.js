import TestimonialSlider from "../../components/TestimonialSlider";
import Circles from "../../components/Circles";

import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

const Testimonials = () => {
  return(
    <div className='h-full bg-primary/30 py-32 text-center'>
      <Circles />
      <div className='container mx-auto h-full flex flex-col justify-center'>
        {/*title*/}
        <motion.h2 
        variants={fadeIn('up',0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className='h2 mb-8 xl:mb-0'>
           What are the <span className='text-accent'>reviews.</span>
        </motion.h2>
        {/*slider*/}
        <motion.div
        variants={fadeIn('up',0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        >
          <TestimonialSlider/>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
