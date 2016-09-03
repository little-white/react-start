// var CommentList = React.createClass({
//     render: function () {
//         return (
//             <div className="comment-list">
//                 comment list
//             </div>
//         )
//     }
// })
// var CommentForm = React.createClass({
//     render: function () {
//         return (
//             <div className="comment-form">
//                 comment form
//             </div>
//         )
//     }
// })
var CommentBox = React.createClass({
    render: function () {
        return (
            <div className="comment-box">
                comment box
                <CommentForm />
                <CommentList />
            </div>
        )
    }
})
ReactDOM.render(
    <CommentBox />,
    document.getElementById("app")
);