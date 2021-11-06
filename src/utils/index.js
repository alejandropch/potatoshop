const getTotalPrice=(cart)=>{
    if(Object.keys(cart).length===0)return 0
    const reducer=(previousValue, currentValue)=>previousValue+currentValue.price
    const sum =cart.reduce(reducer,0)

    return sum
}

export default getTotalPrice;