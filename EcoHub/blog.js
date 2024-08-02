
 document.getElementById('postForm').addEventListener('submit', function(e) {
 e.preventDefault();
 const userName = document.getElementById('userName').value;
 const postTitle = document.getElementById('postTitle').value;
 const postContent = document.getElementById('postContent').value;
 if (userName && postTitle && postContent) {
 const postsSection = document.getElementById('postsSection');
 const newPost = document.createElement('article');
 newPost.classList.add('post');
 newPost.innerHTML = `
 <h3>${postTitle}</h3>
 <p><strong>${userName}:</strong> ${userName}</p>
 <p>${postContent}</p>
 <div class="replies">
 <!-- No replies yet-->
 </div>
 `;

 postsSection.prepend(newPost);

 document.getElementById('postForm').reset();
 }
 });
