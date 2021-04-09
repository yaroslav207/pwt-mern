import React from 'react'

function Footer () {
    return(
        <footer>
            <div className="footer container-fluid">
                <div className="row">

                    <div className="col-sm">
                        <div className="footer-info">
                            <h3 className="footer-list-title">чтото там</h3>
                            <ul className="list-group list-group-flush">
                                <li className="footer-nav">Cras justo odio</li>
                                <li className="footer-nav">Dapibus ac facilisis in</li>
                                <li className="footer-nav">Morbi leo risus</li>
                                <li className="footer-nav">Porta ac consectetur ac</li>
                                <li className="footer-nav">Vestibulum at eros</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-sm">
                        <div className="footer-info">
                            <h3 className="footer-list-title">чтото там</h3>
                            <ul className="list-group list-group-flush">
                                <li className="footer-nav">Cras justo odio</li>
                                <li className="footer-nav">Dapibus ac facilisis in</li>
                                <li className="footer-nav">Morbi leo risus</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-sm">
                        <div className="footer-info">
                            <h3 className="footer-list-title">чтото там</h3>
                            <ul className="list-group list-group-flush">
                                <li className="footer-nav">Cras justo odio</li>
                                <li className="footer-nav">Dapibus ac facilisis in</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="footer-info">
                            <h3 className="footer-list-title">(095)-488-74-75</h3></div>
                        <p>Отримуйте сповіщення про нові акції, спецпропозиції і знижки</p>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="e-mail"
                                   ariaLabel="Recipient's username"
                                   ariaDescribedby="button-addon2"/>
                            <div className="input-group-append">
                                <button className="btn-template2" type="button" id="button-addon2">
                                    <svg width="22" height="18" className="svg-icon"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19.314.629H2.69A2.693 2.693 0 0 0 0 3.319v11.362a2.693 2.693 0 0 0 2.69 2.69h16.62a2.693 2.693 0 0 0 2.69-2.69V3.324A2.69 2.69 0 0 0 19.314.629zm1.462 14.052c0 .806-.656 1.461-1.462 1.461H2.69a1.463 1.463 0 0 1-1.461-1.461V3.324c0-.806.656-1.461 1.461-1.461h16.62c.806 0 1.461.655 1.461 1.46v11.358h.005z"></path>
                                        <path
                                            d="M13.874 8.859l5.38-4.825a.618.618 0 0 0 .046-.87.618.618 0 0 0-.87-.045l-7.419 6.66-1.447-1.293c-.005-.005-.01-.01-.01-.014a.912.912 0 0 0-.1-.087l-5.89-5.27a.614.614 0 0 0-.87.05.614.614 0 0 0 .05.869L8.19 8.9l-5.422 5.075a.617.617 0 0 0 .842.902l5.504-5.149 1.493 1.334a.614.614 0 0 0 .82-.005l1.533-1.374 5.472 5.198a.614.614 0 0 0 .847-.892l-5.404-5.13z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <ul className="contacts">
                            <li className="facebook">
                                <svg width="8" height="16" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5.062 5.656V3.781a.95.95 0 0 1 .962-.937h.963V.5H5.062C3.467.5 2.175 1.76 2.175 3.313v2.343H.25V8h1.925v7.5h2.887V8h1.925l.962-2.344H5.062z"></path>
                                </svg>
                            </li>
                            <li className="youtube">
                                <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M13.085.115c-2.312-.154-7.462-.153-9.772 0C.813.281.52 1.753.5 5.625c.019 3.866.31 5.343 2.813 5.51 2.31.153 7.46.154 9.772 0 2.5-.166 2.795-1.637 2.814-5.51-.019-3.866-.31-5.343-2.814-5.51zm-6.81 8.01v-5l5.133 2.496-5.133 2.504z"></path>
                                </svg>
                            </li>
                            <li className="telegram">
                                <svg width="15" height="14" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M.265 6.262l3.456 1.29 1.338 4.303a.407.407 0 0 0 .646.194l1.927-1.57a.575.575 0 0 1 .7-.02l3.475 2.523c.24.174.579.043.639-.246L14.99.49a.407.407 0 0 0-.545-.463L.26 5.5a.408.408 0 0 0 .004.762zm4.578.604l6.755-4.16c.122-.075.247.089.142.185L6.166 8.073a1.156 1.156 0 0 0-.359.692l-.19 1.407c-.025.188-.288.207-.34.025l-.73-2.566a.68.68 0 0 1 .296-.765z"></path>
                                </svg>
                            </li>
                            <li className="viber">
                                <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M7.59 3.834a.333.333 0 0 1 .35-.315c.688.036 1.26.244 1.668.665.406.42.605 1.006.64 1.71a.333.333 0 1 1-.666.033c-.03-.604-.195-1.013-.453-1.28-.256-.265-.648-.432-1.225-.463a.333.333 0 0 1-.315-.35z"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M7.08 2.041a.333.333 0 0 1 .356-.309c1.402.1 2.528.582 3.348 1.475.816.888 1.2 1.99 1.171 3.285a.333.333 0 0 1-.666-.016c.026-1.14-.309-2.07-.995-2.818-.682-.743-1.636-1.17-2.905-1.261a.333.333 0 0 1-.31-.356z"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M6.494.331A.333.333 0 0 1 6.829 0c1.934.012 3.572.659 4.883 1.937 1.322 1.292 1.978 3.044 1.994 5.228a.333.333 0 1 1-.666.005c-.016-2.045-.625-3.614-1.793-4.756C10.067 1.264 8.598.678 6.825.666a.333.333 0 0 1-.331-.335z"></path>
                                    <path
                                        d="M7.99 10.374s.47.04.719-.273l.49-.617c.237-.308.81-.502 1.371-.19.313.178.874.522 1.222.78.372.272 1.134.908 1.134.908.364.305.447.755.202 1.23 0 .004-.004.008-.004.008-.253.446-.593.87-1.024 1.26l-.008.009c-.351.292-.7.462-1.04.502-.039.008-.09.011-.15.008-.15 0-.296-.02-.442-.068l-.012-.015c-.526-.147-1.4-.518-2.858-1.32a16.831 16.831 0 0 1-2.4-1.586 12.704 12.704 0 0 1-1.079-.957l-.035-.035-.036-.036-.035-.035-.036-.036c-.364-.367-.68-.727-.957-1.079a17.06 17.06 0 0 1-1.585-2.4C.625 4.975.253 4.1.107 3.576l-.016-.012a1.31 1.31 0 0 1-.067-.443c-.004-.06 0-.11.008-.15.04-.34.21-.688.502-1.04l.008-.008c.391-.43.81-.77 1.26-1.024.005 0 .009-.003.009-.003.474-.246.925-.163 1.23.201.003.004.636.763.908 1.135.257.351.605.909.779 1.221.312.561.119 1.135-.19 1.372l-.616.49c-.313.253-.273.72-.273.72s.917 3.466 4.34 4.34z"></path>
                                </svg>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer