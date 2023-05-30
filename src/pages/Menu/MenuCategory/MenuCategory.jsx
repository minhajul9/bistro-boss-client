import { Link } from "react-router-dom";
import Cover from "../../shared/Cover/Cover";
import MenuItem from "../../shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
    return (
        <div className="m-6">
            {
                title && <Cover img={img} title={title}></Cover>
            }

            <div className="grid md:grid-cols-2 gap-8 my-16">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>

            <div className="flex justify-center my-12">
                <Link to={`/order/${title}`}><button className="btn btn-outline border-0 border-b-4">Order Now</button></Link>
            </div>
        </div>
    );
};

export default MenuCategory;