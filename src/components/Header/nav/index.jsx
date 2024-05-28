import React, { useState } from 'react'
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../animation';
import Link from './Link';

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Project",
    href: "/project",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/#contact",
  },
]

export default function Headernav() {

  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div 
      variants={menuSlide} 
      initial="initial" 
      animate="enter" 
      exit="exit" 
      className={styles.menu}
      >
       <div className={styles.body}>
            <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className={styles.nav}>
                   
                    {
                      navItems.map( (data, index) => {
                        return <Link 
                        key={index} 
                        data={{...data, index}} 
                        isActive={selectedIndicator == data.href} 
                        setSelectedIndicator={setSelectedIndicator}>
                        </Link>
                      })
                    }
                     <div >
                        <p className={styles.header}>EMAIL ADDRESS</p>
                        <p className='text-lg'>thaivduy01@gmail.com</p>
                    </div>
            </div>
        </div>
       
    </motion.div>
  )
}