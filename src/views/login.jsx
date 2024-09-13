import TextField from '@mui/material/TextField';

const login = () =>{
    return(
        <div className="bg-apigray h-screen overflow-x-hidden flex flex-wrap justify-center">
            <div className="my-10 flex flex-wrap bg-slate-100 justify-center items-center w-auto">
                <div className='flex flex-col items-center gap-4 m-auto px-10 lg:px-40'>
                    <div className='flex flex-wrap items-center text-center justify-center'>
                        <h1 className='font-bold text-2xl'>Log in</h1>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-4 m-auto'>
                        <TextField id="outlined-basic" label="Email" variant="outlined" size="small"/>
                        <TextField
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                size="small"
                        />
                    </div>
                    <div>
                        <button className="bg-apiyellow px-8 py-2 rounded-full lg:px-20">
                            Loguear
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default login;