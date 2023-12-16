import React from 'react'

function Navbar(props) {

    return (

        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container">
                <span className="navbar-brand">
                    {props.nBrand}
                </span>

                <button
                    className="navbar-toggler"
                    type='button'
                    data-bs-toggle="collapse" data-bs-target="#Nav-Bar">
                    <span className="navbar-toggler-icon">
                    </span>
                </button>
                <div className='collapse navbar-collapse justify-content-end ' id="Nav-Bar">
                    <ul className="navbar-nav">
                        {props.nLink.map((elements) => {
                            return (
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        {elements}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                    <input type="text" className='' />
                    <button className="btn btn-success mt-0 mb-0 m-3">
                        Search
                    </button>
                </div>
            </div>
        </nav>

    )
}

export default Navbar

Navbar.defaultProps = {
    nBrand: "Add Brand Name"
}