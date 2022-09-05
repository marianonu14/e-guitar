const Footer = () => {
    const classLi = 'p-1 flex items-center cursor-pointer hover:text-white'

    return (
        <div className=" bg-slate-900 h-full p-5">
            <div className="grid md:grid-cols-3 p-10">
                <div className="p-5">
                    <h2 className="text-2xl text-cyan-600 p-2">Services</h2>
                    <ul className='flex flex-col px-3 text-gray-300 text-lg'>
                        <li className={classLi}>Orders</li>
                        <li className={classLi}>Favorites</li>
                        <li className={classLi}>Wallet</li>
                        <li className={classLi}>Help</li>
                        <li className={classLi}>Promotions</li>
                        <li className={classLi}>Best One</li>
                        <li className={classLi}>Invite Friends</li>
                    </ul>
                </div>
                <div className="p-5">
                    <h2 className="text-2xl text-cyan-600 p-2">Overview</h2>
                    <ul className='flex flex-col px-3 text-gray-300 text-lg'>
                        <li className={classLi}>About</li>
                        <li className={classLi}>Careers</li>
                        <li className={classLi}>Press</li>
                        <li className={classLi}>Contact</li>
                        <li className={classLi}>Terms of Use</li>
                    </ul>
                </div>
                <div className="p-5">
                    <h2 className="text-2xl text-cyan-600 p-2">Community</h2>
                    <ul className='flex flex-col px-3 text-gray-300 text-lg'>
                        <li className={classLi}>Community Central</li>
                        <li className={classLi}>Support</li>
                        <li className={classLi}>Help</li>
                        <li className={classLi}>Do Not Sell My Info</li>
                    </ul>
                </div>
            </div>
            <p className="block text-white text-center text-lg py-5">Mariano Nuñez - All Right Reserved &copy; - {new Date().getFullYear()}</p>
        </div> 
    );
}
 
export default Footer;