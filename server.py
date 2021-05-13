from flask import Flask, render_template, request, redirect, Response
import csv
import os

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/<string:page_name>')
def html_page(page_name=None):
    return render_template(f'{page_name}.html')

@app.route('/projects/<string:page_name>')
def projects_page(page_name=None):
    return render_template(f'projects/{page_name}.html')


def write_to_file(data):
    with open('database.txt', mode='a') as database:
        email = data['email']
        subject = data['subject']
        message = data['message']
        file = database.write(f'\n{email},{subject},{message}')


def write_to_csv(data):
    path = os.getcwd()
    print(path)
    with open(f'{path}/database.csv', mode='a') as database2:
        email = data['email']
        subject = data['subject']
        message = data['message']
        csv_writer = csv.writer(database2, delimiter=',', quotechar=';', quoting=csv.QUOTE_MINIMAL, lineterminator='\n')
        csv_writer.writerow([email, subject, message])


@app.route('/submit_form', methods=['GET', 'POST'])
def submit_form():
    if request.method == 'POST':
        try:
            form = request.get_json()
            write_to_csv(form)
            return Response(status=201)
        except:
            return Response(status=400)
    else:
        return Response(status=500)
