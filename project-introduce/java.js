// alert("Welcome to Khanh's profile");


setInterval(function (){
    var time = new Date()
    console.log(time)
    document.getElementsByClassName('time')[0].innerHTML =`${time.getHours()<10 ? '0'+time.getHours() : time.getHours()}: ${time.getMinutes()<10 ? '0'+time.getMinutes() : time.getMinutes()} : ${time.getSeconds()<10 ? '0'+time.getSeconds() : time.getSeconds()} `
},1000)
