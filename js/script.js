//Creating Global Variables that Select Div Where Profile Information Will Appear
const overview = document.querySelector (".overview");
const username = "peripateticlearner";
//The Unordered List that Displays the Repos List
const reposList  = document.querySelector(".repo-list");


//Fetch Information from GitHub Profile
const gitUserInfo = async function () {
    const userInfo = await fetch (`https://api.github.com/users/${username}`);
    const data = await userInfo.json();
    displayUserInfo(data);
};

gitUserInfo();

//Fetch GitHub User Data & Display User Information
const displayUserInfo = function (data) {
    const div = document.createElement("div");
    div.classList.add("user-info");
    div.innerHTML = `
    <figure>
        <img alt="user avatar" src=${data.avatar_url} />
    </figure>
    <div>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Bio:</strong> ${data.bio}</p>
        <p><strong>Location:</strong> ${data.location}</p>
        <p><strong>Number of public repos:</strong> ${data.public_repos}</p>
    </div>
    `;
    overview.append(div);
};

const gitRepos = async function () {
    const fetchRepos = await fetch (`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
    const reposData = await fetchRepos.json();
};