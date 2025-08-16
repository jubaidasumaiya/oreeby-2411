import React, { useState } from 'react';
import Container from './Container'
import logo from '../assets/logo.png'
import { RxCross1 } from "react-icons/rx";
import { FaBars } from "react-icons/fa6";


const Header =() => {
    let [menu, setMenu] = useState(false);
    return(
        <header className="py-3"> 
            <Container>
                <div className="lg:flex items-center">
                    <div className="lg:w-2/12">
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className="w-full lg:w-10/12">
                        <ul className="lg:flex gap-6 justify-center">
                            <li className="font-dm text-[16px] text-[#767676] hover:text-[#262626] duration-300 ease-in-out hover:font-bold">Home</li>
                            <li className="font-dm text-[16px] text-[#767676] hover:text-[#262626] duration-300 ease-in-out hover:font-bold">Shop</li>
                            <li className="font-dm text-[16px] text-[#767676] hover:text-[#262626] duration-300 ease-in-out hover:font-bold">About</li>
                            <li className="font-dm text-[16px] text-[#767676] hover:text-[#262626] duration-300 ease-in-out hover:font-bold">Contacts</li>
                            <li className="font-dm text-[16px] text-[#767676] hover:text-[#262626] duration-300 ease-in-out hover:font-bold">Journal</li>
                        </ul>
                        </div>
                        <div className="lg:hidden absolute top-0 right-0" onClick={( )=> setMenu(!menu)}>{menu ? <RxCross1 /> :<FaBars />}
                        </div>
                </div>
            </Container>
        </header>
    )
}

export default Header;