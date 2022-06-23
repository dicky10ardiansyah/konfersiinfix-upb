import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Team from "./Components/Team";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expression: "",
      prefix: "",
      postfix: "",
    };
  }

  eventHandeler = (e) => {
    this.setState({ expression: e.target.value });
    console.log(this.state.expression);
  };

  foo = (e) => {
    var current = this;
    var exp = this.state.expression;
    var postFix = "";
    e.preventDefault();

    class Stack {
      constructor() {
        this.data = [];
        this.top = 0;
      }
      push(element) {
        this.data[this.top] = element;
        this.top = this.top + 1;
      }
      pop() {
        this.top = this.top - 1;
        return this.data.pop(); // removes the last element
      }
      isEmpty() {
        return this.top === 0;
      }
      peek() {
        return this.data[this.top - 1];
      }
      length() {
        return this.top;
      }
    }

    var s = new Stack();
    console.log(exp.length);
    console.log(s.length());
    var pre = function (c) {
      if (c === "^") return 3;
      else if (c === "*" || c === "/") return 2;
      else if (c === "+" || c === "-") return 1;
      else return -1;
    };
    var alpha = function (char) {
      return char.toLowerCase() !== char.toUpperCase();
    };

    var getPostFix = function (exp) {
      var postFix = "";
      for (var i = 0; i < exp.length; i++) {
        var k = exp.charAt(i);
        if (alpha(k) === true) {
          postFix += k;
        } else if (k === "(") {
          s.push(k);
        } else if (k === ")") {
          while (!s.isEmpty() && s.peek() !== "(") {
            var ch = s.peek();
            postFix += ch;

            s.pop();
          }
          if (s.peek() === "(") {
            s.pop();
          }
        } else {
          while (!s.isEmpty() && pre(k) <= pre(s.peek())) {
            var ph = s.peek();
            postFix += ph;
            s.pop();
          }
          s.push(k);
        }
      }
      while (!s.isEmpty()) {
        var po = s.peek();
        postFix += po;
        s.pop();
      }
      return postFix;
    };
    postFix = getPostFix(exp);
    // console.log(postFix);
    current.setState({ postfix: postFix });

    // convert to prefix

    var revString = function (str) {
      var newString = "";
      for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
      }
      return newString;
    };

    var currExp = revString(exp);
    //console.log(currExp);

    var newExp = "";
    for (var j = 0; j < currExp.length; j++) {
      if (currExp.charAt(j) === "(") {
        newExp += ")";
      } else if (currExp.charAt(j) === ")") {
        newExp += "(";
      } else {
        newExp += currExp.charAt(j);
      }
    }

    //newExp = getPostFix(newExp);
    var currPreFix = getPostFix(newExp);

    var finalPreFix = revString(currPreFix);
    current.setState({ prefix: finalPreFix });
  };

  render() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <h2>Aplikasi sederhana konversi InFix, PostFix, PreFix</h2>
        <p>
          Masukkan bilangan Infix kedalam kotak dibawah, contohnya: (a+b){" "}
        </p>
        <br />
        <input
          className="form-control"
          type="text"
          id="expression"
          name="expression"
          value={this.state.expression}
          onChange={this.eventHandeler}
          placeholder="masukkan ekspresi Infix"
        />
        <br />
        <p>
          {" "}
          Hasil ekspresi PostFix diatas adalah <span className="text-primary">{this.state.postfix}{" "}</span>
        </p>
        <br />
        <p>
          {" "}
          Hasil ekspresi PreFix diatas adalah <span className="text-danger">{this.state.prefix}{" "}</span>
        </p>
        <br />
        <button
          href=""
          className="btn btn-primary"
          type="submit"
          onClick={this.foo}
        >
          Konversi
        </button>
      </div><br />
      <Team />
      <Footer />
    </div>
  );
}
}

export default App;
