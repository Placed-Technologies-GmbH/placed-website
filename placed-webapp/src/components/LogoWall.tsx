import React from 'react';

const logos = [
  {
    src: 'https://logo.clearbit.com/stripe.com',
    alt: 'Stripe'
  },
  {
    src: 'https://logo.clearbit.com/vercel.com',
    alt: 'Vercel'
  },
  {
    src: 'https://logo.clearbit.com/notion.so',
    alt: 'Notion'
  },
  {
    src: 'https://logo.clearbit.com/slack.com',
    alt: 'Slack'
  },
  {
    src: 'https://logo.clearbit.com/airbnb.com',
    alt: 'Airbnb'
  },
  {
    src: 'https://logo.clearbit.com/github.com',
    alt: 'GitHub'
  }
];

const LogoWall = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-8 md:px-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center opacity-70">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="max-h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoWall;
