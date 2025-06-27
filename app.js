
fetch('https://whatyearisit-backend-xps1.vercel.app/year').then(res => res.json())
.then((data) => {
    console.log(data)
    document.querySelector("#year").textContent = data.year })
