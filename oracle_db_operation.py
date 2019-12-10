from flask import Flask,jsonify,request;
import cx_Oracle as oracle;
from flask_cors import CORS, cross_origin
from flask_restful import Resource, Api
import json

conn = oracle.connect('SYSTEM/password-1')
cursor = conn.cursor()

app=Flask(__name__)
#from git
api=Api(app)
CORS(app)

#functions
@app.route("/users/<int:id>", methods=['GET'])
def getUser(id):
    query = "select * from users where id="+str(id)
    cursor.execute(query)
    data = ""
    for name, lname, id, fname, dob, role, mobile ,email, pwd , city, state, zip in cursor:
        data='{"user_id":"'+str(id)+'","name":"'+name+'", "password":"'+pwd+'", "role":"'+role+'"}'
    print(data)
    return json.dumps(data)

@app.route("/users/add",methods=['GET'])
def postUser():
    user_data=request.args.get('user_data')
    if(user_data[-1:]!="}"):
        user_data = user_data+"}"
    user = json.loads(user_data)   
    query="insert into users values('"+user['name']+"','"+user['lname']+"',"+str(user['id'])+",'"+user['fname']+"','"+user['dob']+"','"+user['role']+"',"+str(user['mo'])+",'"+user['email']+"','"+user['pwd']+"','"+user['city']+"','"+user['state']+"',"+str(user['zip'])+")";
    print(query)
    cursor.execute(query)
    cursor.execute("commit")
    return ""

if __name__=='__main__':
    app.run(debug=True)
