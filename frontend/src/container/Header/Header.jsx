import React from 'react';

import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';

import './Header.scss'
const Header = () => {
    const showImg = [images.typescript, images.react, images.nestjs]
    const scaleVariants = {
        whileInView: {
            scale: [0, 1],
            opacity: [0, 1],
            transition: {
                duration: 1,
                ease: 'easeInOut',
            },
        },
    };
    return <div className='app__header app__flex' id="home">
        <motion.dev
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className='app__header-info'
        >
            <div className='app__header-badge'>
                <div className="badge-cmp app__flex">
                    <span>👋</span>
                    <div style={{ marginLeft: 20 }}>
                        <p className="p-text">Hello, I am</p>
                        <h1 className="head-text">Patrick</h1>
                    </div>
                </div>

                <div className="tag-cmp app__flex">
                    <p className="p-text">Software Developer</p>
                    <p className="p-text">Front-end Engineer</p>
                    <p className="p-text">Back-end Engineer</p>
                </div>

            </div>
        </motion.dev>

        <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="app__header-img"
        >
            <img src={images.profile} alt="profile_bg" id="main-photo" />
            {/* <motion.img
                whileInView={{ scale: [0, 1] }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                src={images.circle}
                alt="profile_circle"
                className="overlay_circle"
            /> */}
        </motion.div>

        <motion.div
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className="app__header-circles"
        >
            {showImg.map((circle, index) => (
                <div className="circle-cmp app__flex" key={`circle-${index}`}>
                    <img src={circle} alt="profile_bg" />
                </div>
            ))}
        </motion.div>
    </div>
}

export default AppWrap(Header, 'home');