var CommentBox = React.createClass({
    render: function () {
        return (
            <div className="comment-box">
                comment box
            </div>
        )
    }
})
ReactDOM.render(
    <CommentBox />,
    document.getElementById("app")
);