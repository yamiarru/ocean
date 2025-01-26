const misProductos = [
  {
    id: 1,
    nombre: "Manteca Corporal",
    precio: 15000,
    img: "/img/mantecaCorporal.jpg",
    categoria: "Cuidado de la piel",
    descripcion:
      "La manteca corporal es un producto de cuidado personal que hidrata la piel y la protege de factores externos. Su textura es espesa y untuosa, y está compuesta por aceites, mantecas naturales y otros ingredientes hidratantes.",
  },
  {
    id: 2,
    nombre: "Exfoliante Corporal",
    precio: 12000,
    img: "/img/exfolianteCorporal.jpg",
    categoria: "Cuidado de la piel",
    descripcion:
      "Un exfoliante corporal es un producto cosmético que elimina las células muertas de la piel y las impurezas. Su objetivo es limpiar la piel y ayudar a que se renueve.",
  },
  {
    id: 3,
    nombre: "Jabón Corporal",
    precio: 13000,
    img: "/img/jabonCorporal.jpg",
    categoria: "Cuidado personal",
    descripcion:
      "El jabón corporal es un producto de limpieza que se usa para lavar el cuerpo y eliminar impurezas. Se puede encontrar en presentación líquida o en barra.",
  },
  {
    id: 4,
    nombre: "Spray Repelente Insectos",
    precio: 19000,
    img: "/img/repelente.jpg",
    categoria: "Accesorios",
    descripcion:
      "Los repelentes de mosquitos para uso en humanos (o uso personal) son productos que se aplican sobre las diversas zonas de la piel expuesta con el fin de protegerla contra las picaduras de los insectos.",
  },
  {
    id: 5,
    nombre: "Aceite Iluminador Corporal",
    precio: 15000,
    img: "/img/aceiteIluminador.jpg",
    categoria: "Cuidado personal",
    descripcion:
      "El aceite corporal iluminador no solo hidrata profundamente la piel, sino que también proporciona un brillo natural y radiante.",
  },
  {
    id: 6,
    nombre: "Desodorante Natural",
    precio: 6000,
    img: "/img/desodoranteNatural.jpg",
    categoria: "Cuidado personal",
    descripcion:
      "Un desodorante natural es un producto que neutraliza el mal olor de las axilas sin utilizar ingredientes químicos agresivos. En su lugar, se vale de ingredientes naturales, como plantas y minerales, para cuidar la piel.",
  },
  {
    id: 7,
    nombre: "Sales de Baño",
    precio: 5000,
    img: "/img/salesBaño.jpg",
    categoria: "Accesorios",
    descripcion:
      "Las sales de baño son un producto que se usa en el baño para ablandar el agua y la piel, y para exfoliar. También pueden tener efectos psicoestimulantes y recompensatorios.",
  },
  {
    id: 8,
    nombre: "Sérum Capilar",
    precio: 9000,
    img: "/img/serumCapilar.jpg",
    categoria: "Cuidado de la piel",
    descripcion:
      "Un sérum capilar es un producto cosmético que se aplica en el cabello para hidratarlo, protegerlo y aportarle brillo. Se formula con ingredientes nutritivos como vitaminas y aceites.",
  },
  {
    id: 9,
    nombre: "Balsamo Limpiador",
    precio: 8000,
    img: "/img/balsamoLimpiador.jpg",
    categoria: "Cuidado de la piel",
    descripcion:
      "Un bálsamo limpiador es un producto de cosmética que se usa para desmaquillar, limpiar, hidratar y suavizar la piel. Es un tipo de crema espesa que se derrite en aceite al entrar en contacto con el agua.",
  },
  {
    id: 10,
    nombre: "Shampoo Sólido",
    precio: 9500,
    img: "/img/shampooSolido.jpg",
    categoria: "Cuidado personal",
    descripcion:
      "El shampoo solido es una pastilla similar a un jabón tradicional, pero formulada para limpiar el cabello y el cuero cabelludo. Con ingredientes naturales y una textura única, ofrece los mismos beneficios que el shampoo líquido, pero con ventajas adicionales.",
  },

  {
    id: 11,
    nombre: "Vela de Soja",
    precio: 5000,
    img: "/img/velaSoja.jpg",
    categoria: "Accesorios",
    descripcion: `Una vela de soja es una vela hecha de cera de soja, un derivado del aceite de soja. Son velas naturales, ecológicas y sostenibles. 
        Las velas de soja tienen varias ventajas, entre ellas: 
        Son no tóxicas y no cancerígenas.
        Son ecológicas y no emiten gases perjudiciales.
        Son más duraderas que las velas de parafina.
        Son sostenibles porque la soja es un recurso renovable y biodegradable.
        Son limpias porque queman con menos hollín que las velas de parafina.
        Son seguras para la salud porque su punto de fusión es bajo.
        Se pueden usar para masajes porque nutren e hidratan la piel.
        Las velas de soja se pueden aromatizar con aceites esenciales, que se extraen de la planta de soja`,
  },
  {
    id: 12,
    nombre: "Home Spray",
    precio: 8000,
    img: "/img/homeSpray.jpg",
    categoria: "Accesorios",
    descripcion: "Este ambientador en spray ofrece un aroma delicado y sutil, evocando la esencia de peras jugosas y maduras. Su fragancia suave transforma cualquier espacio, creando un ambiente acogedor y relajante. Ideal para el hogar o la oficina, su fórmula de larga duración asegura que cada rincón se llene de frescura.",
  },
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(misProductos);
    }, 2000);
  });
};

export const getProductoPorId = (id) => {
  return new Promise((resolve, reject) => {
    const producto = misProductos.find((item) => item.id === id);
    if (producto) {
      resolve(producto);
    } else {
      reject(new Error("Producto no encontrado"));
    }
  });
};
