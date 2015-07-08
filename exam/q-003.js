// update
db.getCollection('messages').update({'headers.Message-ID': '<8147308.1075851042335.JavaMail.evans@thyme>'}, {$push: {'headers.To': 'mrpotatohead@mongodb.com'}})

// manually verify
db.getCollection('messages').find({'headers.Message-ID': '<8147308.1075851042335.JavaMail.evans@thyme>'})

// validation code
vOnRg05kwcqyEFSve96R
