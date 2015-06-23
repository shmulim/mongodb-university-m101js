// let’s assume that our blog can be modeled with the following relational tables:

authors:
	author_id,
	name,
	email,
	password

posts:
	post_id,
	author_id
	title,
	body,	
	publication_date

comments:
	comment_id,
	name, 
	email,
	comment_text

post_comments:
	post_id,
	comment_id


tags
	tag_id
	name

post_tags
	post_id
	tag_id

// In order to display a blog post with its comments and tags, how many tables will need to be accessed?

// 6
