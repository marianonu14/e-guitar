import CategoriesCard from "../../components/CategoriesCard";

import AmpImg from '../../public/amp_1.jpg'
import AccImg from '../../public/acc_1.webp'
import ElectricImg from '../../public/electric_2.jpg'
import BassImg from '../../public/bass_2.jpg'
import PedalsImg from '../../public/pedal_1.jpg'
import AcousticImg from '../../public/acoustic_2.jpg'

const Categories = () => {
    return ( 
        <>
            <h1 className="text-2xl md:text-5xl md:p-14 px-6 pt-6">Categories</h1>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10 md:px-20 p-6">
                <CategoriesCard img={ElectricImg} id={'electric'} name={'Electric Guitar'}/>
                <CategoriesCard img={BassImg} id={'bass'} name={'Bass'}/>
                <CategoriesCard img={AcousticImg} id={'acoustic'} name={'Acoustic Guitar'}/>
                <CategoriesCard img={PedalsImg} id={'pedals'} name={'Pedals'}/>
                <CategoriesCard img={AccImg} id={'accessories'} name={'Accessories'}/>
                <CategoriesCard img={AmpImg} id={'amp'} name={'Amps'}/>
            </div>
        </>
     );
}
 
export default Categories;