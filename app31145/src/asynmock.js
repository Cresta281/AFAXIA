const productos = [
    {   id : '1',
        nombre : 'Bonsai Africano',
        precio: 7500,
        categoria : 'Bonsai',
        img : './images/lion_king.jpg' ,
        descripcion : 'Bonsai representativo de las llanuras africanas, no requiere grandes cantidades de riego, pero si de luz solar.'
    },
    {   id : '2',
        nombre : 'Bonsai Europeo',
        precio: 5000,
        categoria : 'Bonsai',
        img : './images/bonsai_espinoso.jpg' ,
        descripcion : 'Bonsai que crece frente a climas frios adversos, requiere riego diario con una leve cantidad minima de luz solar.'
    },
    {   id : '3',
        nombre : 'Cactus suculenta',
        precio: 1500,
        categoria : 'suculenta',
        img : './images/minicactus.jpg' ,
        descripcion : 'Ejemplar de Cactus, en su version suculenta, con riego promedio de 3 veces semanal y pocas cantidades de luz solar, ideales para lugares cerrados.'
    },
    {   id : '4',
        nombre : 'Suculentas starter pack',
        precio: 5000,
        categoria : 'pack',
        img : './images/small_suculentas.jpg' ,
        descripcion : 'Ideal para empezar tu renovacion verde, con este paquete de suculentas vas a poder darle ese toque mas ecologico a tu casa.'
    }

]
const categorias = [
    {id: 'Bonsai' },
    {id: 'suculenta'},
    {id: 'pack'}

]
export const conseguirCategorias = () => {
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(categorias)
        },500)
    })
}
export const conseguirProductos = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categoryId ? productos.filter(prod => prod.categoria === categoryId): productos)
        },500)
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === id))
        },500)
    })
}