// Adding an event listener to the login form that triggers on form submission
document.getElementById('login-form').addEventListener('submit', function(event){
    // Preventing the default form submission behavior (page reload)
    event.preventDefault();

    // Getting the values entered by the user and password fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    /// Checking if both the username and password fields have values
    if(username && password){
        // Storing the username in local storage for demo purposes
        localStorage.setItem('username', username);
        // Showing an alert indicating successful login
        alert('Login successful!');
    }else{
        // Showing an alert if either the username or password field is empty
         alert('Please enter both username and password.');
    }
})

// Handling new post submission
document.getElementById('new-post-form').addEventListener('submit', function(event){
    // Preventing the default form submission behavior (page reload)
    event.preventDefault();

    // Getting the text content of the post
    const postText = document.getElementById('post-text').value;
    // Getting the selected image file, if any
    const postImage = document.getElementById('post-image').files[0];
    // Retrieving the username from the local storage, default to 'Anonymous' if not set
    const username = localStorage.getItem('username') || 'Anonymous';
    
    // Checking if there is either text or an image to post
    if(postText || postImage){
        // Creating a new post object
        const newPost = {
            text: postText,
        // Creating a URL for the image if one is provided, otherwise set to null
        image: postImage ? URL.createObjectURL(postImage) : null,
        username: username,
        // Getting the current timestamp and format it as a string
        timeStamp:  new Date().toLocaleString()
        }

        // Retrieving existing posts from local storage, or initialize an empty array if none exist
        let posts = JSON.parse(localStorage.getItem('posts')) || [];

        // Adding the new post to the array of posts
        posts.push(newPost);

        // Saving the updated posts array back to the local storage
        localStorage.setItem('posts', JSON.stringify(posts));

        // Clearing the form fields
        document.getElementById('new-post-form').reset();

        // Calling the function to display the updated list of posts
        displayPosts();
    }
})

// Function to display posts
function displayPosts(){
    // Getting the element where posts will be displayed
    const postFeed = document.getElementById('post-feed');

    // Clearing any existing posts from the display
    postFeed.innerHTMl = '';

    // Retrieving the array of posts from local storage
    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    // Iterating over each post in the array
    posts.forEach(post => {
        // Creating a new div element for each post
        const postElement = document.createElement('div');
        postElement.className = 'post';
         // Setting the inner HTML of the post element to include the post details
         postElement.innerHTML = `
           <h3>${post.username}</h3>
            <p>${post.text}</p>
            ${post.image ? `<img src="${post.image}" alt="Post image" style="max-width: 100%;">` : ''}
            <small>${post.timeStamp}</small>
            <button class="like-btn">Like</button> <span class="likes-count">0</span>
            <button class="comment-btn">Comment</button> <span class="comments-count">0</span>
         `;
         // Appending the new post element to the post feed
         postFeed.appendChild(postElement);
    });
}

// Initial displaying of posts when the script is first loaded
displayPosts();


// Handling like and comment button clicks
document.getElementById('post-feed').addEventListener('click', function(event){
    // Checking if the clicked element has the class 'like-btn'
    if(event.target.classList.contains('like-btn')){
        // Getting the parent element of the clicked button (which is the post element)
        const post = event.target.parentElement;
        // Finding the element displaying the likes count within the post
        const likesCount = post.querySelector('.likes-count');
        // Incrementing the likes count by 1
        likesCount.textContent = parseInt(likesCount.textContent) + 1;
    }

    // Checking if the clicked element has the class 'comment-btn'
    if(event.target.classList.contains('comment-btn')){
        // Getting th parent element of the clicked button (which is the post element)
        const post = event.target.parentElement;
        // Finding the element displaying the comments count within the post
        const commentsCount = post.querySelector('.comments-count');
        // Incrementing the comments count by 1
        commentsCount.textContent = parseInt(commentsCount.textContent) + 1;
    }
})

//localStorage.clear()