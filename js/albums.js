var url = `https://jsonplaceholder.typicode.com/albums`;
console.log(url);


$.get(url, function (data, status) {
    if (status == 'success') {
        $.each(data, function (index, item) {
            console.log(index + ' : ' + item['name']);
            $('#albumtable').append(`<tr>
                                    <td>${item['userId']}</td>
                                    <td>${item['id']}</td>
                                    <td>${item['title']}</td>
                                    <td><a href="userdetail.html?id=${item['id']}" class="btn btn-primary" style="color:white" role="button">Detail</a></td>
                                    </tr>`);

        });
    }

});

function albumBtn(id){
    localStorage.setItem('albumID',id);
    console.log(localStorage.getItem('albumID'));
}