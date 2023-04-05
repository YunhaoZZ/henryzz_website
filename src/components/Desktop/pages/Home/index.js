import { useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../../components/AnimatedLetters'
import './index.scss'
import Profpic from '../../components/Profpic'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = [' ', 'H', 'e', 'n', 'r', 'y', ' ', 'Z', 'h', 'a', 'n', 'g'];
    const jobArray = [' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r'];

    setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 3000)

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>Hi, <br /> I'm
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={nameArray}
                            idx={15} />
                        <br />
                        Software Development
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={jobArray}
                            idx={22} />
                    </h1>
                    <h2>Web developer</h2>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>
                <Profpic />
            </div>
            <Loader type="square-spin" />
        </>
    );
}

export default Home;