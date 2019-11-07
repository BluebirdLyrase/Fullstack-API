

$(function() {

// var id = localStorage.getItem('id');

var urlParam = new URLSearchParams(window.location.search);
console.log(urlParam.get('id'));
var id = urlParam.get('id');
var url = `https://jsonplaceholder.typicode.com/users/${id}`;
console.log(url);


$.get(url, function (data, status) {

    if (status == 'success') {
        console.log(data.id);
        console.log(data.name);

        $('#id').attr('value',data['id']);
        $('#name').attr('value',data['name']);
        $('#username').attr('value',data['username']);
     
        
        
        $('#street').attr('value',data['address']['street']);
        $('#suite').attr('value',data['address']['suite']);
        $('#city').attr('value',data['address']['city']);
        $('#zipcode').attr('value',data['address']['zipcode']);
        $('#latitude').attr('value',data['address']['geo']['lat']);
        $('#longitude').attr('value',data['address']['geo']['lng']);
        
        
        $('#email').attr('value',data['email']);
        $('#phone').attr('value',data['phone']);
        $('#website').attr('value',data['website']);
        $('#comname').attr('value',data['company']['name']);
        $('#comcat').attr('value',data['company']['catchPhrase']);
        $('#combs').attr('value',data['company']['bs']);

        
        
        
        
        
        
    }
});

});

// function userBtn(id){
//     localStorage.setItem('id',id);
//     console.log(localStorage.getItem('id'));
// }