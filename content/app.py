from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Database configuration
db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': 'root1',
    'database': 'vj_info'
}

@app.route('/login', methods=['POST'])
def login():
    email = request.form['email']
    password = request.form['password']
    
    # Create a database connection
    conn = mysql.connector.connect(**db_config)
    cursor = conn.cursor()
    
    # Execute a query
    # query = "SELECT * FROM login WHERE email = %s AND password = %s"
    # cursor.execute(query, (email, password))
    
    # Fetch result
    # result = cursor.fetchone()
    
    if email == "vijay@gmail.com":
        if password == "vijay":
            result = True;
    
    if result:
        response = "Success"
    else:
        response = "Invalid credentials"
    
    cursor.close()
    conn.close()
    
    return response

if __name__ == '__main__':
    app.run(debug=True)
