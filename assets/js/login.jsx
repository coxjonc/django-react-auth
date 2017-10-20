var React = require('react')
var auth = require('./auth')

module.exports = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    
    getInitialState: function() {
        return {
          login_error: false
        }
      },

    handleSubmit: function(e) {
        e.preventDefault()

        var username = this.refs.username.value
        var pass = this.refs.pass.value

        auth.login(username, pass, (loggedIn) => {
            if (loggedIn) {
                this.context.router.replace('/app/')
            } else {
                this.setState({login_error:true})
            }
        })
    },
    
    render: function() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="username" ref="username"/>
                <input type="password" placeholder="password" ref="pass"/>
                <input type="submit"/>
            </form>
        )    
    }
})
