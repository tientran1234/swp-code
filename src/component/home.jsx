import React,{useEffect} from 'react'
import BannerHeader from './bannerHeader'
import "../assets/css/style.css"
import "../assets/css/bootstrap.css"
import "../assets/css/fontawesome-all.css"
import Login from './Login'
import MiddleSection from './MiddleSection'
import BannerBottom from './BannerBottom'
import Service from './Service'
import Pricing from './Pricing'
import StatsSection from './StatsSection'
import Testimonials from './Testimonials'
import Footer from './Footer'
import useAuthStore  from '../zustand/authStore';
import useRegister from '../zustand/authRegister'
import Register from './Register'
import { FaArrowCircleUp } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { Button } from '../assets/js/styled'
import useScrollY from '../zustand/useScrollY'


function Home() {
  const isLoginFormOpen = useAuthStore((state) => state.isLoginFormOpen);
  const isRegisterFormOpen=useRegister((state)=>state.isRegisterFormOpen);
  const { scrollY, init, subscribe, unsubscribe } =useScrollY ();

    // Gọi hàm init khi component được mount
    useEffect(() => {
      init();
      // Đăng ký lắng nghe sự kiện scroll khi component được mount
      subscribe();

      // Hủy đăng ký lắng nghe sự kiện khi component unmount
      return () => {
        unsubscribe();
      };
    }, [init, subscribe, unsubscribe]);

    // Hàm để cuộn lên đầu trang khi nhấp vào nút
    const scrollToTop = () => {
        scroll.scrollToTop();
    };
  return (
    <div>
        <BannerHeader/>
        {isLoginFormOpen&&<Login/>}
        {isRegisterFormOpen&&<Register/>}
        <BannerBottom/>
        <MiddleSection/>
        <Service/>
        <Pricing/>
        <StatsSection/>
        <Testimonials/>
        <Footer/>
        <Button
                onClick={scrollToTop}
                style={{ visibility: `${scrollY > 100 ? 'visible' : 'hidden'}` }}
            >
                <FaArrowCircleUp />
            </Button>
    </div>
  )
}

export default Home