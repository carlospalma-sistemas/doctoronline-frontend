import axios from "axios";

const especialidadServicios = {};

especialidadServicios.obtenerEspecialidades = () => {
    return axios.get("http://localhost:8000/especialidades");
}

especialidadServicios.buscarEspecialidadPorCriterio = (criterio) => {
    return axios.get("http://localhost:8000/especialidades?q="+criterio);
}

export default especialidadServicios;
