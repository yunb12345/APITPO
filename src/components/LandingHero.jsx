import image from "../imgs/landing_img.png"

const LandingHero = () => {
    return(
    <div className="flex flex-wrap items-center py-5 lg:py-10">
        <div className="w-full px-10 lg:w-1/2">
            <img src={image} alt="" className="h-auto w-full"></img>
        </div>
        <div className="w-full px-10 lg:w-1/2">
            <p className="text-2xl text-center lg:text-6xl lg:text-left">Lleva tus proyectos al siguiente nivel: organización, control y éxito en un solo lugar.</p>
        </div>
    </div>

    
    
    )
};
export default LandingHero;