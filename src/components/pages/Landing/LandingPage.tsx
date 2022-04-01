import { Fragment } from "react"
import classes from "./LandingPage.module.css"
import Hero from "./Hero"
import Business from "./Business"
import Works from "./Works"
import LearnMore from "./LearnMore"
import Testimony from "./Testimony"
import Faq from "./Faq"
import ContactUs from "./ContactUs"
import Footer from "../../UI/Footer"

const LandingPage = ()=>{
    return(
        <Fragment>
             <Hero/>
             <Business/>
             <Works/>
             <LearnMore/>
             <Testimony/>
            <Faq/>
            <ContactUs/>
            <Footer/>
     

        </Fragment>
       
    )
}

export default LandingPage