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
            <h1 className="text-2xl md:text-5xl p-14">Categories</h1>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-10 md:px-20 p-10">
                <CategoriesCard img={ElectricImg} id={'electric'}/>
                <CategoriesCard img={BassImg} id={'bass'}/>
                <CategoriesCard img={AcousticImg} id={'acoustic'}/>
                <CategoriesCard img={PedalsImg} id={'pedals'}/>
                <CategoriesCard img={AccImg} id={'accessories'}/>
                <CategoriesCard img={AmpImg} id={'amp'}/>
            </div>
        </>
     );
}
 
export default Categories;