const heading = document.querySelector('section');
const section = document.querySelector('section');
const server = 'https://jsonplaceholder.typicode.com'
const todo1URL = server + '/todos/1';
const todoURL = server + '/todos/1';

function createApiUrl(path) {
  return server + path;
}

fetch(createApiUrl('/users/'))
  .then(response => response.json())
  .then(json => console.log(json))

async function getUser(id) {
  const userURL = createApiUrl('/users/' + id);
  const user = await fetch(userURL).then(response => response.json());
  return user;
}


async function getTodo(id) {
  const todoURL = createApiUrl('/todos/' + id);
  fetch(todoURL)
    .then(response => response.json())
    .then(json => callback(json));
}

async function printUser(callBack) {
  let userTwo = await getUser(2);
  heading.textContent = userTwo.name;
  section.appendChild(callback(userTwo.address));
}

printUser();

function createAddressBlock(address) {
  //div would've also worked.
  const elem = document.createElement();
  elem.innerHTML = `<p class ="address"> 
  ${address.street}&nbsp; ${address.suite} <br/>
  ${address.city}
  </p>`
  return elem;
}

//print(createAddressBlock);