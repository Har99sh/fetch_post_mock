var form = $('#post_form');

form.on('submit', function (e) {
    e.preventDefault();
    var text = $('#text').val();
    var image = $('#image').val();
    var likes = $('#likes').val();
    var tags = $('#tags').val();
    var owner = $('#owner').val();
    fetch('https://dummyapi.io/data/v1/post/create', {
        method: 'POST',
        body: JSON.stringify({
            text: text,
            image: image,
            likes: likes,
            tags: tags,
            owner: owner
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'app-id': '62d66fc4c969fb16259d04b6'
        }
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var posted_id = data.id;
            console.log(posted_id);
            $("#form_data_container").fadeIn("slow").show();
            $("#displayed_description").html('Description: ' + data.text);
            $("#displayed_likes").html('Likes: ' + data.likes);
            $("#displayed_tags").html('Tags: ' + data.tags);
            $("#displayed_id").html('Owner name: ' + data.owner.firstName + ' ' + data.owner.lastName);
            $("#displayed_image").css({ 'background-image': 'url(' + data.image + ')' });
        })
        .then(fetch('https://dummyapi.io/data/v1/post',
            { headers: { 'app-id': '62d66fc4c969fb16259d04b6' } })
            .then(response => response.json())
            .then(json => {
                console.table(json);
            }))
});



//dom manipulation with javascript

            // displayed_description=document.getElementById("displayed_description");
            // displayed_likes=document.getElementById("displayed_likes");
            // displayed_id=document.getElementById("displayed_id");
            // displayed_tags=document.getElementById("displayed_tags");
            // displayed_image=document.getElementById("displayed_image");
            // displayed_id.innerHTML = data.owner.firstName + ' ' + data.owner.lastName;
            // displayed_likes.innerHTML = data.likes;
            // displayed_tags.innerHTML = data.tags;
            // displayed_description.innerHTML = data.text;
            //displayed_image.style.backgroundImage = 'url('+data.image+')';

    // var text = document.getElementById('text').value;
    // var image = document.getElementById('image').value;
    // var likes = document.getElementById('likes').value;
    // var tags = document.getElementById('tags').value;
    // var owner = document.getElementById('owner').value;