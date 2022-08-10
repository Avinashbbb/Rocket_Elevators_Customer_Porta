// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

console.log("hello");
selectCustomer()




function selectCustomer(){
    fetch("https://apicsharpavinash.herokuapp.com/api/Customer")
        .then(response=>{
            return response.json();
        }).then(json=>{
            console.log(json)
        })
}