const products = [
    {
        id: '1', name:'PC Gamer',price: 150000, img:'', category:'pcs', stock: 6
    },
    {
        id: '2', name:'Samsung LCD',price: 40000, img:'', category:'monitores', stock: 20
    },
    {
        id: '3', name:'Teclado Mecanico',price: 15000, img:'', category:'teclados', stock: 55
    },
    {
        id: '4', name:'LG LCD',price: 28000, img:'', category:'monitores', stock: 35
    },
    {
        id: '5', name:'Patrlantes PC USB',price: 5000, img:'', category:'estereos', stock: 10
    },
    {
        id: '6', name:'Patrlantes PC Bluetooth',price: 9000, img:'', category:'estereos', stock: 7
    }
]


const getProducts = () => {
return (new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(products);
    }, 2000);
}))
}

export default getProducts;