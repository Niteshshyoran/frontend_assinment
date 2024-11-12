async function fetchAndDisplayUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    const ul = document.createElement('ul');
    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = user.name;
      ul.appendChild(li);
    });

    document.body.appendChild(ul);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Call the function
fetchAndDisplayUsers();
