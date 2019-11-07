var url = `https://jsonplaceholder.typicode.com/users`;
console.log(url);


$.get(url, function (data, status) {
    console.log(data[0]['userId'] + "---" + status);
    if (status == 'success') {
        $.each(data, function (index, item) {
            console.log(index + ' : ' + item['name']);
            $('#usertable').append(`<tr>
                                    <td>${item['name']}</td>
                                    <td>${item['username']}</td>
                                    <td>${item['email']}</td>
                                    <td><a href="userdetail.html?id=${item['id']}" class="btn btn-primary" style="color:white" role="button">View Detail</a></td>
                                    
                                    </tr>`);

        });
    }

});
{/* <td><a href="userdetail.html" class="btn btn-primary" style="color:white" onclick="userBtn(${item['id']})" role="button">View Detail</a></td>
function userBtn(id){
    localStorage.setItem('id',id);
    console.log(localStorage.getItem('id'));
} */}