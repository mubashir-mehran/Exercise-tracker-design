import "./intro.scss"
import {motion} from 'framer-motion'


export default function Intro() {
  const transition = {type: 'spring', duration : 3}
  return (
    <div className='intro' id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/body.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <motion.div
          initial={{left: '310px'}}
          whileInView={{left: '8px'}}
          transition ={{...transition, type: 'tween'}}
          >

          </motion.div>
        <h5>A Good Workout is a great way to create a good mind</h5>
        </div>
        <div className="ideal">
          <h1>Shape Your</h1>
          <h2>Ideal Body.</h2>
        </div>
      </div>
    </div>
  )
}
