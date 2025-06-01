import {motion} from 'framer-motion'
import Images from './Components/Images'
import './App.css'
import { useEffect, useRef, useState } from 'react'

const App = () => {
  const carouselRef = useRef();
  const [width, swtWidth] = useState(0);
  useEffect(() => {
    // console.log(carouselRef.current.scrollWidth);
    // console.log(carouselRef.current.offsetWidth);
    swtWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, [])
  return (
    <div className=''>
     <motion.div ref={carouselRef} className='carousel'>
        <motion.div drag="x" dragConstraints={{right: 0, left: -width}} className='inner-carousel' whileTap={{cursor: "grabbing"}}>
            {
              Images.map((img) => (
                <motion.div className='item' key={img}>
                  <img src={img} alt='img.jpg'/>
                </motion.div>
              ))
            }
        </motion.div>
     </motion.div> 
    </div>
  )
}

export default App