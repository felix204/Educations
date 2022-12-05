setTimeout(() => {
    console.log("Merhaba");
}, 5000)



setInterval(() => {
    console.log("Merhaba Ben Her Saniye Çalışacağım");
}, 1000);



const sayHi = (cb) => {
    cb();
}
sayHi(() => {
    console.log("hello");
});



import fetch from 'node-fetch'

fetch ("https://jsonplaceholder.typicode.com/users")
    .then((data) => data.json())
    .then((users) => {
        console.log(users)

        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((data) => data.json())
            .then((posts) => {
                console.log(posts)
                fetch('https://jsonplaceholder.typicode.com/posts/2')
                .then((data) => data.json())
                .then((data) => console.log(data));
            });
           
    });




        
import fetch from "node-fetch";

async function getData() {
   const users = await (

   ('https://jsonplaceholder.typicode.com/users')
   ).json();

   const post1 = await (

    ('https://jsonplaceholder.typicode.com/posts/1')
    ).json();

    const post2 = await (

    ('https://jsonplaceholder.typicode.com/posts/2')
    ).json();

   console.log(users);
   console.log(post1);
   console.log(post2);
}

getData();
    

