var React = require('react')
var auth = require('./auth')

module.exports = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    getInitialState: function() {
        return {
            error: false
        }
    },

    handleSubmit: function(e) {
        e.preventDefault()

        var username = this.refs.username.value
        var pass = this.refs.pass.value

        auth.login(username, pass, (loggedIn) => {
            if (!loggedIn) 
                return this.setState({error:true})
            
            this.context.router.replace('/app/')
        })
    },
    
    render: function() {
        return (
            <form onSubmit={this.handleSubmit}>
                <span>{(this.error) ? 'Try again' : ''}</span>
                <input type="text" placeholder="username" ref="username"/>
                <input type="password" placeholder="password" ref="pass"/>
                <input type="submit"/>
            </form>
        )    
    }
})
