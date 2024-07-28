from flask import Flask, jsonify, request, session
from flask_cors import CORS
from pymongo_get_database import get_database
from bson import ObjectId

app= Flask(__name__)
cors= CORS(app, origins="*")


dbname = get_database() 
table_userInfo = dbname["userInfo"]
table_journalEntries = dbname["journalEntries"]


@app.route("/api/login", methods= ['POST'])
def receive_dataLogin():
   data = request.json
   loginUser = data.get('username', "")
   return loginUser



@app.route("/api/isLoggedIn", methods= ['GET'])
def login_response():

   loginUser= receive_dataLogin()

   if not loginUser:
      return jsonify({"message": "No user logged in"}), 400

   rows = table_userInfo.find()
   for row in rows:
      if (row.get('username')==loginUser):
         return jsonify({"message": "found", "username": loginUser}), 200

   return jsonify({"message": "not found"}), 404


      
@app.route("/api/register", methods= ['POST'])
def register():
   data = request.json
   rows = table_userInfo.find()
   for row in rows:
      if (row.get('username')==data.get('username')):
         return "username already exists"

   table_userInfo.insert_one({"firstName":data.get("firstName"), "lastName": data.get("lastName"), "username": data.get("username"), "password": data.get("password")}) 
   return "user successfully registered"


@app.route("/api/entry/<username>", methods= ['POST']) 
def entry(username):
   data = request.json

   table_journalEntries.insert_one({"username": username, "entry": data.get("entry")}) 
   return "entry added successfully for " + data.get("username")




@app.route("/api/allEntries/<username>", methods= ['GET'])  
def allEntries(username):
   if not username:
      return jsonify({"message": "No user logged in"}), 400

   rows = list(table_journalEntries.find())
   json_serializable_rows = convert_to_json_serializable(rows)
   for row in rows:
      row['_id'] = str(row['_id'])

   return jsonify(rows), 200
    


def convert_to_json_serializable(document):
    if isinstance(document, list):
        return [convert_to_json_serializable(item) for item in document]
    elif isinstance(document, dict):
        return {key: convert_to_json_serializable(value) for key, value in document.items()}
    elif isinstance(document, ObjectId):
        return str(document)
    else:
        return document



if __name__ == "__main__":
        app.run(debug=True, port=8000)

