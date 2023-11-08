
const Paciente = ({paciente, setPaciente, elimnarPaciente}) => {

  const {nombre, propietario, email, fecha, sintomas, id} = paciente

  const handleEliminar = () => {
    const respuesta = confirm('Deseas eliminar el registro de este paciente');
    if (respuesta) {
      elimnarPaciente(id)
    }
  }

  return (
    <div className="mx-5 my-10 bg-white shadow-md rounded-xl px-5 py-10">
        <p className=" font-bold uppercase text-gray-700 mb-3">Nombre: <span className=" font-normal normal-case">{nombre}</span></p>
        <p className=" font-bold uppercase text-gray-700 mb-3">Propietario: <span className=" font-normal normal-case">{propietario}</span></p>
        <p className=" font-bold uppercase text-gray-700 mb-3">Email: <span className=" font-normal normal-case">{email}</span></p>
        <p className=" font-bold uppercase text-gray-700 mb-3">Fecha ingreso: <span className=" font-normal normal-case">{fecha}</span></p>
        <p className=" font-bold uppercase text-gray-700 mb-3">Sintomas: <span className=" font-normal normal-case">{sintomas}</span></p>
        <div className="flex justify-between mt-5">
          <button type="button" className="py-2 px-10 bg-indigo-700 text-white font-bold uppercase rounded-lg"
                  onClick={()=> setPaciente(paciente)}>Editar</button>

          <button type="button" className="py-2 px-10 bg-red-700 text-white font-bold uppercase rounded-lg"
                  onClick={handleEliminar}>Eliminar</button>
        </div>
    </div>
  )
}

export default Paciente
