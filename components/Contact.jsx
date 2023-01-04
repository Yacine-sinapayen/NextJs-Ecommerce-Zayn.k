import React from "react";
import Image from "next/image";
import instaLogo from "../assets/insta.png";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
const { motion } = require("framer-motion");

const Contact = ({ contact }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, x: 10 }}
      transition={{ duration: 0.7 }}
      className="container"
    >
      <div className="contact-infos-container">
        <div className="contact-infos-items">
          {/* Adress */}
          <div className="contact-item">
            <div>
              <FmdGoodOutlinedIcon />
            </div>
            <div>
              <p>{contact.contactAdress}</p>
            </div>
          </div>
          
          {/* Email */}
          <div className="contact-item">
            <div>
              <EmailOutlinedIcon />
            </div>
            <div>
              <p>{contact.contactMail}</p>
            </div>
          </div>

          {/* Phone */}
          {/* <div className="contact-item">
            <div>
              <PhoneAndroidOutlinedIcon />
            </div>
            <div>
              <p>{contact.contactNumber}</p>
            </div>
          </div> */}

          {/* Network */}
          <div className="contact-item">
            <div>
            <InstagramIcon />
              {/* <Image width="20px" height="20px" src={instaLogo} /> */}
            </div>
            <div>
              <p>@kamalsafar_</p>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-law">
        <p>2022 Zayn.k tous droits réservés</p>
      </div>
    </motion.div>
  );
};

export default Contact;
