import './index.scss'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Work() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_5au0kpg',
                'template_r7mjs37',
                form.current,
                'n9WQKxS1uwBdltToP'
            ).then(
                (result) => {
                    console.log(result.text);
                alert('Message successfully sent!');
                window.location.reload(false);
            }, (error) => {
                console.log(error.text);
                alert('Failed to send message. Please try again.');
            }); 
    }


    
    return (
        <>
        
        <section className="section-wrap">
            <div className='text-zone'>
            <h2 className="contact-header">Contact Me</h2>
             <div className='contact-form'>
                 <form ref={form} onSubmit={sendEmail}>
                     <ul>
                         <li className='half'>
                             <input type='text' name='name' placeholder='Name' required />
                         </li>
                         <li className='half'>
                             <input type='email' name='email' placeholder='Email' required />
                         </li>
                         <li>
                             <input type='text' name='subject' placeholder='Subject' required />
                         </li>
                         <li>
                             <textarea placeholder="Message" name="message" required ></textarea>
                         </li>
                         <li>
                             <input type='submit' className='flat-button' value='SEND' />
                         </li>
                     </ul>
                 </form>
             </div>
            </div>
            <div className='info-map'>
                Drew Speed
                <br />
                Antioch TN, 37013
                <br />
                <span>drewjspeed@gmail.com<br />615.651.3338</span>
                <p>I am interested in both freelance and contracted opportunities--especially unique and creative projects.  However, if you have any other requests or questions, please feel free to contact me using the form below.
                </p>
            </div>

        </section>
        </>
    )
}
export default Work;