import {useState, useEffect} from 'react';
import Error from './Error';

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  // Losh hooks se deben llamar dentro de la funcion y antes del return
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false)

  useEffect(() => {
    if( Object.keys(paciente).length > 0){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente]);


  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return fecha+random;
  }

  const handleSubmit = (e) =>{
    e.preventDefault()

    //Validacion del fomrulario
    if( [nombre, propietario, email, fecha, sintomas].includes('') ){
      setError(true)
      return;
    }
      setError(false)
      //CREAR EL OBJETO DE PACIENTE
      const objetoPaciente ={
        nombre,
        propietario, 
        email, 
        fecha, 
        sintomas
      }

      if(paciente.id){
        //Editando el registro
        objetoPaciente.id=paciente.id
        const pacientesActualiados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )
        setPacientes(pacientesActualiados)
        setPaciente({})
      }else{
        //Nuevo registro
        objetoPaciente.id=generarId()
        setPacientes([...pacientes, objetoPaciente]);
      }

      //Reiniciar el formulario despues de enviar
      setNombre('')
      setPropietario('')
      setEmail('')
      setFecha('')
      setSintomas('')
  }
  
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center">Agrega los pacientes y {''}<span className="text-indigo-700 font-bold">Administralos</span></p>

      {/* inicio del formulario */}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-xl py-10 px-5 mt-10 mb-10 mx-5">

      {error && <Error><p className='font-bold text-white' >Todos los campos son obligatorios</p></Error>}

        {/* campos */}
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="mascota">Nombre Mascota:</label>
          <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" id="mascota" type="text" placeholder="Nombre de la mascota" 
                value={nombre}
                onChange={ (e) => setNombre(e.target.value)}/>
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="propietario">Nombre Propietario:</label>
          <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" id="propietario" type="text" placeholder="Nombre del propietario"
              value={propietario}
              onChange={ (e) => setPropietario(e.target.value)}/>
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="email">Email:</label>
          <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" id="email" type="email" placeholder="Ingresa el correo del propietario"
              value={email}
              onChange={ (e) => setEmail(e.target.value)}/>
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="alta">Ingreso:</label>
          <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" id="alta" type="date"
                value={fecha}
                onChange={ (e) => setFecha(e.target.value)}/>
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">Sintomas:</label>
          <textarea id="sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Ingresa los sintomas presentados"
                value={sintomas}
                onChange={ (e) => setSintomas(e.target.value)}/>
        </div>

        
        <input type="submit" className="bg-indigo-800 w-full p-3 text-white font-bold hover:bg-indigo-500 cursor-pointer transition-colors" 
              value={paciente.id ? 'Editar Paciente': 'Agregar Paciente'}/>
      </form>
    </div>
  )
}

export default Formulario
