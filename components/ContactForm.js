const ContactForm = () => {
    return ( 
        <div className="md:w-1/2 m-auto mb-10">
            <form className="flex flex-col gap-5 w-[100%] m-auto">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
                <label htmlFor="last_name">Last Name</label>
                <input type="text" id="last_name" />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
                <label htmlFor="message">Type your message here</label>
                <textarea type="text" id="message" />
                <button className="btn">Send</button>
            </form>
        </div>
     );
}
 
export default ContactForm;