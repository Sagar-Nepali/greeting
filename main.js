const getinnerText = document.getElementById('clock')

const hour = new Date().getHours()

if (hour < 12){
    getinnerText.innerText = 'Good Morning 🌅'
}
else if(hour < 18){
    getinnerText.innerText = 'Good Evening 🕑'
}
else{
    getinnerText.innerText = 'Good Night 🌑'
}
