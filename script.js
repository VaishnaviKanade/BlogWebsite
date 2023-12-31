function addComment() {
    var name = document.getElementById("name").value;
    var commentText = document.getElementById("comment").value;

    if (name && commentText) {
        var commentDiv = document.getElementById("comments");
        var newComment = document.createElement("div");
        newComment.innerHTML = "<strong>" + name + ":</strong> " + commentText;
        commentDiv.appendChild(newComment);

        // Clear the form
        document.getElementById("name").value = "";
        document.getElementById("comment").value = "";
    } else {
        alert("Please enter both name and comment.");
    }
}

