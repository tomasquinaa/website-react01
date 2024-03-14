import { Link } from "react-scroll"
import Button from "../layout/Button"
import img from '../assets/hero.svg'

const Home = () => {
    return (
        <div className="min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10">
            <div className="md:w-2/4 text-center">
                <h2 className="text-5xl font-semibold leading-tight">knowledge with</h2>
                <span className="text-5xl font-semibold text-brightGreen">eStudy</span>

                <p className="text-lightText mt-5 text-start">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen boo
                </p>

                <Link to="contact" spy={true} smooth={true} duration={500}>
                    <Button title="Contact Us"/>
                </Link>
            </div>

            <div className="w-full md:w-2/4">
                <img src={img} alt="img" />
            </div>

        </div>
    )
}

export default Home; 