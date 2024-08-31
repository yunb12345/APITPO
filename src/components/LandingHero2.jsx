import image from "../imgs/placeholder.jpg"

const LandingHero2 = () => {
    return(
    <div className=" items-center h-1/2 w-screen bg-apigray">
        <div className="">
            <div className="mx-20 h-full w-full pt-10">
                <p className="text-5xl m-5 font-bold">Potencia tu creatividad</p>
                <p className="text-3xl m-5">Simple, fliexible y moderno. Todo lo que buscas esta en nuestras
                herramientas que brindamos</p>
            </div>
            <div className="flex">
                <div className="w-2/3">
                    <img src={image} alt="" className="h-auto w-2/3 m-10"></img>
                </div>
                <div className="w-1/3">
                    <div className="text-xl m-20">
                        <p>Organizacion simple</p>
                        <p className="pt-3">Menu sencillo y facil de seguir. Brindamos la mayor calidad para nuestros usuarios.</p>
                    </div>
                    <div className="text-xl m-20">
                        <p>Manejo de costos</p>
                        <p className="pt-3">Calcula automaticamente la contribucion de cada usuario y tiene en cuenta las distintas tareas realizadas.</p>
                    </div>
                    <div className="text-xl m-20">
                        <p>Manejo de proyectos</p>
                        <p className="pt-3">Verifica las tareas en orden,
                        las fechas de entrega y administra los miembros del proyectos</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    )
};
export default LandingHero2;