CommentForm = React.createClass({
    getInitialState: function () {
        return {
            name:'',
            comment:''
        }
    },
    submit: function (e) {
        e.preventDefault();
        var data = {
            name: this.state.name,
            comment: this.state.comment
        }
        this.props.submit(data);
    },
    handleNameChange: function (e) {
        this.setState({
            name: e.target.value
        })
    },
    handleCommentChange: function (e) {
        this.setState({
            comment: e.target.value
        });
    },
    render: function () {
        return (
            <div className="comment-form">
                comment formreturn
                <form className="commentForm" onSubmit={this.submit}>
                    <input type="text" placeholder="Your name" name="name" value={this.state.name} onChange={this.handleNameChange} />
                    <input type="text" placeholder="Say something..." name="comment" value={this.state.comment} onChange={this.handleCommentChange} />
                    <input type="submit" value="Post" />
                </form>
            </div>
        )
    }
});