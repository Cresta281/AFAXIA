const productos = [
    {   id : 1,
        nombre : 'Banana',
        precio: 60,
        categoria : 'fruta',
        img : '' ,
        descripcion : 'Una Banana'
    },
    {   id : 2,
        nombre : 'Manzana',
        precio: 20,
        categoria : 'fruta',
        img : '' ,
        descripcion : 'Una Manzana'
    },
    {   id : 1,
        nombre : 'Pera',
        precio: 40,
        categoria : 'fruta',
        img : '' ,
        descripcion : 'Una Pera'
    }

]

export const conseguirProductos = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(productos)
        },2000)
    })
}