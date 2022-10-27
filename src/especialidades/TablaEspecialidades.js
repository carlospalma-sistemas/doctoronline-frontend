const TablaEspecialidades = () => {
    return (
        <table className="table table-sm container">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Atiende solo mujeres</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Otorrinolaringología</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>Ginecología</td>
                    <td>Si</td>
                </tr>
            </tbody>
        </table>
    );
}

export default TablaEspecialidades;