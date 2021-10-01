import * as React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
// @ts-ignore
import ScreenShot from '../../images/ouicirclesscreenshot.png'
import './ouiCircles.css'
// @ts-ignore
import DesktopView from '../../images/circlesView.png'
// @ts-ignore
import ScreenShotPage from '../../images/ouiSSpage.png'
import Footer from '../../components/Footer'
const ouiCirclesPage = ({ setDetailPage }:any) => {

  const h1Ani = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 2,
        delay: .5
      }
    },
    hidden: {
      y: 100,
      opacity: 0
    },
    exit: {
      y: -150,
      scale: .7,
      opacity: 0,
      transition: {
        duration: 1.5,
        delay: .5
      }
    }
  }

  const h3Ani = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 1.75
      }
    },
    hidden: {
      y: 100,
      opacity: 0
    },
    exit: {
      y: 100,
      opacity: 0,
      transition: {
        duration: 1
      }
    }
  }

  const ssAni = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5
      }
    },
    hidden: {
      opacity: 0,
      x: -100
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 1.5,
        delay: .7
      }
    }
  }

  const stackAni = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 1.3
      }
    },
    hidden: {
      y: 100,
      opacity: 0
    },
    exit: {
      y: 50,
      opacity: 0,
      transition: {
        duration: 1.3
      }
    }
  }

  const btnAni = {
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 1
      }
    },
    hidden: {
      opacity: 0
    },
    exit: {
      opacity: 0,
      transition: {
        duration: .7
      }
    }
  }

  const pageAni = {
    initial: {
      y: 0
    },
    exit: {
      scale: .8,
      opacity: 0,
      transition: {
        duration: 1.5,
        delay: .5
      }
    }
  }

  return (
    <motion.div
      variants={pageAni}
      initial={"initial"}
      exit={"exit"}
      className='ouiCirclesPage'
    >
      <div className='project proj3'>
        <motion.h1
          variants={h1Ani}
          initial={"hidden"}
          animate={"visible"}
          exit={"exit"}
        >
          ouiCircles
        </motion.h1>
        <motion.h3
          variants={h3Ani}
          initial={"hidden"}
          animate={"visible"}
          exit={"exit"}
        >
          Event Forum
        </motion.h3>
        <Link to={`/project/ouicircles`}>
          <button 
            className='backBtn' 
            type='button'
            onClick={()=>setDetailPage(false)}
          >
            Back
          </button>
        </Link>
        <a href={'http://oui-circle-app.herokuapp.com/'} target='_blank'>
          <motion.img
            variants={ssAni}
            initial={"hidden"} 
            animate={"visible"}
            exit={"exit"} 
            className='ouiSS' 
            src={ScreenShot} 
            alt='ouiCircles' 
          />
        </a>
        
        <div className='circles3Btn'>
        <a href={`http://oui-circle-app.herokuapp.com/`} target='_blank'>
        <motion.button
          variants={btnAni}
          initial={"hidden"}
          animate={"visible"}
          exit={"exit"}
          className='btn' 
          type='button'
        >
          View Site
        </motion.button>
        </a>
        <Link to={`https://github.com/Gushihiro/ouiCircles-Community-Bulletin`} target='_blank'>
        <motion.button
          variants={btnAni}
          initial={"hidden"}
          animate={"visible"}
          exit={"exit"}
          className='btn'
        >
          View GitHub
        </motion.button>
        </Link>
        </div>
        <motion.div 
          variants={stackAni}
          initial={"hidden"}
          animate={"visible"}
          exit={"exit"}
          className='proj3Info'
        >
          <h4>MySQL </h4>
          <h4>|</h4>
          <h4>Express </h4>
          <h4>|</h4>
          <h4>Handlebars </h4>
          <h4>|</h4>
          <h4>NodeJS </h4>
        </motion.div>
      </div>
      <div className='circlesDetail'>
        <img className='circlesDesktop' src={DesktopView} alt='Desktop'/>
        <h1>Community Event Forum Utilizing Geospatial Data to Provide Local Events to Users</h1>
        <img className='ouiSSpage' src={ScreenShotPage} alt='Contacts CRUD' />
        <div className='ouiInfo'>
          <h1>Additional Technologies:</h1>
          <ul>
            <li>Sequelize</li>
            <li>Cloudinary</li>
            <li>Bcrypt</li>
            <li>Handlebars</li>
            <li>GeoIp / GeoLocation</li>
            <li>MomentJS</li>
          </ul>
          <h2>Find local events or create your own</h2>
          <div className='ouiMisc'>
            <p>Events within a 15-mile radius will display on your front page.</p>
            <p>Leave a comment on events you want to attend or think are exciting.</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ouiCirclesPage;