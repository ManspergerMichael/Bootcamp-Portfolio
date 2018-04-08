from flask import Flask, render_template, request, redirect, flash
app = Flask(__name__) 
app.secret_key = "Bazinga!"

#directs to page with form
@app.route('/')
def landing():
    #print "start"
    return render_template('index.html')
#takes in data from form in index.html prints form data to terminal
@app.route('/result', methods=['POST'])
def submit():
    #print "hi1"
    if len(request.form['Name']) <= 0:
        flash("Name cannot be empty!")
        #print "hi2"
        return render_template('index.html')
    if len(request.form['comment']) > 120:
        flash("Comment must be under 120 characters!")
        print "second statement"
        return render_template('index.html')
    return redirect('result.html',name = request.form['Name'],
                                location = request.form['Location'],
                                langwage = request.form['Langwage'],
                                comment = request.form['comment'])


app.run(debug=True) 