
var statistic = {
    "no_democrats": "0",
    "no_republicans": "0",
    "no_independents": "0",
    "no_total": "0",
    "per_democrats_vote_w_p": "0",
    "per_republicans_vote_w_p": "0",
    "per_independents_vote_w_p": "0",
    "least_engaged": [],
    "most_engaged": [],
    "least_loyal": [],
    "most_loyal": [],
};

var totalMembers = data.results[0].members;
var democrats = [];
var republicans = [];
var independents = [];

totalMembers.map(countMembers);

var pct_votesWithParty_d = avgVotesWithParty(democrats);
var pct_votesWithParty_r = avgVotesWithParty(republicans);
var pct_votesWithParty_i = avgVotesWithParty(independents);

sortByVotesWithParty();
var leastLoyalty = leastLoyalty();
var mostLoyalty = mostLoyalty();

sortByVotesMissed();
var leastEngaged = leastEngaged();
var mostEngaged = mostEngaged();

fillStatistic();





