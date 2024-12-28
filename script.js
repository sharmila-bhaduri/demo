// Wait for DOM content to load
document.addEventListener("DOMContentLoaded", () => {
    const postButton = document.getElementById("postButton");
    const postInput = document.getElementById("postInput");
    const postsContainer = document.getElementById("postsContainer");

    // Handle posting
    postButton.addEventListener("click", () => {
        const content = postInput.value.trim();
        if (content) {
            const postElement = createPostElement("User", content);
            postsContainer.prepend(postElement);
            postInput.value = ""; // Clear input
        } else {
            alert("Please write something before posting!");
        }
    });
});

// Function to create a post element
function createPostElement(user, content) {
    const postDiv = document.createElement("div");
    postDiv.className = "post";

    const userElement = document.createElement("div");
    userElement.className = "user";
    userElement.textContent = user;

    const contentElement = document.createElement("div");
    contentElement.className = "content";
    contentElement.textContent = content;

    const actionsElement = document.createElement("div");
    actionsElement.className = "actions";
    actionsElement.textContent = "Like | Comment";

    postDiv.appendChild(userElement);
    postDiv.appendChild(contentElement);
    postDiv.appendChild(actionsElement);

    return postDiv;
}
