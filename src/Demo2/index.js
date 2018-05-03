import Feact from './Feact/Feact'
import FeactDOM from './Feact/FeactDOM'
// import Feact from 'react'
// import FeactDOM from 'react-dom'

// demo-2
// 这里实现一个组件的基本生命周期
class App extends Feact.Component {
    constructor() {
        super()

        this.state = {
            count: 10
        }
    }
    componentWillMount() {
        console.log('App will mount')
    }
    componentDidMount() {
        console.log('App did mount')
    }
    render() {
        return (
            <div className="app">
                <Header count={this.state.count}>custom header text</Header>
                <h1>this is app</h1>
                <button
                    onClick={() => {
                        this.setState({
                            count: this.state.count + 1
                        })
                    }}
                >
                    click to add count
                </button>
            </div>
        )
    }
}

class Header extends Feact.Component {
    componentWillMount() {
        console.log('Header will mount')
    }
    componentDidMount() {
        console.log('Header did mount')
    }
    componentWillUpdate() {
        console.log('Header will update')
    }
    componentDidUpdate() {
        console.log('Header did update')
    }
    render() {
        return (
            <div className="header">
                <h2>this is header component</h2>
                <div>count: {this.props.count}</div>
                {this.props.children}
            </div>
        )
    }
}

FeactDOM.render(<App />, document.getElementById('root'))
