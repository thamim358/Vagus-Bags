import React from 'react';

// Array of customer testimonials for Vagus Bags
const customerTestimonials = [
  {
    name: 'Sarah Thompson',
    position: 'Frequent Traveler',
    quote: 'Vagus Bags have become my go-to travel companions. Stylish, durable, and thoughtfully designed. They make every journey an absolute pleasure.',
    imageSrc: 'https://example.com/sarah-thompson-avatar.jpg'
  },
  {
    name: 'David Martinez',
    position: 'Business Professional',
    quote: "I've tried many travel bags, but Vagus Bags stand out for their quality.They're not just bags they're a statement of sophistication and functionality.",
    imageSrc: 'https://example.com/david-martinez-avatar.jpg'
  },
  {
    name: 'Grace Kim',
    position: 'Adventure Enthusiast',
    quote: "Whether it's a weekend getaway or a longer expedition, Vagus Bags have proven their reliability. I love the versatility and chic design.",
    imageSrc: 'https://example.com/grace-kim-avatar.jpg'
  },
  {
    name: 'Michael Turner',
    position: 'Tech Explorer',
    quote: 'As a tech enthusiast, I appreciate the smart features of Vagus Bags. They keep my gadgets organized and easily accessible during my travels.',
    imageSrc: 'https://example.com/michael-turner-avatar.jpg'
  }
];

const Testimonials = () => {
  return (
    <>
      <div className="p-12">
        <h1 className='text-4xl sm:text-4xl lg:text-5xl  text-[#f87947] font-bold text-start wow fadeInUp pt-4'>Vagus Bags Testimonials</h1>
       

        <div className="grid mb-8 drop-shadow-xl shadow-xl  md:mb-12 md:grid-cols-2 bg-white mt-5" style={{borderRadius:"30px"}}>
          {customerTestimonials.map((testimonial, index) => (
            <figure key={index} className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-lg  md:border-edark:border-gray-700">
              <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 ">
                <h3 className="text-lg font-semibold text-gray-900 ">{testimonial.quote}</h3>
                <p className="my-4">{testimonial.quote}</p>
              </blockquote>
              <figcaption className="flex items-center justify-center">
                <img className="rounded-full w-9 h-9" src={testimonial.imageSrc} alt={`${testimonial.name}'s profile picture`} />
                <div className="space-y-0.5 font-medium  text-left rtl:text-right ms-3">
                  <div className='text-[#f87947]'>{testimonial.name}</div>
                  <div className="text-sm text-gray-500 ">{testimonial.position}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
