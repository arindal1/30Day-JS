const posts = [];

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // For demo purposes, just store the username in localStorage
    localStorage.setItem('user', username);
    
    // Hide login interface
    document.getElementById('auth-section').style.display = 'none';
    // Show post creation feature
    document.getElementById('post-creation').style.display = 'block';
    
    // Optionally, you can display a message or redirect to another page
    alert('Logged in as ' + username);
});

document.getElementById('post-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const text = document.getElementById('post-text').value;
    const imageInput = document.getElementById('post-image');
    const imageFile = imageInput.files[0];
    
    const reader = new FileReader();
    
    reader.onload = function(e) {
        const imageDataUrl = e.target.result;
        
        const newPost = {
            text,
            image: imageDataUrl,
            username: localStorage.getItem('user'),
            timestamp: new Date().toLocaleString(),
            likes: 0,
            comments: []
        };
        
        posts.push(newPost);
        displayPosts();
    };
    
    if (imageFile) {
        reader.readAsDataURL(imageFile);
    } else {
        const newPost = {
            text,
            image: null,
            username: localStorage.getItem('user'),
            timestamp: new Date().toLocaleString(),
            likes: 0,
            comments: []
        };
        
        posts.push(newPost);
        displayPosts();
    }
});

function displayPosts() {
    const postFeed = document.getElementById('post-feed');
    postFeed.innerHTML = '';
    
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        
        postElement.innerHTML = `
            <div class="post-header">
                <span><strong>${post.username}</strong></span>
                <span>${post.timestamp}</span>
            </div>
            <p>${post.text}</p>
            ${post.image ? `<img src="${post.image}" alt="Post Image">` : ''}
            <div class="post-footer">
                <button class="like" onclick="likePost('${post.timestamp}')">Like (${post.likes})</button>
                <button class="comment" onclick="commentOnPost('${post.timestamp}')">Comment</button>
            </div>
        `;
        
        postFeed.appendChild(postElement);
    });
}

function likePost(timestamp) {
    const post = posts.find(p => p.timestamp === timestamp);
    if (post) {
        post.likes++;
        displayPosts();
    }
}

function commentOnPost(timestamp) {
    const comment = prompt('Enter your comment:');
    const post = posts.find(p => p.timestamp === timestamp);
    if (post && comment) {
        post.comments.push(comment);
        displayPosts();
    }
}
