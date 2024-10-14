document.getElementById('createPost').addEventListener('click', function() {
    document.querySelector('.post-form').style.display = 'block';
});

// Yetkili IP kontrolü yapılacak backend tarafından (PHP veya diğer sunucu taraflı dillerde)
function submitPost() {
    const file = document.getElementById('fileUpload').files[0];
    const category = document.getElementById('category').value.toLowerCase();
    const username = localStorage.getItem('username') || document.getElementById('username').value;
    const fileName = document.getElementById('fileName').value;

    if (!localStorage.getItem('username')) {
        localStorage.setItem('username', username); // Kullanıcı adını kaydet
    }

    if (file && category && username && fileName) {
        const postContainer = document.createElement('div');
        const fileUrl = URL.createObjectURL(file);
        postContainer.innerHTML = `
            <p>Category: ${category}</p>
            <p>Posted by: ${username}</p>
            <p>File Name: ${fileName}</p>
            ${file.type.startsWith('image') ? `<img src="${fileUrl}" alt="${fileName}" width="200">` : `<video src="${fileUrl}" controls width="200"></video>`}
        `;
        document.getElementById('posts').appendChild(postContainer);
    } else {
        alert('Please fill all the fields.');
    }
}
