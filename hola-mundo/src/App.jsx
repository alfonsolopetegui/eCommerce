import './App.css'
import { TwitterFollowCard } from "./TwitterFollowCard"

const users = [
    {
        userName:'midudev',
        name: 'Miguel Angel Duran',
        isFollowing: true
    },

    {
        userName:'mario',
        name: 'Mario Suarez',
        isFollowing: false
    },

    {
        userName:'pablo',
        name: 'Pablo Antomarioni',
        isFollowing: false
    }
]


export function App () {
    return (
    <section className='App'>
    {
        users.map(user => {
            const { userName, name, isFollowing } = user
            return (
                <TwitterFollowCard
                    key={userName}
                    userName={userName}
                    name={name}
                    initialIsFollowing={isFollowing}
                >
                </TwitterFollowCard>
            )
        })
    }
    </section>
    )
}