## GridFS
    GridFS is a specification for storing and retrieving files that exceed the BSON-document size limit of 16 MB.
    GridFS divides the file into chunks, and stores each chunk as a separate document

## Mongofiles
    command-line tool to manipulate files stored in MongoDB  

## Save file in MongoDB 
   $ mongofiles -d mydb put sample.jpg

## List files in mongo
    $ mongo
    > use mydb
    > show collections
        fs.chucks
        fs.files
    > db.fs.files.find().pretty()


## Install meteor.js
    $ curl https://install.meteor.com/ | sh

## Create meteor.js project
    $ meteor create .

## Install dependencies
    $ meteor npm install

## Run app
    $ meteor