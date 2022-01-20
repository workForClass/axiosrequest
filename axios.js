const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");

const getData = () => {
  axios.get("https://api.chucknorris.io/jokes/random?category=movie")
    .then(
      response => {console.log(response.data) }
    )
    .catch(function (error) {
      console.log(error);
    });
};


const sendData = () => {
  axios.post("https://reqres.in/api/users", {
    name: "morpheus", 
    job: "leader"
    })
    .then(response => {console.log(response);})
    .catch(function (error) {
      console.log(error);
    });
};

getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", sendData);

 //-------------- fetch code for same thing-------------
// const getData = () => {
//   fetch("https://api.chucknorris.io/jokes/random?category=movie")
//     .then(
//       response => {
//         if (response.ok) {
//           return response.json();
//         }
//         throw new Error("Request failed!");
//       },
//       networkError => {
//         console.log(networkError.message);
//       }
//     )
//     .then(jsonResponse => {
//       console.log(jsonResponse);
//       return jsonResponse;
//     });
// };

// const sendData = () => {
//   fetch("https://reqres.in/api/users", {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify({ name: "morpheus", job: "leader" }),
//   })
//     .then(
//       response => {
//         if (response.ok) {
//           return response.json();
//         }
//         throw new Error("Request failed!");
//       },
//       networkError => {
//         console.log(networkError.message);
//       }
//     )
//     .then(jsonResponse => {
//       console.log(jsonResponse);
//       return jsonResponse;
//     });
// };