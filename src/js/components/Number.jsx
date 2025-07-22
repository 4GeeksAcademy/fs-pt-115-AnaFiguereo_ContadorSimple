//Vamos a exportar directamente la constante number a la cual le pasaremos un parámetro al que luego le daremos un valor
// eso ya lo he explicado antes, pero volveré a explicarlo:
//A esa variable le vamos a pasar un prop de la que luego, le meteremos información
// A esa constante le daremos una función en la que haga algo, en este caso devolvernos html
export const Number = ({number}) => {

    return (
        <div className="bg-dark m-4 p-3" style={{ width: "auto", height: "auto"}}>
            <h1 className="text-white text-center">{number}</h1> {/* Aqui estamos poniendo el prop number con estilo de H1 y +*/}
        </div>
    )

}
// La diferencia entre prop y parámetro es que:
//Parámetro ya tiene un valor definido desde que la creas
// El prop es como tener una caja vacía a la que luego le metes los datos
// props: recogida de datos