import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login({setSession}){
    const navigate=useNavigate();

    const changeSession=()=>{
        sessionStorage.setItem("token", "test.token.tiendita");
        navigate("/auth/home");
        setSession(true);
    }

    useEffect(() => {
        if(!!sessionStorage.getItem("token")){
            navigate("/auth/home");
        }
    }, []);

    return(
        <main className="d-flex align-items-center justify-content-center">
            <div className="card border-0 rounded-4 shadow" style={{width:400}}>
                <div className="card-body">
                    <p className="fw-bold">Inicio de sesion</p>

                    <form action="" className="mt-4 row gap-3">
                        <div className="col-12">
                            <label htmlFor="">Usuario o correo electronico</label>
                            <input type="text"  className="form-control"/>
                        </div>

                        <div className="col-12">
                            <label htmlFor="">Contrasenia</label>
                            <input type="password"  className="form-control"/>
                        </div>

                        <div className="col-12 text-center">
                            <button onClick={()=>changeSession()} className="btn btn-primary col-12">Iniciar sesion</button>

                            <p className="my-3"> O</p>

                            <Link className="btn btn-outline-primary col-12" to="/register">Registrarme</Link>
                        </div>
                    </form>

                </div>
            </div>
        </main>
    );
}