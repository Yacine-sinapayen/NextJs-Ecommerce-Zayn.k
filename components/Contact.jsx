import React from "react";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import Link from "next/link";
const { motion } = require("framer-motion");

const Contact = ({ contact }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, x: 10 }}
      transition={{ duration: 0.7 }}
      className="contact-infos-container"
    >
      <div>
        <div className="contact-infos-items">
          {/* Adress */}
          <Link href={`https://goo.gl/maps/7Rg5E29iGqtyTQy27`}>
            <a target="_blank" rel="noreferrer" className="contact-item">
              <div>
                <FmdGoodOutlinedIcon />
              </div>
              <div>
                <p>{contact.contactAdress}</p>
              </div>
            </a>
          </Link>

          {/* Email */}
          <Link href="mailto:zayn.ksalon@gmail.com">
            <a className="contact-item" target="_blank" rel="noreferrer">
              <div>
                <EmailOutlinedIcon />
              </div>
              <div>
                <p>{contact.contactMail}</p>
              </div>
            </a>
          </Link>

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
          <Link href={`https://www.instagram.com/kamalsafar_`}>
            <a target="_blank" rel="noreferrer" className="contact-item">
            <div>
              <InstagramIcon />
            </div>
            <div>
              <p>@kamalsafar_</p>
            </div>
            </a>
          </Link>
        </div>
      </div>

      <div className="contact-law">
        <p>2022 Zayn.k tous droits réservés</p>
      </div>
    </motion.div>
  );
};

export default Contact;
