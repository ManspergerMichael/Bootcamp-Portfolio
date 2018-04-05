from flask import Flask  # Import Flask to allow us to create our app.
app = Flask(__name__)    # Global variable __name__ tells Flask whether or not we are running the file
                         # directly, or importing it as a module.
@app.route('/')          # The "@" symbol designates a "decorator" which attaches the following
                         # function to the '/' route. This means that whenever we send a request to
                         # localhost:5000/ we will run the following "hello_world" function.
def hello_world():
    left = "<a href=/left>Left</a>"
    right = "<a href=/right>Right</a>"
    htmlString = "<p>Adventures in the galixy of fantabulous wonderment</p><p>"+ left +" "+ right +"</p>"
    return htmlString  # Return the string 'Hello World!' as a response.

@app.route('/left')
def dead():
    start = "<a href=/>Back to start</a>"
    return 'The local population sees your red shirt and opens fire. You re dead!'+start

@app.route('/right')
def moreDead():
    start = "<a href=/>Back to start</a>"
    return 'You are eaten by a Targarian sand worm'+start


app.run(debug=True)  