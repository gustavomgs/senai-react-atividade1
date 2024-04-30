import { useState } from "react";
import { InputGroup } from "react-bootstrap";
import FontAwesome from 'react-fontawesome'

function LoginPage(){
    let [isClosed, setIsClosed] = useState(true)

    function submeterFormulario(form){
        alert("Testeeeeeeeee");
        form.preventDefault();
    }

    function updatePasswordState(value){
        setIsClosed(!isClosed);
    }

    return (
    <>
    <form onSubmit={submeterFormulario}>
        <div className="card">
            <div className="card-header">
                <h6>Login</h6>
            </div>
            <div className="card-body">
                <div className="row">

                    <div className="col-12 mb-2">
                        <label className="label-control">Login:</label>
                        <input type="email" className="form-control" placeholder="Seu login..."></input>
                    </div>        
                    
                    <div className="col-12 mb-2">
                        <label className="label-control">Senha:</label>
                        <div class="input-group">
                            <input type={isClosed ? "password" : "text" } className="form-control" placeholder="Insira sua senha..."></input>
                            <button type="button" onClick={updatePasswordState} className="btn btn-light border"><i className={isClosed ? "fa fa-eye-slash" : "fa fa-eye" }></i></button>
                        </div>
                    </div>                
                </div>
            </div>
            <div className="card-footer text-end">
                <button type="submit" className="btn btn-sm btn-success">Login</button>
            </div>
        </div>
    </form>
    </>
    );
}

export default LoginPage;