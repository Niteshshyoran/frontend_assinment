function unitmovementCheak(averagecodingscore,averagehukumuscore,cutoff){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const finalaverage = (averagecodingscore+averagehukumuscore)/2;
            if (finalaverage>=cutoff){
                resolve(finalaverage);
            }
            else{
                reject("sorry you haven't clear the final cutoff")
            }
               
        },2000)
    })
}

unitmovementCheak(90,90,80)
.then((finalaverage)=>{
    console.log(`congratulations your final avg score is ${finalaverage}`)
})
.catch((error)=>{
    console.log(error);
    
})