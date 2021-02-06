interface IUser {
    userId: string,
    name: string
}

interface IPost {
    postId: string
    userId: string,
    text: string 
}

interface ISubscriber {
    userId: string, 
    subscriberId: string
}

interface IFollower {
    userId: string, 
    followerId: string
}

interface ILike {
    postId: string, 
    userId: string
}

interface IState {
    users: {
        [userId:string]: IUser
    }

    posts: {
        [postId: string]: IPost
    }

    postsOrder: string[]

    subscriptions: Array<ISubscriber>

    followers: Array<IFollower>

    likes: Array<ILike> 
}
