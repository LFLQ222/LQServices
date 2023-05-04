'use client';
import { AiOutlineMail } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { footerVariants } from '../utils/motion';

import styles from '../styles';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Trabaja con nosotros
        </h4>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">
            LQ Services
          </h4>
          <p className="font-bold text-[20px] text-white opacity-50">
            Telefono MX 662 251 8151 / US 520 455 3453.
          </p>

          <div className="flex gap-4">
            <a href="mailto:contacto.lqservices@gmail.com">
              <AiOutlineMail className="text-white text-2x1 w-[50px] h-[50px] object-contain cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;

