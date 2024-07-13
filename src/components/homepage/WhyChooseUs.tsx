import Image from 'next/image'
import React from 'react'

const WhyChooseUs = () => {

  const cards = [
    {
      title: "We provide safety",
      description: "Our top priority is ensuring the safety and security of your home and family with our thoroughly vetted housemaids.",
      image: "/images/safety.png",
    },
    {
      title: "We provide quality",
      description: "Experience unparalleled service quality with our trained and professional housemaids who are committed to excellence.",
      image: "/images/quality.png",
    },
    {
      title: "Affordable",
      description: "Get the best housekeeping services at competitive prices. Quality service doesn't have to break the bank.",
      image: "/images/affordable.png",
    },
    {
      title: "Convenient Scheduling",
      description: "Our flexible scheduling options ensure that you get cleaning services at your convenience, fitting perfectly into your busy lifestyle.",
      image: "/images/convenience.png",
    },
  ];
  

  return (
    <div className='container pt-6'>
      <div className='flex flex-col items-center'>
        <h1 className='text-4xl font-bold pb-3'>Why Choose Us?</h1>
        <hr className='custom-hr'/>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 p-10">
      {cards.map((card, index) => (
        <div key={index} className="card card-side bg-base-100 shadow-xl">
        <figure>
          <Image
            width={800}
            height={500}
            src={card.image}
            alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{card.title}</h2>
          <p>{card.description}</p>
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div> */}
        </div>
      </div>
    ))}
    </div>
    </div>
  )
}

export default WhyChooseUs
