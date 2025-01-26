import React from 'react'

const Promesas = () => {


    /* setTimeout(()=>{
        console.log("Tarea A")
    }, 3000)


    setTimeout(()=>{
        console.log("Tarea B")
    }, 1500)
 */
    //promesas:

const falsasPromesas = (estado) => {
    return new Promise((resolve,reject) =>{
        if(estado) {
            resolve("Promesa cumplida, me llegó la play")
        } else {
            reject("Promesa rechaza, me llegó carbón")
        }

    })

}

/* console.log(falsasPromesas(true)) */


falsasPromesas(true)
 .then((respuesta) => {
    console.log("Sisis se cumplió voya  pdoer jugar al fifa porque" + respuesta)
 })
 .catch((error) => {
    console.log(error)
 })
 .finally(()=> console.log("Proceso terminado"))


  return (
    <div>Promesas</div>
  )
}





export default Promesas