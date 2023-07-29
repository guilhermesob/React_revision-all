#containerjs
  // container component
classUsersContainerextendsReact.Component{
	constructor()
	{
		this.state = {
			itr: []
		}
	}
	componentDidMount() {
		axios.get('/users').then(itr => this.setState({ users: itr }))
		)
	}
	render() {
		return <Usersusers = {this.state.itr
	} />
}}
