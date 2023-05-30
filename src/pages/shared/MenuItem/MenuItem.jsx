
const MenuItem = ({item}) => {

    const {name, recipe, image, price} = item;

    return (
        <div className="flex space-x-6 ">
            <img className="w-[120px] h-[104px] rounded-b-full rounded-tr-full" src={image} alt="" />
            <div>
                <h3 className="uppercase">{name} ---------------</h3>
                <p>{recipe}</p>
            </div>

            <p className="text-yellow-500">${price}</p>
            
        </div>
    );
};

export default MenuItem;