import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bulma/bulma';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                "Go to the store",
                "Wash the dishes",
                "Learn som code"
            ]
        }

        this.addItem = this.addItem.bind(this);
    }

    addItem(e) {
        e.preventDefault();

        let list = this.state.list;
        const newItem = document.getElementById("addInput");
        const form = document.getElementById("addItemForm");

        if (newItem.value != "") {
            list.push(newItem.value);

            this.setState({
                list: list
            });

            newItem.classList.remove("is-danger");
            form.reset();
        } else {
            newItem.classList.add("is-danger");
        }
    }

    render() {
        return (
            <div className="content">
                <div className="container">
                    <section className="section">
                        <label className="has-text-weight-bold">List of Tasks:</label>
                        <ul>
                            {this.state.list.map(item => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </section>
                    <hr />
                    <section className="section">
                        <form className="form" id="addItemForm">
                            <label className="has-text-weight-bold">Task:</label>
                            <input type="text" className="input" id="addInput" placeholder="Something that needs ot be done..." />
                            <br />
                            <br />
                            <button className="button is-info" onClick={this.addItem}>Add Item</button>
                        </form>
                    </section>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));