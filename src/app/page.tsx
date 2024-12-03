"use client";

import React, { useState, useEffect } from 'react';
import data from './data/data.json';
import Card from './components/card';
import { gsap } from 'gsap';

export default function Page() {
  const [time, setTime] = useState(0);
  const [isDark, setIsDark] = useState(true);

  const elements = data.map((item) => {
    return (
      <Card
        key={item.title}
        timing={time === 0 ? "day" : time === 1 ? "week" : "month"}
        title={item.title}
        current={
          time === 0
            ? item.timeframes.day.current
            : time === 1
              ? item.timeframes.week.current
              : item.timeframes.month.current
        }
        previous={
          time === 0
            ? item.timeframes.day.previous
            : time === 1
              ? item.timeframes.week.previous
              : item.timeframes.month.previous
        }
      />
    );
  });

  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { y:"-8px", duration: 0.3, ease: 'power2.out' });
      });
  
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { y:0, duration: 0.3, ease: 'power2.out' });
      });
    });
  }, []);

  const toggleDark = () => {
    setIsDark(!isDark);
    const cards = document.querySelectorAll('.card');
  
    // Create a GSAP timeline to sequence the animations
    const tl = gsap.timeline();
  
    // First, animate the cards up with stagger
    tl.to(cards, {
      y: '-10px',
      duration: 0.1,
      ease: 'expo.out',
      stagger: 0.1,
    });
  
    // Then, animate them back to the original position with stagger
    tl.to(cards, {
      y: 0,
      duration: 0.1,
      ease: 'expo.out',
      stagger: 0.1,
    }, 0.1);
  };
  

  return (
    <div className={`${isDark && "dark"}`}>
      <section className={`min-h-screen bg-[#E3E3E3] dark:bg-verydarkblue p-[1rem] sm:px-[10vw] sm:py-[10vh] flex justify-center items-center flex-col gap-[2rem]`}>
        <section className='w-full flex justify-center'>
          <button className='text-white w-[15rem] rounded dark:bg-[#E3E3E3] dark:text-black text-white bg-darkblue font-rubik py-[0.5rem] px-[1rem] rounded-2xl' onClick={()=>toggleDark()}>{isDark? "Light": "Dark"} Mode</button>
        </section>
        <section className='font-rubik grid gap-[1rem] sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] sm:auto-rows-fr w-full h-full'>
          <div className="hero sm:row-start-1 sm:row-end-3 flex flex-col h-full">
            <div className="fake bg-[#ffffff] dark:bg-darkblue rounded-t-3xl flex-grow">
              <div className="profile bg-blue rounded-2xl flex justify-evenly p-[1rem] sm:flex-col">
                <div className='grid place-content-center grow'>
                  <img
                    src="./images/image-jeremy.png"
                    alt="Jeremy"
                    height="100"
                    width="100"
                    className='rounded-[50%] border-[5px]'
                  />
                </div>
                <div className='flex flex-col justify-center p-[1rem]'>
                  <p className='text-xl text-paleblue'>Report for</p>
                  <p className='text-3xl text-white'>Jeremy Robertson</p>
                </div>
              </div>
            </div>

            <div className="buttons bg-[#ffffff] dark:bg-darkblue flex justify-evenly text-[#4c528a] dark:text-desaturatedblue py-[1.5rem] rounded-b-2xl text-lg sm:flex-col sm:p-[1rem] sm:gap-[1rem]">
              <button className={`daily ${time === 0? 'dark:text-white text-black': ''} hover:text-black dark:hover:text-white`} onClick={() => setTime(0)}>Daily</button>
              <button className={`weekly ${time === 1? 'dark:text-white text-black': ''} hover:text-black dark:hover:text-white`} onClick={() => setTime(1)}>Weekly</button>
              <button className={`monthly ${time === 2? 'dark:text-white text-black': ''} hover:text-black dark:hover:text-white`} onClick={() => setTime(2)}>Monthly</button>
            </div>
          </div>

          {elements}
        </section>
      </section>
    </div>
  );
}
