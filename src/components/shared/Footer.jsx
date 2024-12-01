import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"
import Container from "./Container"

const Footer = () => {
  return (
    <div
    className="lg:h-[400px] py-16 relative bg-no-repeat bg-center bg-cover w-full"
    style={{
      backgroundImage:
        "url(https://i.ibb.co/0fSRFcV/6dc8aa29772cd31c5ca7b0c5e1978bdb.png)",
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-[#1F509A] bg-opacity-90"></div>
    
   <Container>
     {/* Content */}
     <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between">
        <div>
        <h1 className="text-3xl lg:text-4xl font-bold font-lato">Foo<span className="text-primary">ter</span></h1>
          
          <p className="text-white lg:mt-14 lg:w-[346px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu arcu enim. Nunc turpis est, placerat a porta rutrum, aliquam a magna. Phasellus ac molestie urna.</p>
        </div>
        <div className="mt-5 font-medium text-white text-center">
        <h3 className="font-bold mb-5">Company</h3>
          <div className="grid grid-cols-2  md:grid-cols-1 gap-2">
          <p>Home</p>
          <p>Vehicles</p>
          <p>About Us</p>
          <p>Contact Us</p>
          </div>
        </div>
        <div className="lg:mt-5 mt-10 font-medium ">
        <h3 className="font-bold mb-5 text-white">Subscribe To Newsletter</h3>
          <div>
              <input type="text" className="rounded-[10px] outline-none  my-6 font-medium w-full lg:w-[347px] text-[#C1C5C4] p-3" placeholder="Enter your email" />
              <button className="rounded-[10px] bg-white block font-medium text-[#1572D3] py-2 px-6">Subscribe</button>

          </div>
          <div className="flex mt-6 lg:ml-32 font-bold items-center text-white gap-4">
        <p>Follow us</p>
        <div className="flex items-center gap-3">
        <p><FaFacebook /></p>
        <p><AiFillInstagram /></p>
        <p><FaYoutube /></p>
        <p><FaTwitter /></p>
        </div>
      </div>
        </div>
      </div>
       <p className="border-t mt-3 text-[#D6D6D6] pt-10">Copyright 2024 ・ QEEQ.COM, All Rights Reserved</p>
    </div>
   </Container>
  </div>
  


  )
}

export default Footer