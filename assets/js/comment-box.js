var CommentBox = React.createClass({
    getInitialState: function() {
        return {data: []};
    },
    componentDidMount:function () {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success:function (result) {
                this.setState({
                    data: result
                });
            }.bind(this),
            error: function () {
                console.log('error')
            }
        });
    },
    render: function () {
        return (
            <div className="comment-box">
                comment box
                <CommentForm />
                <CommentList data={this.state.data} />
            </div>
        )
    }
})
ReactDOM.render(
    <CommentBox url="http://localhost:3000/data" />,
    document.getElementById("app")
);