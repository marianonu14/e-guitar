import ContactForm from "../components/ContactForm";
import IframeMap from "../components/IframeMap";

const Contact = () => {
    return ( 
        <div>
            <h1 className="text-2xl md:text-5xl md:p-14 px-6 pt-6">Contact Us</h1>
            <div className="md:flex justify-between m-10 mb-14 gap-10">
                <ContactForm />
                <IframeMap />
            </div>
        </div>
     );
}
 
export default Contact;