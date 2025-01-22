import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { VscMenu } from "react-icons/vsc";
import { TfiClose } from "react-icons/tfi";
import Container from "./Container";
import Button from "./Button";


const Navbar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(true);
    const [navbar, setNavbar] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const handleNavigaet = () => {
        navigate('/')
    }

    // background color add in navbar scroll
    const changeBackground = () => {
        if (window.scrollY >= 32) {
            setNavbar(true)
        }
        else { setNavbar(false) }
    }
    window.addEventListener('scroll', changeBackground)

    const handleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    return (
        <>
            <header className={navbar ? 'bg-gray-200 sticky top-0 left-0 z-[99999] shadow-md w-full   py-4 lg:py-6  overflow-visible' : 'sticky top-0 left-0 z-[99999] shadow-md w-full py-4 lg:py-6  overflow-visible '}>
                <Container>
                    <div className=" flex items-center">
                        <nav className="relative container flex justify-between items-center">
                            {/* navbar website name and logo */}
                            <div className="w-[20%]">
                                <div
                                    onClick={handleNavigaet}
                                    className="flex items-center cursor-pointer">
                                    <h1 className="text-3xl lg:text-4xl font-bold font-lato">Nav<span className="text-primary">bar</span></h1>
                                </div>
                            </div>

                            <div className="flex lg:hidden">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    type="button"
                                    className={`absolute right-[2px] top-1/2 block -translate-y-1/2  rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden ${isOpen ? 'navbarTogglerActive' : ''
                                        }`}

                                >
                                    {!isOpen ? (
                                        <TfiClose className="text-2xl " />
                                    ) : (
                                        <VscMenu className="text-2xl " />
                                    )}
                                </button>
                            </div>

                            {/* mobile menu */}
                            <div
                                className={`${isOpen ? "-right-full" : "right-0"
                                    }  w-2/3 h-screen p-4 fixed  top-[70px] md:top-[65px] z-[999999] bg-primaryGray  shadow-md flex flex-col space-y-4 my-transition`}
                            >
                                <div className="flex flex-col lg:hidden space-y-4">
                                    <NavLink to='/' >
                                        <Button text={" Home"} />
                                    </NavLink>
                                    <NavLink to='/navbar' >
                                        <Button text={"Navbar(c)"} />

                                    </NavLink>
                                    <NavLink to='/gallary' >
                                        <Button text={"Gallary"} />
                                    </NavLink>
                                    <NavLink to='/review' >
                                        <Button text={"Review"} />

                                    </NavLink>
                                    <NavLink to='/footer' >
                                        <Button text={"Footer(c)"} />

                                    </NavLink>

                                    {/* navbar Sign Up and login button */}
                                    <div className=" bg-secondery/50 rounded-md py-3">
                                        <div className="flex flex-col items-center gap-4">
                                            <Link to='/login'>
                                                <button className="text-lg  font-semibold font-lato">Login</button>
                                            </Link>
                                            <div onClick={handleMenu} className="w-full flex justify-center focus:outline-none cursor-pointer relative group">
                                                   
                                                    {
                                                        menuOpen && <div className="absolute  flex flex-col justify-center bg-gray-100 rounded-md px-4 py-3 left-1 top-12 z-50 space-y-3">
                                                            <button
                                                                onClick={logOut}
                                                                className="w-full bg-gray-200 rounded-md py-1">Logout</button>
                                                          
                                                        </div>
                                                    }
                                                </div>
                                                   
                                                    <Link to='/sign-up'>
                                                        <button className="w-full px-5 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-secondery focus:outline-none focus:bg-secondery">Sign Up</button>
                                                    </Link>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* tablet & dastop munu items*/}
                            <div className=" w-[60%] lg:flex lg:justify-center lg:items-center items-center hidden">
                                <div className="flex items-center">
                                <NavLink to='/' >
                                        <Button text={" Home"} />
                                    </NavLink>
                                    <NavLink to='/navbar' >
                                        <Button text={"Navbar(c)"} />
                                    </NavLink>

                                    <NavLink to='/gallary' >
                                        <Button text={"Gallary"} />
                                    </NavLink>

                                    <NavLink to='/review' >
                                        <Button text={"Review"} />
                                    </NavLink>
                                    <NavLink to='/slider' >
                                        <Button text={"Slider"} />
                                    </NavLink>
                                    <NavLink to='/parallax' >
                                        <Button text={"Parallax"} />
                                    </NavLink>
                                    <NavLink to='/utlity' >
                                        <Button text={"Utlity"} />
                                    </NavLink>
                                    <NavLink to='/footer' >
                                        <Button text={"Footer(c)"} />
                                    </NavLink>
                                    <NavLink to='/dashboard' >
                                        <Button text={"Dashboard"} />
                                    </NavLink>
                                </div>
                            </div>
                            {/* navbar signup and login button */}
                            <div className=" w-[20%] lg:flex lg:justify-end hidden">
                                <div className="flex items-center gap-4">
                                    <Link to='/login'>
                                        <button className="text-lg font-semibold font-lato py-2">Login</button>
                                    </Link>
                                   <div className=" focus:outline-none cursor-pointer relative group">
                                        </div>
                                      
                                            <Link to='/sign-up'>
                                                <button className="w-full px-5 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-secondery focus:outline-none focus:bg-secondery">Sign Up</button>
                                            </Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                </Container>
            </header>
        </>
    );
};

export default Navbar;