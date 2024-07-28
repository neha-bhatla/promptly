from pymongo import MongoClient
from pymongo_get_database import get_database

client = MongoClient('mongodb+srv://shivyamehta1:kWMvB5gh4RIazzBp@cluster0.m3hzriw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0') 
                     
dbname = get_database()
collection_details = dbname.list_collection_names()

for collection in collection_details:
    collection = dbname[collection]
    columns= collection.find()

    for col in columns:
        print(col)




