$(document).ready(function(){

    var shibeContainer = $('#shibeContainer');
    
    var btnGetImg = $("#btnGetImg");
    btnGetImg.click(getNewImg);

    function getNewImg(e){
        var loadingText = 'Loading...';
        shibeContainer.html(loadingText);

        var corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
		var apiUrl = 'http://shibe.online/api/shibes?count=1';

        fetch(corsAnywhere + apiUrl)
        .then(response =>{
            return response.json();
        }).then(data => {
            handleCheckSucess(data);
        }).catch(err => {
            handleError(err);
        });
    }

    function handleCheckSucess(response){
        var imageUrl = response[0];
        var shibeImg = '<img id="shibePhoto" src="'+imageUrl+ '" class="img-fluid">';
        shibeContainer.html(shibeImg);
    }

    function handleError(err){
        console.log("Error!!!");
    }
})