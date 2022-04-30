
import "./Contact.css"

import { MdOutlineEmail } from "react-icons/md"

import { BsWhatsapp } from "react-icons/bs";

// https://dashboard.emailjs.com/admin
// (((subject)))

// React Email JS -->



// npm install emailjs-com --save

// Service Id --> service_o147958

// Template Id --> template_2ibxxxk

// Public Key --> MWLs-zluBElyjaCBS

import React, { useRef } from 'react';

import emailjs from "emailjs-com";

export const Contact = () =>{

    const form = useRef();

    // const sendEmail = (e) => {
    //     e.preventDefault();
    
    //     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    //       .then((result) => {
    //           console.log(result.text);
    //       }, (error) => {
    //           console.log(error.text);
    //       });
    //   };

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_x2cbzme', 'template_psdn0ff', form.current, 'cq3ylNSI8H7pn9JQO')
          .then((result) => {
              alert("Your message send to Pooja Waghchaure successfully Thank You")
              console.log(result.text);
            //   window.location.reload(true)
            e.target.reset();
          }, (error) => {
              console.log(error.text);
          });
    };

    return (
        <section id = "contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>poojawaghchaure28@gmail.com</h5>
                        <a target={"_blank"} href="mailto:poojawaghchaure28@gmail.com">Send a message</a>
                    </article>
                    
                    {/* <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>poojawaghchaure28@gmail.com</h5>
                        <a target={"_blank"} href="poojawaghchaure28@gmail.com">Send a message</a>
                    </article> */}
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required/>
                    <input type="email" name="email" placeholder="Your Email ID" required/>
                    <textarea name="message" rows="2" placeholder="Your Message" required></textarea>
                    <input type="submit" value={"Send Message"} className="btn btn-primary"/>
                </form>
            </div>
        </section >
    )
}