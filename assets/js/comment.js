Comment = React.createClass({
    rawMarkup: function() {
        var md = new Remarkable();
        var rawMarkup = md.render(this.props.children.toString());
        return { __html: rawMarkup };
    },
    render: function () {
        return (
            <div className="comment">
                <span>name:{this.props.name} </span>
                <span dangerouslySetInnerHTML={this.rawMarkup()}></span>
            </div>
        )
    }
})