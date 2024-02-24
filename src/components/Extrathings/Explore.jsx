
import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from './styles';
import { exploreWorlds } from './constants/index';
import { staggerContainer } from './utils/motion';
import ExploreCard from './comps/ExploreCard';
import { TitleText, TypingText } from './comps/CustomTexts';
// import { ExploreCard, TitleText, TypingText } from '../Extrathings/comps';

const Explore = () => {
  const [active, setActive] = useState('world-2');

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        
        <TitleText
          title={<>Choose the feature you want <br className="md:block hidden" /> to explore</>}
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5 relative">
        <div className="gradient-02 z-0" />
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
