CommentForm = React.createClass({
    render: function () {
        return (
            <div className="comment-form">
                comment formreturn
                <form className="commentForm" action="http://localhost:3000/data" method="POST">
                    <input type="text" placeholder="Your name" name="name" />
                    <input type="text" placeholder="Say something..." name="comment" />
                    <input type="submit" value="Post" />
                </form>
            </div>
        )
    }
});