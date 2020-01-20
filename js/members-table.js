function getTable(data) {
    var table = data.results[0].members.map(getRow).join("");
    return table;
}

function getRow(members) {

    
    // if (members.middle_name == null) {
    //     members.middle_name = "";
    // }

    // var fullName = members.first_name + " " + members.middle_name + " " + members.last_name;

    // if (members.url != "") {
    //     fullName = "<a href='" + members.url + "'>" + fullName + "</a>";
    // }
    fullName = linkName(members);
    var party = members.party;
    var state = members.state;
    var seniority = members.seniority;
    // var totalVotes = members.total_votes + members.missed_votes;
    var percentageOfVotes = (100 - members.missed_votes * 100 / members.total_votes).toFixed(2) + "%";

    return "<tr><td>" + fullName + "</td><td>" + party + "</td><td>" + state + "</td><td>" + seniority + "</td><td>" + percentageOfVotes + "</td></tr>";
}


document.getElementById("table-data").innerHTML = getTable(data);


