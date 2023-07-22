type Card = {
  title: string;
  description: string;
  icon?: string;
  note?: string;
};
export const aboutMe: Array<Card> = [
  {
    title: "Born",
    description: `What a surprise, eh!
      OK, scroll to 
      next card`,
  },
  {
    title: `Followed My
  Passion`,
    description: `Computers have
    been my passion 
    since my childhood*.
    
    So I decided to be a
    Computer Engineer.
    `,
    note: `*: Thanks to my mum and dad for introducing
    me with computers at a young age.`,
  },
  {
    title: `Started 
    Programming`,
    description: `Everything started
    with Python!
    
    Fundamentals,
    basics and few
    console apps ! `,
  },
  {
    title: `World-wide
    Web`,
    description: `I woke up one
    morning and ta da!
    I saw “Hello World” 
    in Browser Window.
    
    Learned HTML,CSS
    and Fundamental JS`,
  },
  {
    title: `Let’s get the
    Sidekicks`,
    description: `In these days, just
    HTML, CSS and
    Vanilla JS is never
    enough.
    
    So I decided to learn
    React.js`,
  },
];

export const techSkills: Array<Card> = [
  {
    title: `HTML`,
    description: `Every web page
    needs a skeleton !
    
    Sounds like human,
    right ?`,
    icon: `/html.svg`,
  },
  {
    title: `CSS`,
    description: `And these web 
    pages deserves
    good styling`,
    icon: `/css.svg`,
  },
  {
    title: "JavaScript",
    description: `We built web page,
    stylized it. 
    
    Time to add some
    interaction`,
    icon: `/js.svg`,
  },
  {
    title: "TypeScript",
    description: `Same with 
    JavaScript but 
    more secure!`,
    icon: `/ts.svg`,
  },
  {
    title: "React.js",
    description: `Powerful toy for 
    a developer. 
    
    More complex things
    possible with it.`,
    icon: `/react.svg`,
  },
  {
    title: "TailwindCSS",
    description: `We can describe
    tailwind like this:
    
    If CSS is style, 
    tailwind stylist.`,
    icon: `/tailwindcss.svg`,
  },
];

export const softSkills: Array<Card> = [
  {
    title: `Undaunted`,
    description: `There's a job,
    but the team 
    is hesitant?
    
    No problem, I’ll be
    there.`,
    icon: `/eye.svg`,
  },
  {
    title: `Logic-Orientated`,
    description: `Everybody can make
    some decisions.
    
    But in chaos, Logic
    orientated persons
    shows their 
    difference`,
    icon: `/brain.svg`,
  },
  {
    title: `Researcher`,
    description: `Nobody can know
    everything!
    
    But the most
    important thing is
    willing to conducting
    research to get
    knowledge.`,
    icon: `/microscope.svg`,
  },
  {
    title: `Team Player`,
    description: `Always been wanted
    person to work with.
    `,
    icon: `/people.svg`,
  },
];
