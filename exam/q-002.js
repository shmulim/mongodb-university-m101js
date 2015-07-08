db.messages.aggregate([
 	{$unwind: "$headers.To"},
 	{$group: { _id: { from: "$headers.From", to: "$headers.To"}, uniques: {$addToSet: "$_id"}}},
 	{$unwind: "$uniques"},
 	{$group: {_id: "$_id", count: {$sum: 1}}},
 	{$project: {from: 1, to: 1, count: 1}},
 	{$sort: {count: -1}},
 	{$limit: 6}
 ]);

// susan.mara@enron.com to jeff.dasovich@enron.com
// 750
