function linkName(members){

    if (members.middle_name == null) {
        members.middle_name = "";
    }

    var fullName = members.first_name + " " + members.middle_name + " " + members.last_name;

    if (members.url != "") {
        fullName = "<a href='" + members.url + "'>" + fullName + "</a>";
    }

    return fullName;

};


function fillAttendanceTable(list) {
    var table = "";
    var fullName = "";

    list.map(function(param){
        fullName = linkName(param);
        table += "<tr> <td>" + fullName + 
        "</td> <td>" + param.missed_votes + 
        "</td> <td>" + param.missed_votes_pct + "</td> </tr>";
    });

return table;
};

function fillLoyaltyTable(list) {
    var table = "";
    var partyVotes = 0;
    var fullName = "";

    list.map(function(param){
        fullName = linkName(param);
        partyVotes = (param.total_votes - param.missed_votes) * param.votes_with_party_pct / 100;
        partyVotes = Math.round(partyVotes);
        table += "<tr> <td>" + fullName + 
        "</td> <td>" + partyVotes + 
        "</td> <td>" + param.votes_with_party_pct + "</td> </tr>";
    });

return table;
};

function countMembers(members) {
    
    switch (members.party) {
        case "R":
            republicans.push(members);
            break;

        case "D":
            democrats.push(members);
            break;

        default:
            independents.push(members);
            break;
        }
}


function avgVotesWithParty(party) {
    
    var avgSum = 0;
    
    party.map(
        function (param){
            avgSum += parseFloat(param.votes_with_party_pct); // ¿?
        }
    );
    return (avgSum/party.length).toFixed(2);
}

function sortByVotesWithParty(){
    totalMembers.sort(function (a,b){
        return a.votes_with_party_pct - b.votes_with_party_pct;
    })
}

function sortByVotesMissed(){
    totalMembers.sort(function (b,a){
        return a.missed_votes_pct - b.missed_votes_pct;
    })
}

//CALCULATING 10%
function tenPercent(){
    return Math.round(totalMembers.length*0.1);
}


// returns an array with the 10%
function leastLoyalty(){

    var range = tenPercent();
    var least = [];

    for (var i=0; i<range; i++){
        least.push(totalMembers[i]);
    }

    return least;
}

function mostLoyalty(){

    var range = tenPercent();
    var most = [];

    for (var i=totalMembers.length-1; i>=totalMembers.length-range; i--){
        most.push(totalMembers[i]);
    }

    return most;
}

function leastEngaged(){

    var range = tenPercent();
    var least = [];


    for (var i=0; i<range; i++){
        least.push(totalMembers[i]);
    }

    return least;
}

function mostEngaged(){

    var range = tenPercent();
    var most = [];

    for (var i=totalMembers.length-1; i>=totalMembers.length-range; i--){
        most.push(totalMembers[i]);
    }

    return most;
}

function fillStatistic(){
    statistic.no_democrats = democrats.length;
    statistic.no_republicans = republicans.length;
    statistic.no_independents = independents.length;
    statistic.no_total = totalMembers.length;
    statistic.per_democrats_vote_w_p = pct_votesWithParty_d;
    statistic.per_republicans_vote_w_p = pct_votesWithParty_r;
    statistic.per_independents_vote_w_p = pct_votesWithParty_i;

    statistic.least_engaged = leastEngaged;
    statistic.most_engaged = mostEngaged;
    statistic.least_loyal = leastLoyalty;
    statistic.most_loyal= mostLoyalty;
}

