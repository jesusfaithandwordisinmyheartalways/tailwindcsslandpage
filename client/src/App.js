


import React, { useEffect, useState } from 'react';
import './App.css';
import { Wallet, BanknoteArrowUp, House, Lightbulb, MoveRight, Copyright } from 'lucide-react';

function App() {
  const [isInView, setIsInView] = useState(false);
  const [isArrowInView, setIsArrowInView] = useState(false);
  const [isConnectInView, setIsConnectInView] = useState(false);
  const [isWorkInView, setIsWorkInView] = useState(false); // <-- New State

  const [iconSize, setIconSize] = useState(60); 


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.classList.contains('custom-mortgage') && entry.isIntersecting) {
            setIsInView(true);
          } else if (entry.target.classList.contains('custom-arrow') && entry.isIntersecting) {
            setIsArrowInView(true);
          } else if (entry.target.classList.contains('custom-connect') && entry.isIntersecting) {
            setIsConnectInView(true);
          } else if (entry.target.classList.contains('custom-work') && entry.isIntersecting) {
            setIsWorkInView(true); // <-- Set Work section
          }
        });
      },
      { threshold: 0.5 }
    );

    const element = document.querySelector('.custom-mortgage');
    const arrowElement = document.querySelector('.custom-arrow');
    const connectElement = document.querySelector('.custom-connect');
    const workElement = document.querySelector('.custom-work'); // <-- New

    if (element) observer.observe(element);
    if (arrowElement) observer.observe(arrowElement);
    if (connectElement) observer.observe(connectElement);
    if (workElement) observer.observe(workElement); // <-- New

    return () => {
      if (element) observer.unobserve(element);
      if (arrowElement) observer.unobserve(arrowElement);
      if (connectElement) observer.unobserve(connectElement);
      if (workElement) observer.unobserve(workElement); // <-- New
    };
  }, []);





  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth >= 420) {
        setIconSize(81);
      } else {
        setIconSize(60);
      }
    };

    updateSize(); // Initial check
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);


  




  return (
    <>
      <div className="w-screen overflow-hidden">
        {/* Top Section */}
        <div className="image-landpage"></div>

        <div className="flex items-center justify-flex-start mx-auto max-w-2000 relative top-[-410px] ">
          <div className="flex items-center justify-flex-start z-100">
            <Wallet  size={80} color="green" className='custom-wallet' />
            <h3 className="mx-3 font-sans font-bold text-white transition-all
             ease-in z-100 text-8xl duration-3000 custom-fade-in custom-mobile-section">
              CREDIT FIX
            </h3>
          </div>

        </div>



        <div className="flex items-center justify-start mx-auto relative top-[-310px] left-[40px]">
          <h3 className="font-mono text-3xl font-bold text-white
            custom-credit-text custom-mobile-section-two ">
            NEED YOUR WITH YOUR CREDIT?
          </h3>
        </div>


        <div className="flex relative top-[-290px] left-[161px]">
          <button className="p-3 p-5 font-serif text-2xl font-bold text-center text-white
           bg-black border-2 border-green-500 border-solid cursor-pointer
             custom-pre-qual  custom-mobile-section-three ">
            CONTACT OUR SPECIALIST NOW
          </button>
        </div>
      </div>



      {/* Mortgage Section */}
      <div className={`w-screen h-[310px] overflow-hidden bg-white custom-mortgage ${isInView ? 'animate-fadeIn' : ''}`}>
        <div className="flex flex-row items-center justify-around mx-auto max-w-1500">
          <div>
            <House className='custom-icon-section' size={81} color="green" />
            <div>
              <h3 className="m-3 font-serif text-2xl text-green-400 custom-mortgage-header ">GET LOW DOWN PAYMENT</h3>
              <p className="font-sans text-black w-29 custom-mortgage-text ">
              Mortgages down payments are desirable for clients in today's market</p>
            </div>
          </div>

          <div>
            <Lightbulb className='custom-icon-section' size={81} color="orange" />
            <div>
              <h3 className="m-3 font-serif text-2xl text-purple-400 custom-mortgage-header ">FAST RESPONSE</h3>
            </div>
            <p className="font-sans text-black w-29 custom-mortgage-text">Will respond in text and email within 24 hours</p>
          </div>

          <div>
            <BanknoteArrowUp className='custom-icon-section'  size={81} color="purple" />
            <div>
              <h3 className="m-3 font-serif text-2xl text-orange-400 custom-mortgage-header ">WALK FROM THE BANK HAPPY</h3>
            </div>
            <p className="font-sans text-black w-29 custom-mortgage-text ">Enjoy the process for buying power and for your home</p>
          </div>
        </div>
      </div>

      {/* Connect Section */}
      <div className={`w-screen overflow-hidden h-[489px] mt-[10px] p-9 custom-connect ${isConnectInView ? 'animate-slideInRightCurl' : ''}`}>
        <div className="flex flex-wrap items-center justify-center mx-auto max-w-1000">
          <div><h3 className="font-sans text-5xl font-bold text-black custom-us-text ">How To Connect With Us</h3></div>
        </div>

        <div className={`flex flex-row items-center justify-around max-w-1500 p-4 custom-arrow ${isArrowInView ? 'animate-slideInLeftFade' : ''}`}>
          <div className='flex flex-row items-center justify-center'>
            <div><h3 className='font-sans text-5xl font-bold text-green-600  custom-number'>1</h3></div>
            <MoveRight size={98} color='orange' className='relative top-0 left-[90px] custom-arrow-section ' />
          </div>

          <div className='flex flex-row items-center justify-center'>
            <div><h3 className='font-sans text-5xl font-bold text-green-600 custom-number  '>2</h3></div>
            <MoveRight size={98} color='orange' className='relative top-0 left-[90px] custom-arrow-section' />
          </div>

          <div className='flex flex-row items-center justify-center'>
            <div><h3 className='font-sans text-5xl font-bold text-green-600 custom-number '>3</h3></div>
          </div>
        </div>

        <div className='flex flex-row items-center justify-around p-5 mx-auto max-w-1500 '>
          <div>
            <h3 className='font-sans text-2xl font-bold text-black custom-online'>Apply Online</h3>
            <div className='w-40 custom-online-text  '>Take a few minutes to apply with our company.
             We will help you along the way to start your process</div>
          </div>

          <div>
            <h3 className='font-sans text-2xl font-bold text-black custom-online '>Connect with a Specialist</h3>
            <div className='w-40 custom-online-text '>A lender will reach out to you within a minute from your initial contact. 
            This is the correct way to start the process.</div>
          </div>

          <div>
            <h3 className='font-sans text-2xl font-bold text-black custom-online '>You Deserve The Help</h3>
            <div className='w-40 custom-online-text '>Enjoy buying power to repair your credit. 
            Stop the worry of how to afford and enjoy the free time of financial credit freedom.</div>
          </div>
        </div>
      </div>

     

      <div className={`w-screen p-10 overflow-hidden h-[410px] bg-teal-700 custom-work ${isWorkInView ? 'animate-work' : ''}`}>
        <div className='flex items-center justify-center p-10 mx-auto'>
          <div><h3 className='font-sans text-3xl font-bold text-white work-title custom-title '>
          CREDIT FIX WORKS FOR YOU</h3></div>
        </div>

        <div className='flex items-center justify-center mx-auto max-w-1000'>
          <p className='p-10 font-serif text-2xl text-center text-white w-45 work-paragraph custom-title-text'>
            We will help you from the start and make sure that your credit repair goes smoothly and also provide lifetime assistant to you and your family to avoid any disruptions with your credit
          </p>
        </div>

        <div className='flex items-center justify-center mx-auto max-w-1000'>
          <button className='cursor-pointer p-5 font-bold text-center text-white bg-orange-500 border-4
           border-black border-solid hover:bg-cyan-300 work-button custom-contact-btn'>
            Contact US
          </button>
        </div>


      </div>





      <div className=' custom-footer '>
        <div className=' flex items-center justify-center gap-3 mx-auto mx-w-1000 relative bottom-[0px]'>
            <div><Copyright color='white' size={31}  /></div>
            <div><p className=' text-center text-white font-sans text-2xl custom-footer-text '>Rights Reserved</p></div>


        </div>


      </div>







    </>
  );
}

export default App;