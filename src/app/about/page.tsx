import React from 'react';

const About = () => {
  return (
        <section className="about h-screen flex items-center justify-start bg-cover text-white px-10" style={{backgroundImage: "url('/best-watches-bg.jpg')"}}>
            <div className="bg-black bg-opacity-60 p-8 rounded-md max-w-lg">
                <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">About US</h2>
                <p>Welcome to wWatch World, share we belive a watch is more than just an accessory it is a statment of style, precision, and crafsmanship. Our mission is to bring you a diverse selection of premium timepieces from around the globe, each chosen for its quality and unique design. we are here to help you find the perfect piece to complement your personality and elevate your look.</p>
            </div>
        </section>
    );
}

export default About;
