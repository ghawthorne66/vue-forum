// eslint-disable-next-line no-undef
{data = {
    categories: [{
        id: 'c1',
        name: 'chats'
    }],
    forums: [
        {
            id: 'f1',
            name: 'fishing',
            description: "let's talk fishing",
            categoryId: 'c1',
            threads: ['t1']

        }],
    users: [
        {
            id: 'u1',
            name: 'Alex'

        }],
    threads: [
        {
            id: 't1',
            title: 'what is your favorite food?',
            publishedAt: 1681681681,
            posts: [],
            userId: ''
        }
    ],
    posts: [{
        id: 'p1',
        publishedAt: 1681681681,
        userId: '',
        text: 'I like pizza',
        thread: 't1'
    }
    ]
}}

// data.posts.filter(post => post.userId === 'u1')

