
const pauseTime = async(milis: number)=>{
    return await new Promise((resolve, reject)=>{
        setTimeout(
            ()=>{
                resolve(true);
            }, milis
        );
    });    

}

export default pauseTime;