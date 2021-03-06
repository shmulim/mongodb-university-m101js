##### What is MongoDB?

MongoDB is a non-relational data store for JSON documents. As a document-oriented database, MongoDB doesn’t use tables with rows and columns as a RMDBS database would. MongoDB is also schemaless, so multiple documents within the same collection can have different structure.

##### MongoDB Relative to Relational

MongoDB is a scalable, high-performance database with depth of functionality. Its peers, memcached and key-value store are also scalable and high-performance, yet they lack in depth of functionality. RMDBS databases have depth of functionality, yet they are difficult to scale.

In order to get from the best of both worlds, MongoDB does not support some features that are typically supported in RMDBS options. MongoDB does not support joins and transactions across multiple collections. Joins and transactions scale particularly poorly when it comes to scaling out between nodes. By omitting these 2 features, MongoDB is able to scale and perform well, while maintaining a depth of functionality. Although MongoDB does not support transactions across multiple collections, it still supports atomic updates within a single document.
