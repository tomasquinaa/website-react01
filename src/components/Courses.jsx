import Heading from '../layout/Heading'
import webImg from '../assets/web-dev.svg'
import appImg from '../assets/App-dev.svg'
import graphicImg from '../assets/graphic.svg'
import digitalImg from '../assets/digital.svg'
import CoursesCard from '../layout/CoursesCard'

const Courses = () => {
    return (
        <div className=" min-h-screen flex flex-col items-center md:px-32 px-5 my-10">
            <Heading title1="Our" title2="Courses"/>

            <div className=' flex flex-wrap justify-center gap-6 mt-6'>
                <CoursesCard img={webImg} title3="Web Development" />
                <CoursesCard img={appImg} title3="App Development" />
                <CoursesCard img={graphicImg} title3="Graphic Designer" />
                <CoursesCard img={digitalImg} title3="Digital Marketing" />
            </div>
        </div>
    )
}

export default Courses