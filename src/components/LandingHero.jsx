import image from "../imgs/landing_img.png"

const LandingHero = () => {
    return(
    <div className="flex justify-center items-center h-1/2 w-screen">
        <div className="h-full w-full flex justify-center items-center">
            <img src={image} alt="" className="h-auto w-auto"></img>
        </div>
        <div className="h-full w-full flex justify-center items-center mx-20">
            <p className="text-6xl text-left">Lleva tus proyectos al siguiente nivel: organización, control y éxito en un solo lugar.</p>
        </div>
    </div>
    
    
    )
};
export default LandingHero;