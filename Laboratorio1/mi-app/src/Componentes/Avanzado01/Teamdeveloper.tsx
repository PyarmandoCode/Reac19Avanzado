const empleados = [
    {
        nombre: 'Armando Ruiz',
        rol: 'Developer',
        imageurl: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
        nombre: 'Sara López',
        rol: 'Designer',
        imageurl: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
        nombre: 'Carlos Martínez',
        rol: 'Product Manager',
        imageurl: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
    {
        nombre: 'Marta Gómez',
        rol: 'Frontend Developer',
        imageurl: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
        nombre: 'José Pérez',
        rol: 'Backend Developer',
        imageurl: 'https://randomuser.me/api/portraits/men/3.jpg'
    },
    {
        nombre: 'Luis Rodríguez',
        rol: 'UX/UI Designer',
        imageurl: 'https://randomuser.me/api/portraits/men/4.jpg'
    },
    {
        nombre: 'Ana García',
        rol: 'Marketing',
        imageurl: 'https://randomuser.me/api/portraits/women/3.jpg'
    },
    {
        nombre: 'Pedro Fernández',
        rol: 'Sales Manager',
        imageurl: 'https://randomuser.me/api/portraits/men/5.jpg'
    },
    {
        nombre: 'Lucía Martínez',
        rol: 'Content Creator',
        imageurl: 'https://randomuser.me/api/portraits/women/4.jpg'
    },
    {
        nombre: 'Raúl Sánchez',
        rol: 'QA Tester',
        imageurl: 'https://randomuser.me/api/portraits/men/6.jpg'
    }
];

export default function Teamdeveloper() {
    return(
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-xl">
                    <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
                        Conoce a Nuestro Equipo
                    </h2>
                    <p className="mt-6 text-lg/8 text-gray-600">
                      Este es Nuestro equipo de desarrollo para nuestro proyecto de finanzas
                    </p>
                    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                        {empleados.map((person)=>(
                            <li key = {person.nombre}>
                                <div className="flex items-center gap-x-6">
                                    <img alt="" src={person.imageurl} className="size-16 rounded-full" />
                                    <div>
                                        <h3 className="text-base/7 font-semibold tracking-tight text-gray-900"> {person.nombre}
                                        </h3>
                                      <p className="text-sm/6 font-semibold text-indigo-600"> {person.rol}
                                        </p>  
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                </div>
        </div>    
    )
}