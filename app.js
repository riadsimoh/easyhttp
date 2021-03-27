document.getElementById("button1").addEventListener("click", getText);
document.getElementById("button2").addEventListener("click", getJson);



function getText() {
  fetch("test.txt").then((res) => {
    return (res.text());
  }).then(data => {
    console.log(data);
    document.getElementById("output").innerHTML = data;
  }).catch((err) => {
    console.log(err);
  })

}

function getJson() {
  fetch('posts.json').then((res) => {
    return (res.json());
  }).then((data) => {
    let output = "";
    data.forEach(post => {
      output += `<li>${post.body}</li>`;
    })
    document.getElementById("output").innerHTML = output;
    console.log(data);
  })
}