import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, elimnarPaciente}) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className=" font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-lg text-center mt-5 mb-10">Administra tus <span className="text-indigo-700 font-bold">Pacientes y Citas</span></p>

          {pacientes.map( (paciente, ) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              elimnarPaciente={elimnarPaciente}
            />
          ))}
        </>
      ): (
        <>
          <h2 className=" font-black text-3xl text-center">No hay Pacientes</h2>
          <p className="text-lg text-center mt-5 mb-10">Aun no se agrega ningun paciente, <span className="text-indigo-700 font-bold">agrega para mostrar</span></p>
        </>
      )}
    </div>
  )
}

export default ListadoPacientes
