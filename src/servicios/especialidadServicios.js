const especialidades = [
    {
        nombre: "Otorrinolaringología",
        descripcion: "Atiende oido, nariz y vías respiratorias superiores",
        atiende_solo_mujeres: false
    }, 
    {
        nombre: "Ginecología",
        descripcion: "Atiende sistema reproductor femenino",
        atiende_solo_mujeres: true
    }
]

const especialidadServicios = {};

especialidadServicios.obtenerEspecialidades = () => {
    return especialidades;
}

export default especialidadServicios;
