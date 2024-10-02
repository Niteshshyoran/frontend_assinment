function codingScoreCheak(marks,cutoff){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const avgscore = marks.reduce((sum,marks)=>sum+marks,0)/marks.length;
            if(avgscore>=cutoff){
                resolve(avgscore);
            }
            else{
                reject("sorry you haven't cleared the coding round")
            }
        }, 2000);
    });
}
codingScoreCheak([93,43,66,64], 60)
    .then((avgscore)=>{
        console.log(`congratulations your average score is ${avgscore}`);
    })
    .catch((error)=>{
        console.log(error)
    })