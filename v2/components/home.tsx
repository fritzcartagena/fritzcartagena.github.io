import { useState } from 'react';
import Rocket from './rocket';
import Carousel from './carousel';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const workExperienceYear = new Date().getFullYear() - 2022;
  const marshallAge = new Date().getFullYear() - 2020;
  const studentStatus = 'College Freshman';
  const university = 'West Visayas State University';

  // TODO: Fix this. When clicked more, it should not push back
  const renderMore = (
    <div className='max-w-3xl'>
      <blockquote className="italic font-semibold text-gray-900 dark:text-white mb-3">
        <svg className="w-4 h-4 text-gray-400 dark:text-gray-600 mb-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
        </svg>
        <p>
          "bike stroll; chasing summits; feeding my loml; and making sure my dog is living his best life."</p>
      </blockquote>
      <p className='max-w-3xl mb-3'>
        As a {studentStatus}, I have alot to learn. I am currently learning the basics of programming at {university}, and I hope to
        apply that knowledge to real-world projects in the future.
      </p>
      <p className='max-w-3xl mb-3'>
        I have a good understanding of different programming languages, including JavaScript, Python, and C++, to name a few.
      </p>
      <p className='max-w-3xl mb-3'>
        Although I am very introverted, I like to help people when I can. I am always looking for ways to improve my skills and knowledge, and I am excited to see where my journey in programming will take me.
      </p>
      <p className='max-w-3xl mb-8'>
        Lastly, my {marshallAge} year old beagle, Marshall, who had been with me on my hikes. A lovely fellow that doesn't even know how to bark and
        filled with anxiety around other dogs. But humans? He loves them!
      </p>
        <Carousel />
      <button className='font-bold' onClick={() => setIsOpen(false)}>See less..</button>
    </div>
  )

  return (
    <div className='flex flex-col-reverse sm:flex-row sm:justify-around sm:items-center min-h-screen pt-24 pb-20 px-5'>
      <div>
        <h1 className='text-3xl mb-1 font-bold'>
          {t('Intro')}
        </h1>
        <p className='max-w-3xl mb-3'>
          Hey there! My name is <i>Fritz Anthony M. Cartagena</i>, An aspiring programmer who is learning code for <b>{workExperienceYear}</b> years.
        </p>
        <p className='max-w-3xl mb-3'>
          I learnt of my passion for code while in Junior high, and I hope to turn that passion into something more.
        </p>
        {isOpen ? renderMore : <button className='font-bold' onClick={() => setIsOpen(true)}>Read more..</button>}
      </div>
      <div>
        <Rocket />
      </div>
    </div>
  );
};

export default HomePage;
