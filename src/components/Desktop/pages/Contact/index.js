import { useRef, useState } from 'react'
import AnimatedLetters from '../../components/AnimatedLetters'
import './index.scss'
import emailjs from '@emailjs/browser'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 3000)

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm('service_22pexeb', 'template_bwd2yzi', form.current, '4S5NVUcrRYK8X7-5F')
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in opportunities as software engineer intern or full time job - directions
                        like front-end, back-end, full stack, database, machine learning, etc. However, if you have any other
                        job opportunities or
                        questions, don't hesitate to contact me using below form either.
                    </p>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input placeholder="Name" type="text" name="name" required />
                                </li>
                                <li className="half">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Henry Zhang <br />
                    18749 Marsh Ln,  <br />
                    Dallas, 
                    <br />
                    Texas, 75287
                    <br />

                    <br />
                    <span>zhangenochyun@gmail.com</span>
                </div>
                <div className="map-wrap">
                    
                    <MapContainer center={[33.00872764043363, -96.85870449925301]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[33.00872764043363, -96.85870449925301]}>
                            <Popup>Henry lives here, come over for a can of Dr. Pepper :)</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="ball-scale-ripple" />
        </>
    )
}

export default Contact