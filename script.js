// // fetch(API)
// // .then((response)=>response.json().then((data)=>console.log(data.data[0].color)))

const apiUrl = "https://emojihub.yurace.pro/api/all/group/animal-bird";

// Create a function to fetch data from the API using a promise
function fetchData() {
    return new Promise((resolve, reject) => {
        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    reject("Failed to fetch data");
                    return;
                }
                return response.json();
            })
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

// Call the fetchData function and handle the response
fetchData()
    .then((data) => {
        let container = document.getElementById("container");
        let row = document.getElementById("rows");

        for (let i = 0; i < data.length; i++) {
            let div = document.createElement("div")
            div.setAttribute("class","col-md-3")
            div.innerHTML = `
            <div class="card" style="width: 18rem;">
            <h1>${data[i].htmlCode}</h1>
                <div class="card-body">
                    <h5 class="card-title">${data[i].name}</h5>
                    <p class="card-text">${data[i].group}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
   `;
            row.append(div)
            container.append(row)
            console.log(data[i]);
        }
        // console.log(data);
        // You can access the data from the API here and perform further operations
    })
    .catch((error) => {
        console.error("Error:", error);
    });
