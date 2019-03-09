var productArray = [];
function drawGrid() {
    var htmlContent = "";
    htmlContent += '<table>';
    htmlContent += '<tr>';
    htmlContent += '<th>#</th>';
    htmlContent += '<th>Product</th>';
    htmlContent += '<th>Time</th>';
    htmlContent += '<th>Discription</th>';
    htmlContent += '<th>price</th>';
    htmlContent += '<th>delete</th>';
    htmlContent += '</tr>';
    
    
    
    for (var i in productArray) {
        htmlContent += '<tr>';
        htmlContent += '<td>' + (i + 1) + '</td>';
        //////////////////////////////////////////////////////////////////// data will be taken by product info Product Discription price
        htmlContent += '<td>"Date()"<td>'; //for time
        htmlContent += '<td>';
        htmlContent += '<a onclick="delete(' + i + ')"> <img src="imgs/delete.png" /></a>';
        htmlContent += '</td>';
        htmlContent += '</tr>';
    }
    htmlContent += '</table>';
    document.getElementById('myDiv').innerHTML = htmlContent;
}



function deleteproduct(idx) {
    var result = confirm("Are you sure to delete ?");
    if (result) {
        productArray.splice(idx, 1);
        drawGrid();
    }
}

drawGrid();