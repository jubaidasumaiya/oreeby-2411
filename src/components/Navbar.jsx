import { useState, useRef, useEffect } from "react";
import Container from './Container';
import { FaBars, FaCartArrowDown, FaSortDown, FaUser, FaSearch } from "react-icons/fa";
import { GoChevronRight } from 'react-icons/go';

const Navbar = () => {
  const catRef = useRef(null);
  const accRef = useRef(null);
  const [show, Setshow] = useState(false);
  const [accshow, setAccShow] = useState(false);

  useEffect(() => {
    const handleClick = (e) => {
      if (catRef.current && !catRef.current.contains(e.target)) {
        Setshow(false);
      }
      if (accRef.current && !accRef.current.contains(e.target)) {
        setAccShow(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="bg-[#F5F5F3] py-3">
      <Container>
        <div className="flex">
          
          {/* Category */}
          <div className="w-2/7 relative" ref={catRef}> 
            <div 
              className="flex items-center gap-x-2 cursor-pointer"
              onClick={() => Setshow((prev) => !prev)}
            >
              <FaBars />
              <h3>Shop By Category</h3>
            </div>

            { show && (
              <div className="bg-black absolute left-0 top-[34px] w-full z-50">
                <ul className="max-h-[400px] overflow-y-auto">
                  <li className="text-[rgba(255,255,255,0.8)] pl-[20px] hover:pl-[30px] py-2 border-b border-gray-500 hover:text-white cursor-pointer">
                    <div className="flex justify-between items-center pr-2">
                      <span>Accessories</span>
                      <GoChevronRight />
                    </div>
                  </li>
                  <li className="text-[rgba(255,255,255,0.8)] pl-[20px] hover:pl-[30px] py-2 border-b border-gray-500 hover:text-white cursor-pointer">Category 2</li>
                  <li className="text-[rgba(255,255,255,0.8)] pl-[20px] hover:pl-[30px] py-2 border-b border-gray-500 hover:text-white cursor-pointer">Category 3</li>
                  <li className="text-[rgba(255,255,255,0.8)] pl-[20px] hover:pl-[30px] py-2 border-b border-gray-500 hover:text-white cursor-pointer">Category 4</li>
                  <li className="text-[rgba(255,255,255,0.8)] pl-[20px] hover:pl-[30px] py-2 border-b border-gray-500 hover:text-white cursor-pointer">Category 5</li>
                </ul>
              </div>
            )}
          </div>

          {/* Search */}
          <div className="w-4/7 relative">
            <input 
              type="text" 
              placeholder="Search" 
              className="py-3 w-full pl-4 rounded-full bg-white outline-0" 
            />
            <div className="absolute right-[6px] top-1/2 -translate-y-1/2">
              <FaSearch/>
            </div>
          </div>

          {/* Account */}
          <div className="w-1/7 relative" ref={accRef}>
            <div className="flex items-center justify-end gap-6 cursor-pointer"
              onClick={() => setAccShow((prev) => !prev)}
            >
              <div className="flex">
                <FaUser/>
                <FaSortDown/>
              </div>
              <div>
                <FaCartArrowDown/>
              </div>
            </div>
            {accshow && 
              <div className="bg-white absolute py-3 left-0 top-[34px] w-full z-50">
                <ul>
                  <li className="hover:bg-[#262626] hover:text-white py-2 text-center duration-300 ease-in-out">My Account</li>
                  <li className="hover:bg-[#262626] hover:text-white py-2 text-center duration-300 ease-in-out">LogIn</li>
                </ul>
              </div>
            }
          </div>

        </div>
      </Container>
    </div>
  )
}

export default Navbar;