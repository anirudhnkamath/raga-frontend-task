import React from 'react';

interface CardProps {
  timing: string;
  title: string;
  previous: number;
  current: number;
}

export default function Card({ timing, title, previous, current }: CardProps) {
  const colorMap: { [key: string]: string } = {
    Work: 'bg-work',
    Play: 'bg-play',
    Study: 'bg-study',
    Exercise: 'bg-exercise',
    Social: 'bg-social',
    'Self Care': 'bg-selfcare',
  };
  const bgcolor = colorMap[title];

  return (
    <section className="card h-full flex flex-col">
      <div className={`images text-white dark:text-black ${bgcolor} h-[50px] overflow-hidden flex items-center justify-end px-[2rem] rounded-t-2xl`}>
        <img src={`./images/icon-${title.replace(' ', '-').toLowerCase()}.svg`} alt={`${title} icon`} />
      </div>

      <div className={`fake ${bgcolor} rounded-b-3xl flex-grow`}>
        <div className="content bg-white dark:bg-darkblue rounded-2xl p-[1.5rem] pr-[2rem] flex flex-col justify-between h-full">
          <div className="top flex justify-between">
            <h1 className='dark:text-white text-black font-normal'>{title}</h1>
            <div className="cursor-pointer">
              <img src="./images/icon-ellipsis.svg" alt="Menu" />
            </div>
          </div>

          <div className="bottom mt-auto">
            <div className='dark:text-white text-black text-4xl font-thin'>
              {current}{current === 1 || current === 0 ? "Hr" : "Hrs"}
            </div>
            <div className='text-[#4c528a] dark:text-desaturatedblue'>
              Last {timing} - {previous}{previous === 0 || previous === 1 ? "Hr" : "Hrs"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
