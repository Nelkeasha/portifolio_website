import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        <span className='block font-fraunces text-lg font-semibold sm:text-xl'>Nelly</span>
        <span className='block mt-1 text-xs sm:text-sm font-normal'>
          software developer based in{" "}
          <span className='whitespace-nowrap'>
            Kigali
            <span className='relative top-[0.72em] ml-[0.15em] text-[0.72em] leading-none'>
              RW
            </span>
          </span>
        </span>
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          CMU-Africa, kLab, and now <br /> a Netlink internship
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Learn more
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          Patient monitoring, events, and hiring tools. <br /> Curious about the work?
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          See the work
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        Building something, or hiring? <br /> Send a note.
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Let's talk
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;
