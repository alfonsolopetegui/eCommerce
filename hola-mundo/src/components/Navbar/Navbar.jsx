import './navbar.css'

export function Navbar () {
    return (
        <div className="nv-container">
            <input classname= "nv-search" type="search" />
            <nav className="nav-bar">
                <a href="#">Item1</a>
                <a href="#">Item2</a>
                <a href="#">Item3</a>
                <a href="#">Item4</a>
                <a href="#">Item5</a>
            </nav>
            <span className='user-login'>User Login</span>
        </div>
    )
}