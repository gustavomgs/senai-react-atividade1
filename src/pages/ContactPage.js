function ContactPage(){

    function submeterFormulario(form){
        alert("Testeeeeeeeee");
        form.preventDefault();
    }

    return (
    <>
    <form method="get" onSubmit={submeterFormulario}>
        <div className="card">
            <div className="card-header">
                <h6>Formulário de contato</h6>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-12 mb-2">
                        <label className="label-control">Nome:</label>
                        <input type="text" name="nome" className="form-control" placeholder="Insira seu nome..."></input>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-6  mb-2">
                    <label className="label-control">Telefone:</label>
                        <input type="text" className="form-control" placeholder="Insira seu telefone..."></input>
                    </div>
                    <div className="col-sm-12 col-md-8 col-lg-6  mb-2">
                    <label className="label-control">Assunto:</label>
                        <input type="text" className="form-control" placeholder="Insira o assunto..."></input>
                    </div>
                    <div className="col-12">
                    <label className="label-control">Mensagem:</label>
                        <textarea type="text" className="form-control" placeholder="Insira a mensagem..."></textarea>
                    </div>
                </div>
            </div>
            <div className="card-footer text-end">
                <button type="submit" className="btn btn-sm btn-success">Enviar Contato</button>
            </div>
        </div>
    </form>
    </>
    );
}

export default ContactPage;