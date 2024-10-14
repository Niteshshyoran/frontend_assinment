//creating a function getuserdetails
function getUserData(xyz,callback){
    setTimeout(() => {
        //timeout to delay 2 second
        const data = { id:xyz, name: "John", email: "john@gmail.com" };
        callback(data);
    }, 2000);
}
//creating a function to display the details
function displayuser(user){
    console.log(`user id:- ${user.id}`)
    console.log(`user name:- ${user.name}`)
    console.log(`email:- ${user.email}`)
    
}
getUserData(12,displayuser)