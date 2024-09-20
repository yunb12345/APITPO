import image from "../imgs/landing_img.png";
import { FaCalculator } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { Card } from "flowbite-react";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const Home =()=>{
    return(
        <div>
            <div className="flex flex-wrap items-center py-5 lg:py-10">
                <div className="w-full px-10 lg:w-1/2">
                    <img src={image} alt="" className="h-auto w-full"></img>
                </div>
                <div className="w-full px-10 py-10 lg:w-1/2 lg:py-0 text-2xl text-center lg:text-5xl font-bold">
                    <p className="lg:text-left py-10">Lleva tus proyectos al siguiente nivel: organización, control y éxito en un solo lugar.</p>
                    <Button color="dark" className="px-10 lg:px-32 lg:py-2 m-auto font-bold"><Link to="/register">Entrar</Link></Button>
                </div>
            </div>
            <div className="items-center w-screen bg-[#F0F0F0]">
                <div className="">
                    <div className="mx-20 pt-10 text-center lg:text-left">
                        <p className="text-3xl m-5 font-bold lg:text-5xl">Potencia tu creatividad</p>
                        <p className="text-xl m-5 lg:text-3xl">Simple, fliexible y moderno. Todo lo que buscas esta en nuestras
                        herramientas que brindamos
                        </p>
                    </div>
                    <div className="flex mx-10 flex-wrap items-center justify-center pb-10">
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
            <div className="py-10 px-10">
                <div className="text-center py-5 text-2xl lg:text-left">
                    <h1>¿Que puedo hacer en Splitify?</h1>
                </div>
                <div className="grid md:grid-cols-3 gap-10 py-10 lg:px-10 lg:text-2xl">
                    <Card>
                        <FaCalculator className="text-xl lg:text-2xl"/>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Calcular
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                        Esta app calcula automaticamente todo.
                        </p>
                    </Card>
                    <Card>
                        <FaCalendar className="text-xl lg:text-2xl"/>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Planificar
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Mira las distintas fechas de tus proyectos para ser proactivo.
                        </p>
                    </Card>
                    <Card>
                        <FaRocket className="text-xl lg:text-2xl"/>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Rapido
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Aplicacion con una interfaz intuitiva para que no pierdas tiempo.
                        </p>
                    </Card>
                </div>
            </div>
        </div>

    )
}
export default Home;