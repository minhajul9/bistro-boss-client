
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="text-center md:w-4/12 mx-auto my-12">
            <p className="text-[#D99904] mb-2">---{subHeading}---</p>
            <h3 className="text-4xl border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;