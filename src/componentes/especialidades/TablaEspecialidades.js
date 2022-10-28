import especialidadServicios from "../../servicios/especialidadServicios";

const TablaEspecialidades = () => {

    const listaEspecialidades = especialidadServicios.obtenerEspecialidades();

    return (
        <div className="container">
            <h3>Lista de especialidades <a href="/especialidades/form" className="btn btn-sm btn-success">Agregar nuevo</a></h3>
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Atiende solo mujeres</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                {
                    listaEspecialidades.map((especialidad) => (
                        <tr>
                            <td>{especialidad.nombre}</td>
                            <td>{especialidad.descripcion}</td>
                            <td>{especialidad.atiende_solo_mujeres ? "Sí" : "No"}</td>
                            <td>
                                <button className="btn btn-primary btn-sm me-2">Editar</button>
                                <button className="btn btn-danger btn-sm">Eliminar</button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
}

export default TablaEspecialidades;