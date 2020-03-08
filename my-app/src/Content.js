import React from 'react';
import request from 'request'
import ContentItems from './ContentItems'

export class Content extends React.Component {

    constructor() {
        super();
        this.state = {
            items: [],
        };

    }

    componentDidMount() {
        let url = 'http://dummy.restapiexample.com/api/v1/employees'

        request({
            method: 'GET',
            url: url,
        },
            (err, res, body) => {
                if (err) return console.error(err);
                const info = JSON.parse(body);
                let items = [];
                info.data.forEach(function (i, e) {
                    items.push(i)
                })
                this.setState({ items: items});
                console.log(items.filter(items => items.id <=10))
            });
    }

    render() {
        return (
            < div>
                <div className="App-Content">
                    {this.state.items
                    //.filter(items.id => items.id<=10)
                    .map((item, i) => {
                        return <ContentItems 
                        name={item.employee_name} 
                        key={i} 
                        eId={item.id} 
                        salary={item.employee_salary}
                        age={item.employee_age}
                        />
                                         })}
                </div>
            </div >

        );
    }
};