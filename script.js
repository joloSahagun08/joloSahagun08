var reactionCounts = {
    like: 0,
    love: 0,
    care: 0,
    wow: 0,
    sad: 0,
    angry: 0
};


function react(reaction) {
    if (reactionCounts.hasOwnProperty(reaction)) {
        reactionCounts[reaction]++;
        updateReactionCount();
    }
}


function updateReactionCount() {
    var countText = '';
    for (var reaction in reactionCounts) {
        if (reactionCounts.hasOwnProperty(reaction)) {
            countText += reactionCounts[reaction] + ' ' + getEmoji(reaction) + ' ';
        }
    }
    document.getElementById('reactionCount').innerHTML = countText.trim();
}


function getEmoji(reaction) {
    switch (reaction) {
        case 'like':
            return '👍';
        case 'love':
            return '❤️';
        case 'care':
            return '🤗';
        case 'wow':
            return '😲';
        case 'sad':
            return '😢';
        case 'angry':
            return '😡';
        default:
            return '';
    }
}


function showReactions() {
    var reactions = document.querySelector('.reactions');
    reactions.style.display = 'block';
}


function hideReactions() {
    var reactions = document.querySelector('.reactions');
    reactions.style.display = 'none';
}


function postComment() {
    var comment = document.querySelector('textarea').value;
    if (comment.trim() !== '') {
        var commentList = document.getElementById('commentList');
        commentList.innerHTML += '<p>' + comment + '</p>';
        document.querySelector('textarea').value = '';
    }
}


function share(platform) {
    alert('Shared on ' + platform);

}