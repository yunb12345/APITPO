import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";

const login = () =>{
    return(
        <div className="bg-apigray h-screen overflow-x-hidden flex flex-wrap justify-center transition-all">
            <div className="my-10 flex flex-wrap bg-slate-100 justify-center items-center w-2/3">
                <div className='flex flex-col items-center gap-4 m-auto px-10 w-2/3'>
                    <div className='flex flex-wrap items-center text-center justify-center'>
                        <h1 className='font-bold text-2xl'>Log in</h1>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-4 m-auto lg:w-2/3'>
                        <TextField id="outlined-basic" label="Email" variant="outlined"/>
                        <TextField
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                
                        />
                    </div>
                    <div className='flex flex-col gap-4 pt-4'>
                        <button className="bg-apiyellow px-8 py-2 rounded-lg lg:px-20 hover:bg-apiyellowhover shadow-md transition-all">
                            Loguear
                        </button>
                        <span>No tenes cuenta? <Link to="/register" className='underline text-green-500'>Registrate</Link></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default login;