

// Adding event listener for form submission on the registration form
document.getElementById('register-form').addEventListener('submit', function(event){
    event.preventDefault(); //Preventing the default form submission behavior
    
    // Collecting form data from input fields
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    // Storing collected user information in sessionStorage
    sessionStorage.setItem('user', JSON.stringify({username, email, password }));

    // notifying user of successful registration
    alert('Registration successful');

})

// Adding event listener for form submission on the login form
document.getElementById('login-form').addEventListener('submit', function(event){
    event.preventDefault(); // Preventing the default form submission behavior

    // Collecting form data from input fields
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Retrieving stored user information from sessionStorage
    const user = JSON.parse(sessionStorage.getItem('user'));


    // Checking if the user information matches the input
    if(user && user.username === username &&user.password === password){
        // Notifying user of successful login
        alert('Login successful!');
        // Storing user information for the session in sessionStorage
        sessionStorage.setItem('currentUser', JSON.stringify(user));
       
       
    }else{
        // Notifying user of invalid credentials
        alert('Invalid credentials');
    }
})


// Adding an event listener to run when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function(){

    // Retrieving current user information from sessionStorage
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

    // Checking if there is a logged-in user
    if(currentUser){
         // Updating the profile username and email on the page with the current user's information
         document.querySelector('#profile-username span').textContent = currentUser.username;
         document.querySelector('#profile-email span').textContent = currentUser.email;
         if (currentUser.profileImage) {
            document.getElementById('profile-pic').src = currentUser.profileImage;
        }
    }
    displayNotifications();
})


// Adding event listener for form submission on the profile update form
document.getElementById('update-profile-form').addEventListener('submit', function(event){
    event.preventDefault(); // preventing the default form submission behavior

    // Collecting new username and email values from input fields
    const newUsername = document.getElementById('new-username').value;
    const newEmail = document.getElementById('new-email').value;
    const profileImage = document.getElementById('profile-image').files[0];


    // Retrieving current user information from sessionStorage
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    
    // Updating the current user's information with the new values
    currentUser.username = newUsername;
    currentUser.email = newEmail;

    // Handling the profile image update
    if (profileImage) {
        const imageURL = URL.createObjectURL(profileImage);
        document.getElementById('profile-pic').src = imageURL;
        currentUser.profileImage = imageURL; // Storing the image URL in sessionStorage
    }

    // Saving the updated user information back to sessionStorage
    sessionStorage.setItem('currentUser', JSON.stringify(currentUser));

    // Updating profile info on the profile with the new values
    document.querySelector('#profile-username span').textContent = newUsername;
    document.querySelector('#profile-email span').textContent = newEmail;
    
})

// Adding an event listener for form submission on the post form
document.getElementById('post-form').addEventListener('submit', function(event){
    event.preventDefault(); // Preventing the default form submission behavior

    // Getting the values from the input fields
    const text = document.getElementById('post-text').value; // Retrieving text input for the post
    const image = document.getElementById('post-image').files[0]; // Retrieving the selected image file
    const user = JSON.parse(sessionStorage.getItem('currentUser')); // Retrieving current user info from sessionStorage

    // Checking a new post object with the collected data
    const newPost = {
        username: user.username, // Setting the username for the post
        text: text, // Setting the text content of the post
        image: image ? URL.createObjectURL(image) : null, //Creating a URL for the i,age if provided, otherwise set as null
        likes: 0, // Initializing likes count to 0
        comments: [] // Initializing comments array as empty
    }
    // Retrieving existing posts from sessionStorage or initialize an empty array if none exist
    let posts = JSON.parse(sessionStorage.getItem('posts')) || [];
    posts.push(newPost); //Adding the new post to the posts array
    sessionStorage.setItem('posts', JSON.stringify(posts)); // Saving the updated posts array back to sessionStorage

    // Calling the function to display posts
    displayPosts();

})

// Function to display posts in the posts feed
function displayPosts(){
    const postsFeed = document.getElementById('posts-feed'); // Getting the element where posts will be displayed
    postsFeed.innerHTML = ''; // Clearing any existing posts in the feed

    // Retrieving posts from sessionStorage or initialize an empty array if exist
     const posts = JSON.parse(sessionStorage.getItem('posts')) || [];
     posts.forEach(post =>  {
        // Creating a new div element for each post
        const postElement = document.createElement('div');
        postElement.className = 'post'; // Setting the class name for styling
        
        // Setting the inner HTMl of the post element with the post data
        postElement.innerHTML = `
        <p><strong>${post.username}</strong></p>
            <p>${post.text}</p>
            ${post.image ? `<img src="${post.image}" alt="Post Image">` : ''}
            <button class="like-btn">Like (${post.likes})</button>
            <button class="comment-btn">Comment (${post.comments.length})</button>
        `

        // Appending the new post element to the posts feed
        postsFeed.appendChild(postElement);
     })
}

// Calling displayPosts to show when the page loads or the script runs
 displayPosts();


// Adding an event listener to the posts feed container for handling clicks
document.getElementById('posts-feed').addEventListener('click', function(event) {
    // Checking if the clicked element has the class 'like-btn'
    if (event.target.classList.contains('like-btn')) {
        // Finding the index of the post element in the posts feed
        const postIndex = Array.from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode);
        // Retrieving the posts from sessionStorage
        const posts = JSON.parse(sessionStorage.getItem('posts'));
        // Incrementing the likes count of the targeted post
        posts[postIndex].likes += 1;
        // Saving the updated posts array back to sessionStorage
        sessionStorage.setItem('posts', JSON.stringify(posts));
        // Re-displaying posts to reflect the updated likes count
        displayPosts();
        addNotification(`Your post by ${posts[postIndex].username} has received a new like!`); 
        displayNotifications();
    }

    // Checking if the clicked element has the class 'comment-btn'
    if (event.target.classList.contains('comment-btn')) {
        // Prompting the user to enter a comment
        const comment = prompt('Enter your comment:');
        // Checking if the user entered a comment
        if (comment) {
            // Finding the index of the post element in the posts feed
            const postIndex = Array.from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode);
            // Retrieving the posts from sessionStorage
            const posts = JSON.parse(sessionStorage.getItem('posts'));
            // Adding the new comment to the targeted post's comments array
            posts[postIndex].comments.push(comment);
            // Saving the updated posts array back to sessionStorage
            sessionStorage.setItem('posts', JSON.stringify(posts));
            // Re-displaying posts to reflect the new comment
            displayPosts();
            addNotification(`Your post by ${posts[postIndex].username} has a new comment!`); 
            displayNotifications(); // Ensure notifications are updated
        }
    }
});

// function to display notifications on the page
function displayNotifications(){
    const notificationsList = document.getElementById('notifications-list'); // Getting the element here notifications will be displayed
    notificationsList.innerHTML = ''; // Clearing any existing notifications in the list

    // Retrieving notifications from sessionStorage or initialize as an empty array if none exist
    const notifications = JSON.parse(sessionStorage.getItem('notifications')) || [];
    console.log('Displaying notifications:', notifications);
    notifications.forEach(notification => {
        // Creating a new list item for each notification
        const notificationItem = document.createElement('li');
        notificationItem.textContent = notification; // Setting the text content of the  list item
        notificationsList.appendChild(notificationItem); //Appending the list item to the notifications list

    })
}

// Function to add a new notification
function addNotification(message){
    // Retrieving existing notifications from sessionStorage or initialize as an empty array if none exist
    let notifications = JSON.parse(sessionStorage.getItem('notifications')) || [];
    notifications.push(message); // Adding the new notification message to the array
    sessionStorage.setItem('notifications', JSON.stringify(notifications)); //Saving the updated notifications array back to the sessionStorage 
}