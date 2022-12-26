import Swal from "sweetalert2";
import emailjs from '@emailjs/browser';
import * as EmailValidator from 'email-validator';

function ContactButton() {

    function handleClick() {
        Swal.fire({
            title: 'Contact Me',
            html: `<form id="contact-form">
        <input type="email" class="swal2-input" name="reply_to" id='email' placeholder="Your E-Mail">
        <textarea class="swal2-textarea" id='message' placeholder="Your Message" name="message"></textarea>
        </form>`,
            showCancelButton: true,
            confirmButtonText: 'Send Message',
            showLoaderOnConfirm: true,
            preConfirm: () => {
                const form = Swal.getPopup()?.querySelector('#contact-form') as HTMLFormElement
                const email = (Swal.getPopup()?.querySelector('#email') as HTMLInputElement).value
                const message = (Swal.getPopup()?.querySelector('#message') as HTMLInputElement).value

                if (!email || !message) {
                    Swal.showValidationMessage(`Please enter Email and message`)
                    return;
                }
                if (!EmailValidator.validate(email)) {
                    Swal.showValidationMessage(`Please enter a valid Email`)
                    return;
                }
                console.log(import.meta.env);
                console.log(import.meta.env.VITE_publicKey);
                return emailjs.sendForm(import.meta.env.VITE_emailKey, 'contact_form', form, import.meta.env.VITE_publicKey).catch(err => {
                    Swal.showValidationMessage(
                        `Some error has occurred. Please reach out to me at harjassodhi9@gmail.com`
                    )
                })
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Success!',
                    'I have received your message and would be replying as soon as possible',
                    'success'
                )
            }
        })
    }

    return (
        <button className='text-[#64ffda] p-5 hover:bg-gray-700 transition border border-[#64ffda] rounded my-8' onClick={handleClick}>Get In Touch</button>
    )
}

export default ContactButton