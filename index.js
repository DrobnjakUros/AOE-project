document.getElementById("output").onload = function() {getCivs()};
document.getElementById('getCivs').addEventListener
('click', getCivs);


 function getCivs(){ 
    fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
    .then((res) => res.json())
    .then((data) => {
        data.forEach(function(post){
            output += `
            <div>
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            </div>
            `;
        });
        document.getElementById('output').innerHTML = data;
    })
}

    




