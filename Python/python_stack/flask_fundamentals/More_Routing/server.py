'''


from flask import Flask, render_template, request, redirect
app = Flask(__name__)
@app.route('/users/<username>')
def show_user_profile(username):
    print username
    return render_template("users.html")
app.run(debug=True)

from flask import Flask, render_template
app = Flask(__name__)
@app.route('/users')
def hello():
    return render_template('users.html', name = "Michael")

app.run(debug=True)
'''
from flask import Flask, render_template, request, redirect
app = Flask(__name__)
# our index route will handle rendering our form
@app.route('/')
def index():
  return render_template("index.html")
# this route will handle our form submission
# notice how we defined which HTTP methods are allowed by this route
@app.route('/users', methods=['POST'])
def create_user():
   print "Got Post Info"
   # we'll talk about the following two lines after we learn a little more
   # about forms
   name = request.form['name']
   email = request.form['email']
   print request.form
   # redirects back to the '/' route
   return render_template('sucsess.html', name)

@app.route('/sucsess')
def sucsess():
    return redirect("sucsess.html")

app.run(debug=True) # run our server


