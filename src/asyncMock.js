const products = [
    {
        id: '1', name:'PC Gamer',price: 150000, img:'', category:'Pcs', stock: 6, description:""
    },
    {
        id: '2', name:'Samsung LCD',price: 40000, img:'', category:'Monitores', stock: 20, description:""
    },
    {
        id: '3', name:'Teclado Mecanico',price: 15000, img:'', category:'Teclados', stock: 55, description:""
    },
    {
        id: '4', name:'LG LCD',price: 28000, img:'', category:'Monitores', stock: 35, description:""
    },
    {
        id: '5', name:'Patrlantes PC USB',price: 5000, img:'', category:'Estereos', stock: 10, description:""
    },
    {
        id: '6', name:'Patrlantes PC Bluetooth',price: 9000, img:'', category:'Estereos', stock: 7, description:""
    }
]


export const getProducts = () => {
return (new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(products);
    }, 2000);
}))
};

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products.find( e => e.id === id ));
        },2000)
    })
};


export const getProductsByCategory=(category)=>{
    return new Promise((resolve)=>{
        resolve(products.filter(e => e.category===category))
    })
};