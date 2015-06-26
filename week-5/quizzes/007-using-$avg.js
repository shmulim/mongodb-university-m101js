/*
Hands on: This problem uses a subset of the same data as we referenced in the $sum quiz,
but only a subset, so the answers you get in this web shell will be different than those you would
find using the full data set. They also won't correspond to the actual averages of the populations
in the zip codes of those states.

Given population data by zip code (postal code), write an aggregation expression to calculate the
average population of a zip code (postal code) by state. This dataset only contains four states, and
only 50 zip codes per state, because some browsers have trouble working with large data sets.

Which of the following represents the average populations that you find?

This is a web shell problem, so please interact with the web shell as you would with a
shell in a terminal window on your computer. Hit enter after each command.
You will not need (or be able to) change databases, and will be working with the zips collection.
*/

/*
db.zips.aggregate([
	{$group: {_id:"$state", average_pop: {$avg: "$pop"}}}
]);
*/

// { "NY": 9705.34, "NJ": 16949.9, "CT": 13226.48, "CA": 19067.72 }
