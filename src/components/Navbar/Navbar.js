import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import { Transition } from "@headlessui/react";

function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`header-area formobile-menu header--transparent`}>
      <div className="header-wrapper" id="header-wrapper">
        <div className="header-left">
          <div className="logo w-72">
            <a href="/home">
              <img
                src="https://res.cloudinary.com/dymlg8elg/image/upload/v1726666635/NB-1-removebg-preview_cevjr5.png"
                alt="NorthernBox Logo"
                className="w-full h-auto"
              />
            </a>
          </div>
        </div>
        {/*  */}
        <div className="header-right flex items-center">
          <div className="mainmenunav d-lg-block mx-auto">
            <nav className={`main-menu-navbar`}>
              <ul className="mainmenu text-xl">
                <li className="has-droupdown">
                  <a href="home" >
                    Home
                  </a>
                </li>
                <li>
                  <a href="about" >
                    Community
                  </a>
                </li>
                <li className="has-droupdown">
                  <a>Activities</a>
                  <ul className="submenu">
                    <li>
                      <a href="datacamp_donates" >
                        Datacamp Donate
                      </a>
                    </li>
                    <li>
                      <a href="events" >
                        Events
                      </a>
                    </li>
                    <li>
                      <a href="blogs" >
                        Blogs
                      </a>
                    </li>
                    {/* <li>
                      <a href="news" onClick={handleNavLinkClick}>
                        News
                      </a>
                    </li> */}
                  </ul>
                </li>
                {/* <li>
                  <a href="contact" onClick={handleNavLinkClick}>
                    Hire Talent
                  </a>
                </li> */}
                <li>
                  <a href="contact" >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-btn ml-auto">
            <a className="rn-btn" href="membership">
              <span>Get Started</span>
            </a>
          </div>
          <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          {/* <div className="close-menu d-block d-lg-none pl-4" >
            <span className="closeTrigger text-2xl">
              <AiIcons.AiOutlineClose />
            </span>
          </div> */}
        </div>
        {/*  */}
      </div>
      <Transition
  show={isOpen}
  enter="transition ease-out duration-100 transform"
  enterFrom="opacity-0 scale-95"
  enterTo="opacity-100 scale-100"
  leave="transition ease-in duration-75 transform"
  leaveFrom="opacity-100 scale-100"
  leaveTo="opacity-0 scale-95"
>
  {(ref) => (
    <div className="md:hidden" id="mobile-menu">
      <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {/*  */}
        <div className="header-right flex items-center">
          <div className="mainmenunav d-lg-block mx-auto">
            <nav className={`main-menu-navbar`}>
              <ul className="mainmenu text-xl">
                <li className="has-droupdown">
                  <a href="home" >
                    Home
                  </a>
                </li>
                <li>
                  <a href="about" >
                    Community
                  </a>
                </li>
                <li className="has-droupdown">
                  <a>Activities</a>
                  <ul className="submenu">
                    <li>
                      <a href="datacamp_donates" >
                        Datacamp Donate
                      </a>
                    </li>
                    <li>
                      <a href="events" >
                        Events
                      </a>
                    </li>
                    <li>
                      <a href="blogs" >
                        Blogs
                      </a>
                    </li>
                    {/* <li>
                      <a href="news" onClick={handleNavLinkClick}>
                        News
                      </a>
                    </li> */}
                  </ul>
                </li>
                {/* <li>
                  <a href="contact" onClick={handleNavLinkClick}>
                    Hire Talent
                  </a>
                </li> */}
                <li>
                  <a href="contact" >
                    Contact
                  </a>
                </li>
                <li>
                <div className="header-btn ml-auto">
                  <a className="" href="membership" style={{
                      backgroundColor: '#007bff',
                      padding: '10px 20px',
                      borderRadius: '5px',
                      color: '#fff',
                      textDecoration: 'none',
                    }}>
                    <span>Get Started</span>
                  </a>
                </div>
                </li>
              </ul>
            </nav>
          </div>
          
        </div>
        {/*  */}
      </div>
    </div>
  )}
</Transition>

    </header>
  );
}

export default Navbar;