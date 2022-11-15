import React from 'react'

const Contact = ({ contact }) => {
  return (
    <div className='contact-container'>
        <h1>{contact.contactTitle}</h1>
        <p>{contact.contactAdress}</p>
        <p>{contact.contactMail}</p>
        <p>{contact.contactNumber}</p>
    </div>
  )
}

export default Contact