import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import MenuItem from "../../shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')

    // const [menu, setMenu] = useState([])

    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter( item => item.category === 'popular')

    //             setMenu(popularItems)
    //         })
    // }, [])



    // console.log(menu);
    return (
        <div>
            <SectionTitle
                heading='From Our Menu'
                subHeading='Check it out'
            ></SectionTitle>

            <div className="grid md:grid-cols-2 gap-8 my-16">
                {
                    popular.map( item => <MenuItem
                    key={item._id}
                    item= {item}
                    ></MenuItem> )
                }
            </div>
        </div>
    );
};

export default PopularMenu;