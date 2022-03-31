import "./contact.scss";
import { useState } from "react";
import { useRef } from "react";
import emailjs from "emailjs-com";


export default function Contact(){
    const[message, setMessage] = useState(false);
    const form = useRef();

    function sendEmail(e){
        e.preventDefault();
        setMessage(true);

        emailjs.sendForm('gmail', 'template_f6yvspc', form.current, 'qY8OSrRdpQ5DTHQ_X')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };

    return(
        <div className="contact" id="contact">
            <div className="left">
                <img src="https://raw.githubusercontent.com/safak/youtube/da700015c8a88050fad7b961e99a7039638ab3b2/public/assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="email" name="email" placeholder="Email" required/>
                    <textarea type="text" name="message" placeholder="Message" required ></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I'll reply soon! :)</span>}
                </form>
            </div>
        </div>
    )
}