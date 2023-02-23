const button = document.getElementById("button");
const dataContainer = document.getElementById("data");
const fname = document.getElementById("fname")
console.log(fname);
button.addEventListener("click", () => {
  fetch("http://localhost:3000/user/getall")
    .then(response => response.json())
    .then(data =>
         {
            console.log(data);
      let output = "";
      data.forEach(item => {
        output += `<div class =" user"><p>User name: ${item.user_name}</p>`;
        output += `<p> Email: ${item.Email}</p>`;
        output += `<p>Phone : ${item.phone}</p>`;
        output += `<p>Id: ${item.Id}</p> </div>`;
      });
      dataContainer.innerHTML = output;
    })
    .catch(error => {
      console.error(error);
    });
});
