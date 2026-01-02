    // async function OrderDoner(){
    //     try { 
    //         await new Promise((resolve) =>setTimeout(resolve, 3000))
    //  console.log("заказ онделуде");
    //   throw new Error("произошла ошибка")
    //    await new Promise((resolve)=>setTimeout(resolve, 2000))
    //    console.log("ваш заказ успешно принят")
        
    
    //     }catch(error){

    //         console.error("произошла ошибка")
    //     }
        
    // };
    // OrderDoner();
function wait(ms){
    return new Promise((resolve) => setTimeout(resolve, ms))
}
    async function pizza(){
await wait(2000)
    const ok=Math.random()>0.5
    if(!ok) return "интернет не работает"
    return "пицерия жумыс истеп тур"
    
    };