$(document).ready(function(){
    let lookupBtn = $("#lookup")
    let resultDiv = $("#result")
    let citiesBtn = $("#lookupCities")

    resultDiv.hide();

    lookupBtn.click(function(){
        let searchVal = $("#country").val().trim();
        $.get(`http://localhost/info2180-lab5/world.php?country=${searchVal}&context=none`, function(result){
            resultDiv.html(result).slideDown();
        })
    })

    citiesBtn.click(function(){
        let searchVal = $("#country").val().trim();
        $.get(`http://localhost/info2180-lab5/world.php?country=${searchVal}&context=cities`, function(result){
            resultDiv.html(result).slideDown();
        })
    })
});