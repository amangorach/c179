let coordinates = {};

$(document).ready(function (){
    get_coordinates();
});

function get_coordinates(){
    let searchParameters = new URLSearchParams(window.location.search);
    if(searchParameters.has("source") && searchParameters.has("destination")){
        let source = searchParameters.get("source");
        let destination = searchParameters.get("destination");
        coordinates.source_lat = source.split(";")[0];
        coordinates.source_lon = source.split(";")[1];
        coordinates.destination_lat = destination.split(";")[0];
        coordinates.destination_lon = destination.split(";")[1];
    }else{
        alert("Co-ordinates not found!");
        window.history.back();
    };
};