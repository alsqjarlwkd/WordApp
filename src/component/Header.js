import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div className="header">
            <h1>
                <Link to="/">토익 영단어(REST API CRUD)</Link>
            </h1>
            <div className="menu">
                <Link to="/create_word"><button>단어추가</button></Link>
                <Link to="/create_day"><button>Day 추가</button></Link>
            </div>

        </div>
    )
}

export default Header
