import { Helmet } from 'react-helmet-async';
import Cover from '../../shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'


import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {

    const [menu] = useMenu()
    // console.log(menu);
    const dessert = menu.filter(item => item.category === 'dessert')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    // console.log(menu);

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title='Our menu'></Cover>
            <SectionTitle heading="Today's Offer" subHeading="Don't miss"></SectionTitle>

            {/* offered */}
            <MenuCategory items={offered}></MenuCategory>

            {/* dessert */}
            <MenuCategory
                items={dessert}
                title='Desert'
                img={dessertImg}
            ></MenuCategory>

            {/* pizza */}
            <MenuCategory
                items={pizza}
                title='Pizza'
                img={pizzaImg}
            ></MenuCategory>

            {/* salad */}
            <MenuCategory
                items={salad}
                title='salad'
                img={saladImg}
            ></MenuCategory>

            {/* soup */}
            <MenuCategory
                items={soup}
                title='soup'
                img={soupImg}
            ></MenuCategory>
        </div>
    );
};

export default Menu;