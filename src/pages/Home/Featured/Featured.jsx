import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import featuredImage from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item py-8 bg-fixed text-white"> 
            <SectionTitle heading='Featured' subHeading='Check it out'></SectionTitle>

            <div className="md:flex justify-center items-center py-8 px-16 gap-8"> 
                <div>
                    <img src={featuredImage} alt="" />
                </div>
                <div className="space-y-3">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, laudantium ut. Nisi modi autem voluptatum esse inventore amet facere est iure perspiciatis vel minima maxime eaque consequuntur, eos aut. Earum, perferendis modi aliquam aut beatae dolorum voluptas doloribus? Accusantium a modi voluptatibus cumque laudantium quidem suscipit nesciunt quisquam debitis quibusdam!</p>

                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>

    );
};

export default Featured;