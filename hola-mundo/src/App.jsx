import './App.css'
import { TwitterFollowCard } from "./TwitterFollowCard.jsx"
import { Counter } from './components/Counter/Counter.jsx'
import { Navbar } from './components/Navbar/Navbar.jsx'
import { ProductCard } from './components/ProductCard/ProductCard.jsx'
import { ConditionalApp } from './components/ConditionalApp/ConditionalApp.jsx'

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
    <>
    <Navbar />
    <div className="section-container">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
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
    </div>
    <Counter />
    <ConditionalApp />
    </>
    )
}