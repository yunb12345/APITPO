import TextField from '@mui/material/TextField';

const registrar =()=>{
    return(
        <div className="bg-apigray h-screen overflow-x-hidden flex flex-wrap justify-center">
            <div className="mx-10 my-10 flex flex-wrap bg-slate-100">
                <div className="bg-apiyellow justify-center content-center w-full lg:w-1/3">
                    <div className="flex flex-col px-10 justify-center lg:gap-4">
                        <div className="flex flex-col justify-center text-center gap-2">
                            <div>
                                <h1 className="text-lg lg:text-2xl lg:font-bold">Bienvenido!</h1>
                            </div>
                            <div>
                                <p className="text-xs">Para seguir con nosotros por favor logueate</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center py-4">
                            <button className="bg-transparent border border-black px-5 py-1 rounded-full lg:px-10 lg:py-2">
                                Loguear
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center content-center text-center m-auto lg:w-2/3">
                    <div className="px-10">
                        <div className='py-0 lg:py-5'>
                            <h1 className='text-xl lg:text-4xl font-bold'>Crear Cuenta</h1>
                        </div>
                        <div className='flex flex-wrap py-5 gap-4 justify-center'>
                            <TextField id="outlined-basic" label="Nombre" variant="outlined" size="small"/>
                            <TextField id="outlined-basic" label="Email" variant="outlined" size="small"/>
                            <TextField
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                size="small"
                            />
                        </div>
                        <div className='py-5'>
                            <button className="bg-apiyellow px-8 py-2 rounded-full lg:px-20">
                                Registrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default registrar;