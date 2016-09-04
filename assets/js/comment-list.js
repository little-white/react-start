CommentList = React.createClass({
    render: function () {
        var commentNoes = this.props.data.map(function (elem, index) {
            return (
                <Comment name={elem.name} key={index}>{elem.comment}</Comment>
            )
        });
        console.log(commentNoes);
        return (
            <div className="comment-list">
                comment list
                {commentNoes}
            </div>
        )
    }
});