// asyncmock.js
const misProductos = [
    {id: 1, nombre: "Manteca Corporal", precio: 15000, img: "/img/mantecaCorporal.jpg", categoria: "Cuidado de la piel"},
    {id: 2, nombre: "Exfoliante Corporal", precio: 12000, img: "/img/exfolianteCorporal.jpg", categoria: "Cuidado de la piel"},
    {id: 3, nombre: "Jabón Corporal", precio: 13000, img: "/img/jabonCorporal.jpg", categoria: "Cuidado personal"},
    {id: 4, nombre: "Spray Repelente Insectos", precio: 19000, img: "/img/repelente.jpg", categoria: "Accesorios"},
    {id: 5, nombre: "Aceite Iluminador Corporal", precio: 15000, img: "/img/aceiteIluminador.jpg", categoria: "Cuidado personal"},
    {id: 6, nombre: "Desodorante Natural", precio: 6000, img: "/img/desodoranteNatural.jpg", categoria: "Cuidado personal"},
    {id: 7, nombre: "Sales de Baño", precio: 5000, img: "/img/salesBaño.jpg", categoria: "Accesorios"},
    {id: 8, nombre: "Sérum Capilar", precio: 9000, img: "/img/serumCapilar.jpg", categoria: "Cuidado de la piel"},
];


export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 2000);
    });
};

// Asegúrate de exportar la función getProductoPorId
export const getProductoPorId = (id) => {
    return new Promise((resolve, reject) => {
        const producto = misProductos.find(item => item.id === id);
        if (producto) {
            resolve(producto);
        } else {
            reject(new Error("Producto no encontrado"));
        }
    });
};
