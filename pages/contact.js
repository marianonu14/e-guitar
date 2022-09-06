import ContactForm from "../components/ContactForm";
import IframeMap from "../components/IframeMap";

const Contact = () => {
    return ( 
        <div>
            <h1 className="text-2xl md:text-5xl p-14">Contact Us</h1>
            <div className="md:flex justify-between mx-10 gap-10">
                <ContactForm />
                <IframeMap />
            </div>
        </div>
     );
}
 
export default Contact;