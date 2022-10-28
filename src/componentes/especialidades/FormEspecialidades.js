const FormEspecialidades = () => {
    return (
        <div className="container">
            <h3>Nueva especialidad</h3>
            <form action="">
                <div className="row">
                    <div className="col-6">
                        <input className="form-control form-control-sm" type="text" name="especialidad" id="especialidad" placeholder="Ingrese especialidad"/>
                    </div>
                    <div className="col-6">
                        <input className="form-control form-control-sm" type="text" name="descripcion" id="descripcion" placeholder="Ingrese descripción" />
                    </div>
                </div>
            </form>
        </div>
        
    )
}

export default FormEspecialidades;