var CommentBox = React.createClass({
    getInitialState: function() {
        return {data: []};
    },
    postData: function (data) {
        var commentArr = this.state.data;
        $.ajax({
            url: this.props.url,
            type: 'POST',
            data: data,
            success: function (result) {
                commentArr.push(result);
                this.setState({
                    data: commentArr
                })
            }.bind(this)
        });
    },
    getData: function () {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'GET',
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
    componentDidMount:function () {
        this.getData();
    },
    render: function () {
        return (
            <div className="comment-box">
                comment box
                <CommentForm url={this.props.url} submit={this.postData} />
                <CommentList data={this.state.data} />
            </div>
        )
    }
})
ReactDOM.render(
    <CommentBox url="http://localhost:3000/data" />,
    document.getElementById("app")
);