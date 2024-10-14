let correctPassword = "EclipseCATOweb";
let currentUsername = null;
let authorizedIP = "82.222.239.147";

function checkPassword() {
    let passwordInput = document.getElementById('password').value;
    if (passwordInput === correctPassword) {
        document.getElementById('password-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    } else {
        document.getElementById('error-msg').innerText = "Incorrect password!";
    }
}

function openPostForm() {
    document.getElementById('post-form').style.display = 'block';
}

function nextStep() {
    let file = document.getElementById('file-upload').files[0];
    if (file) {
        document.getElementById('post-form').style.display = 'none';
        document.getElementById('category-step').style.display = 'block';
    } else {
        alert("Please upload a file.");
    }
}

function askUsername() {
    document.getElementById('category-step').style.display = 'none';
    if (currentUsername) {
        finalizePost();
    } else {
        document.getElementById('username-step').style.display = 'block';
    }
}

function finalizePost() {
    let file = document.getElementById('file-upload').files[0];
    let category = document.getElementById('category').value.trim().toLowerCase();
    let usernameInput = document.getElementById('username').value;

    if (!currentUsername) {
        currentUsername = usernameInput;
    }

    let postContainer = document.createElement('div');
    postContainer.className = "post";

    let fileElement;
    if (file.type.startsWith('image/')) {
        fileElement = document.createElement('img');
    } else if (file.type.startsWith('video/')) {
        fileElement = document.createElement('video');
        fileElement.controls = true;
    }
    fileElement.src = URL.createObjectURL(file);

    postContainer.innerHTML = `<p>Posted by: ${currentUsername}</p><p>Category: ${category}</p><p>File name: ${file.name}</p>`;
    postContainer.appendChild(fileElement);

    document.getElementById('posts').appendChild(postContainer);

    // Clear form
    document.getElementById('file-upload').value = '';
    document.getElementById('category').value = '';
    document.getElementById('username').value = '';
    document.getElementById('post-form').style.display = 'none';
    document.getElementById('category-step').style.display = 'none';
    document.getElementById('username-step').style.display = 'none';
}

