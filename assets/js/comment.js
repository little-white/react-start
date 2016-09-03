Comment = React.createClass({
    render: function () {
        return (
            <div className="comment">
                <span>name:{this.props.name} </span>
                <span>comment:{this.props.children}</span>
            </div>
        )
    }
})