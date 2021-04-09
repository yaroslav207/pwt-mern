import React from 'react'
import slide1 from "../img/slide1.jpg";
import slide2 from "../img/slide2.jpg";
import slide3 from "../img/slide3.jpg";
import thumb_172228 from "../img/thumb_172228.jpg";

function Home() {
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={slide1} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={slide2} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={slide3} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button"
                   data-slide="prev">
                    <span className="carousel-control-prev-icon" ariaHidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button"
                   data-slide="next">
                    <span className="carousel-control-next-icon" ariaHidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <div className="products container">
                <div className="row">
                    <div className="col-sm product">
                        <div className="car">
                            <img src={thumb_172228} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Сверло</h5>

                                <div className="reviews">
                                    <div className="rating-result">
                                        <span className="active"></span>
                                        <span className="active"></span>
                                        <span className="active"></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <svg data-v-db56a932="" width="15" height="11" viewBox="0 0 15 11" fill="grey"
                                         xmlns="http://www.w3.org/2000/svg" className="reviews-counter__svg">
                                        <path data-v-db56a932="" fill-rule="evenodd" clip-rule="evenodd"
                                              d="M2.40311 7.53313L1.76052 9.3189L3.62496 8.70716L4.04236 8.91648C4.64754 9.21996 5.33676 9.39212 6.07131 9.39212H9.53565C11.95 9.39212 13.9071 7.52324 13.9071 5.21785C13.9071 2.91246 11.95 1.04357 9.53565 1.04357H6.07131C3.65701 1.04357 1.69983 2.91246 1.69983 5.21785C1.69983 5.91164 1.87623 6.56304 2.18759 7.13631L2.40311 7.53313ZM0 11L1.21743 7.61676C0.827351 6.89855 0.606961 6.08278 0.606961 5.21785C0.606961 2.33611 3.05343 0 6.07131 0H9.53565C12.5535 0 15 2.33611 15 5.21785C15 8.09958 12.5535 10.4357 9.53565 10.4357H6.07131C5.15554 10.4357 4.29238 10.2206 3.53423 9.84039L0 11Z"></path>
                                    </svg>
                                    <a>
                                        <span className="count">17</span>
                                        <p>отзывов</p>
                                    </a>
                                </div>
                                <div className="price">
                                    <span>1956</span>
                                    грн
                                </div>
                                <a href="#" className="btn btn-primary btn-template2">
                                    Купить
                                    <svg data-v-39778b28="" className="svg-icon" width="30" height="25"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path data-v-39778b28=""
                                              d="M10.577 15.962h12.82c.77 0 1.475-.45 1.795-1.154l3.846-8.975a1.807 1.807 0 0 0-.192-1.795c-.384-.512-.961-.833-1.602-.833H6.09c-.385 0-.705.128-1.026.32L3.782.578C3.654.257 3.27 0 2.885 0H.962A.986.986 0 0 0 0 .962c0 .512.449.961.962.961h1.282L8.077 15.32c-.449.578-.705 1.218-.705 1.988 0 .897.384 1.666.897 2.243-.577.577-.897 1.346-.897 2.244A3.174 3.174 0 0 0 10.577 25a3.174 3.174 0 0 0 3.205-3.205c0-.449-.128-.898-.256-1.282h6.923c-.193.384-.257.833-.257 1.282A3.174 3.174 0 0 0 23.397 25a3.174 3.174 0 0 0 3.206-3.205c0-1.795-1.41-3.205-3.142-3.205H10.578a1.286 1.286 0 0 1-1.282-1.282c0-.705.577-1.346 1.282-1.346zM27.244 5.064l-3.847 8.975H9.936L6.09 5.064h21.154zM11.859 21.731c0 .705-.577 1.282-1.282 1.282a1.286 1.286 0 0 1-1.282-1.282c0-.705.577-1.282 1.282-1.282.705 0 1.282.577 1.282 1.282zm12.82 0c0 .705-.576 1.282-1.282 1.282a1.286 1.286 0 0 1-1.282-1.282c0-.705.577-1.282 1.282-1.282.706 0 1.283.577 1.283 1.282z"></path>
                                    </svg>
                                </a>
                                {/*Сравнение товаров
                                                             <a href="#" className="btn btn-primary btn-template card-btn-comparison">
                                                                 <svg data-v-26b4edf1="" className="svg-icon" width="25" height="25" fill="#47474B"
                                                                      viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                     <path data-v-26b4edf1=""
                                                                           d="M16.9525 4.53608H10.6186V3.60495C11.3385 3.34961 11.8557 2.66206 11.8557 1.85567C11.8557 0.832454 11.0232 0 10 0C8.97678 0 8.14433 0.832454 8.14433 1.85567C8.14433 2.66206 8.66148 3.34961 9.38144 3.60495V4.53608H3.04755L0 11.2188V11.3532C0 13.2529 1.54553 14.7985 3.44528 14.7985C5.34503 14.7985 6.89056 13.253 6.89056 11.3532V11.2188L4.40722 5.7732H9.38144V16.2887H6.40243L5.16532 20H14.8346L13.5975 16.2887H10.6186V5.7732H15.5928L13.1094 11.2188V11.3532C13.1094 13.2529 14.6549 14.7985 16.5547 14.7985C18.4544 14.7985 20 13.2529 20 11.3532V11.2188L16.9525 4.53608ZM10 1.23711C10.3411 1.23711 10.6186 1.5146 10.6186 1.85567C10.6186 2.19674 10.3411 2.47423 10 2.47423C9.65893 2.47423 9.38144 2.19674 9.38144 1.85567C9.38144 1.5146 9.65893 1.23711 10 1.23711ZM3.44528 13.5614C2.44235 13.5614 1.59398 12.8892 1.32581 11.9718H5.56474C5.29658 12.8892 4.44821 13.5614 3.44528 13.5614ZM5.3101 10.7346H1.58049L3.44532 6.6454L5.3101 10.7346ZM13.1183 18.7629H6.88173L7.2941 17.5258H12.7059L13.1183 18.7629ZM16.5547 6.6454L18.4195 10.7346H14.6899L16.5547 6.6454ZM16.5547 13.5614C15.5518 13.5614 14.7034 12.8892 14.4353 11.9718H18.6742C18.406 12.8892 17.5576 13.5614 16.5547 13.5614Z"
                                                                           className="comparison-svg"></path>
                                                                 </svg>
                                                             </a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
