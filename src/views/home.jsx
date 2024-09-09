import image from "../imgs/landing_img.png";


const Home =()=>{
    return(
        <div>
            <div className="flex flex-wrap items-center py-5 lg:py-10">
                <div className="w-full px-10 lg:w-1/2">
                    <img src={image} alt="" className="h-auto w-full"></img>
                </div>
                <div className="w-full px-10 py-10 lg:w-1/2 lg:py-0">
                    <p className="text-2xl text-center lg:text-4xl lg:text-left">Lleva tus proyectos al siguiente nivel: organización, control y éxito en un solo lugar.</p>
                </div>
            </div>
                <div className="items-center h-1/2 w-screen bg-apigray">
                    <div className="">
                        <div className="mx-20 pt-10 text-center lg:text-left">
                            <p className="text-3xl m-5 font-bold lg:text-5xl">Potencia tu creatividad</p>
                            <p className="text-xl m-5 lg:text-3xl">Simple, fliexible y moderno. Todo lo que buscas esta en nuestras
                            herramientas que brindamos
                            </p>
                        </div>
                        <div className="flex mx-10 flex-wrap items-center justify-center">
                            <div className="flex justify-center pt-5 lg:w-2/3 lg:pt-0">
                                <img src={image} alt="" className="h-full w-full m-auto"></img>
                            </div>
                            <div className="items-center text-center lg:w-1/3 lg:text-left">
                                <div className="text-lg m-20">
                                    <p>Organizacion simple</p>
                                    <p className="pt-3">Menu sencillo y facil de seguir. Brindamos la mayor calidad para nuestros usuarios.</p>
                                </div>
                                <div className="text-lg lg:text-xl m-20">
                                    <p>Manejo de costos</p>
                                    <p className="pt-3">Calcula automaticamente la contribucion de cada usuario y tiene en cuenta las distintas tareas realizadas.</p>
                                </div>
                                <div className="text-lg lg:text-xl m-20">
                                    <p>Manejo de proyectos</p>
                                    <p className="pt-3">Verifica las tareas en orden,
                                    las fechas de entrega y administra los miembros del proyectos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    )
}
export default Home