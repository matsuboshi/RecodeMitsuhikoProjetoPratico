from flask import Flask, render_template, request
import json

app = Flask(__name__, template_folder="./src/views")


@app.route("/", methods=["GET", "POST"])
def home():
    if(request.method == "GET"):
        return render_template("index.html")
    else:
        if (request.form["num1"] != "" and request.form["num2"] != ""):

            num1 = int(request.form["num1"])
            num2 = int(request.form["num2"])
            sum = request.form["sum"]
            sub = request.form["sub"]
            mul = request.form["mul"]
            div = request.form["div"]
            def obj(): return None

            if(sum == 'on'):
                setattr(obj, 'sum', num1 + num2)
            if(sub == 'on'):
                setattr(obj, 'sub', num1 - num2)
            if(mul == 'on'):
                setattr(obj, 'mul', num1 * num2)
            if(div == 'on'):
                setattr(obj, 'div', num1 // num2)

            jsonStr = json.dumps(obj.__dict__)
            return jsonStr

        else:
            return "Informe um valor valido"


@app.route("/<int:id>")
def home_id(id):
    return str(id + 1)


@app.errorhandler(404)
def not_found(error):
    return render_template("error.html")


@app.errorhandler(405)
def incorrect_verb(error):
    return {
        "mensagem": "the method does not exist!"
    }


app.run(port=8080, debug=True)
