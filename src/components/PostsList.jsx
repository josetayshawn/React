import Post from './Post';
import classes from './PostLists.module.css';

function PostLists () {
    return (
        <ul className={classes.posts}>
            <Post author= "Tayshawn" body="Learning react" />
            <Post author="Manuel" body="This is awesome" />
        </ul>
    )
}


export default PostLists;