import React from 'react';

import { BsGithub } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';

import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/slyxh2" target="_blank">
        <BsGithub />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/xueyan-huang-1b10a023b/" target="_blank">
        <FaLinkedin />
      </a>
    </div>
  </div>
);

export default SocialMedia;
