import { useEffect, useState } from "react";
import Container from './Container';
import { FaBars } from "react-icons/fa";
import { GoChevronRight } from 'react-icons/go';

const Navbar = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted) setMounted(true); 
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className="bg-[#F5F5F3] py-3">
      <Container>
        <div className="flex">
          <div className="w-2/6"> 
            <div className="flex items-center gap-x-2">
              <FaBars />
              <h3>Shop By Category</h3>
            </div>
            <div className="bg-[#262626] py-3 opacity-0 group-hover:opacity-100">
              <ul>
                <li className="text-[rgba(255, 255, 255, 0.707)] pl-[20px] hover:pl-[30px] py-2 border-b-[1px] border-[#D8D8D8] hover:text-white cursor-pointor">
                  <div className="flex justify-between">
                    <span>Accessories</span>
                    <GoChevronRight />
                  </div>
                </li>
                <li className="text-[rgba(255, 255, 255, 0.707)] pl-[20px] hover:pl-[30px] py-2 border-b-[1px] border-[#D8D8D8] hover:text-white">Category 2</li>
                <li className="text-[rgba(255, 255, 255, 0.707)] pl-[20px] hover:pl-[30px] py-2 border-b-[1px] border-[#D8D8D8] hover:text-white">Category 3</li>
                <li className="text-[rgba(255, 255, 255, 0.707)] pl-[20px] hover:pl-[30px] py-2 border-b-[1px] border-[#D8D8D8] hover:text-white">Category 4</li>
                <li className="text-[rgba(255, 255, 255, 0.707)] pl-[20px] hover:pl-[30px] py-2 border-b-[1px] border-[#D8D8D8] hover:text-white">Category 5</li>
              </ul>
            </div>
          </div>
          <div className="flex-1"></div>
          <div className="flex-1"></div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;