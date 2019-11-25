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
        this.removeItem = this.removeItem.bind(this);
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

    removeItem(item) {
        const list = this.state.list.slice();

        list.some((el, i) => {
            if (el === item) {
                list.splice(i, 1);
                return true;
            }
        });

        this.setState({
            list: list
        });
    }

    render() {
        return (
            <div className="content">
                <div className="container">
                    <section className="section">
                        <label className="has-text-weight-bold">List of Tasks:</label>
                        <List items={this.state.list} delete={this.removeItem} />
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

class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <li key={item}>{item} &nbsp;<span className="delete" onClick={() => this.props.delete(item)} /></li>
                ))}
            </ul>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));