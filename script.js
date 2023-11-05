
document.addEventListener('DOMContentLoaded', function() {
    const commentInputs = document.querySelectorAll('.comment-input input');
    const postButtons = document.querySelectorAll('.comment-input button');

    commentInputs.forEach((input, index) => {
        input.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault();
                addComment(input, index);
            }
        });

        postButtons[index].addEventListener('click', function() {
            addComment(input, index);
        });
    });
    let commentCount = 0;
    function addComment(input, _index) {
        commentCount++;
        const username = `User${commentCount}`;
        const commentText = input.value.trim();
        const bannedWords = getBannedWords();
        const foundBannedWords = [];
    
        bannedWords.forEach(word => {
            if (commentText.toLowerCase().includes(word)) {
                foundBannedWords.push(word);
            }
        });
    
        if (foundBannedWords.length > 0) {
            const comment = document.createElement('div');
            comment.className = 'comment';
            comment.innerHTML = `<strong>${username}:</strong> This Comment has been removed as it violate community guidelines.`;
            input.value = '';
            const currentPost = input.closest('.post');
            const commentsContainer = currentPost.querySelector('.comments');
            commentsContainer.appendChild(comment);
            return;
        }

        if (commentText) {
            const comment = document.createElement('div');
            comment.className = 'comment';
            comment.innerHTML = `<strong>${username}:</strong> ${commentText}`;
            input.value = '';
            const currentPost = input.closest('.post');
            const commentsContainer = currentPost.querySelector('.comments');
            commentsContainer.appendChild(comment);
        }
    }
});


function getBannedWords() {
    return ['arse', 'arsehead', 'arsehole', 'ass', 'asshole', 'bastard', 'bitch', 'pussy', 'dick','boobs','porn','muji','randi', 'bloody', 'chick', 'bollocks', 'brotherfucker', 'bugger','bullshit','child-fucker','Christ on a bike','Christ on a cracker','cock','cocksucker','crap','cunt','damn','damnit' , 'fuck', 'horseshit','in shit','Jesus Christ','Jesus fuck','Jesus H. Christ','Jesus Harold Christ' ,'Jesus', 'Mary and Joseph','Jesus wept','kike','motherfucker','nigga','nigra','pigfucker','piss','prick','pussy','shit','shit ass','shite','sisterfucker','slut','son of a whore','son of a bitch','spastic','sweet Jesus','turd','twat','wanker']; // Add more banned words as needed
}


document.addEventListener('DOMContentLoaded', function() {
    const dropbtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');
    const checkboxes = document.querySelectorAll('.dropdown-content input[type="checkbox"]');
    const selectedItemsList = document.getElementById('selectedItemsList');
    let selectedItems = [];

    dropbtn.addEventListener('click', function() {
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                selectedItems.push(this.value);
            } else {
                const index = selectedItems.indexOf(this.value);
                if (index !== -1) {
                    selectedItems.splice(index, 1);
                }
            }
            filterPosts(selectedItems);
        });
    });

    function filterPosts(selectedItems) {
        const posts = document.querySelectorAll('.post');
        if (selectedItems.length === 0)
        {
            posts.forEach(post => { post.style.display = 'flex';
        });
        
        }
        else {
        posts.forEach(post => {
            const postItems = post.getAttribute('data-tags').toLowerCase();
            const showPost = selectedItems.some(item => postItems.includes(item.toLowerCase()));
            post.style.display = showPost ? 'flex' : 'none';
        });
    }
}});
