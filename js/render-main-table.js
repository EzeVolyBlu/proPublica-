function renderTable(data) {
    var table ="";
        
        // republicans
        table+= "<tr> <td>Republican</td> <td>" +
        data.no_republicans + "</td> <td>"+
        data.per_republicans_vote_w_p + "</td> </tr>";
        
        // democrats
        table+= "<tr> <td>Democrat</td> <td>" +
        data.no_democrats + "</td> <td>"+
        data.per_democrats_vote_w_p + "</td> </tr>";
        
        // independents
        table+= "<tr> <td>Independent</td> <td>" +
        data.no_independents + "</td> <td>"+
        data.per_independents_vote_w_p + "</td> </tr>";
        
        //total
        table+= "<tr> <td>Total</td> <td>" +
        data.no_total + "</td> <td> - </td> </tr>";



    return table;
}

document.getElementById("tbody-atGlance").innerHTML = renderTable(statistic);


