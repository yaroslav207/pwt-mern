import React from 'react'
import perf from "../img/catalog-img/power-tools/perf.jpg";
import drills from "../img/catalog-img/power-tools/drills.jpg";
import sandersTop from "../img/catalog-img/power-tools/sanders_top_1157169194.jpg";

function Header() {
    return(
        <header>
            <div className="header-top">
                <div className="margin-content">
                    <div className="logo ">МИКИТА</div>
                    <nav className="header-nav">
                        <a href="" className=" header-nav-item ">Новинки</a>
                        <a href="" className=" header-nav-item ">Акции</a>
                        <div className="dropdown">
                            <button className="  dropdown-toggle header-nav-item " type="button"
                                    id="dropdownMenuButton2"
                                    data-toggle="dropdown" ariaHaspopup="true" ariaExpanded="false">
                                Покупцям
                            </button>
                            <div className="dropdown-menu" ariaLabelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">

                                </a>
                            </div>
                        </div>

                    </nav>
                    <div className="dropdown">
                        <button className="dropdown-toggle header-nav-item" type="button" id="dropdownMenuButton3"
                                data-toggle="dropdown" ariaHaspopup="true" ariaExpanded="false">
                            (095)-488-74-75
                        </button>
                        <div className="dropdown-menu dropdown-menu-right" ariaLabelledby="dropdownMenuButton">
                            <div className="header-top__contact-info">
                                <span>с 8:00 до 00:00</span>
                                <span>(пн-вс)</span>
                                <span>Согласно вашего моб. оператора</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-bottom">
                <div className="margin-content">
                    <div className="dropdown ">
                        <button className="btn-template btn btn-secondary dropdown-toggle " type="button"
                                id="dropdownMenuButton"
                                data-toggle="dropdown" ariaHaspopup="true" ariaExpanded="false">
                            Категории
                        </button>
                        <div className="dropdown-menu" ariaLabelledby="dropdownMenuButton">
                            <div className="category btn-template border-none">
                                <a className="category-item" href="#">Електроинструмент</a>
                                <div className="catalog">
                                    <a className="item-element">
                                        <img src={perf}
                                             className="catalog-item-image"/>
                                        <span className="catalog-item-title">Перфораторы</span>
                                    </a>
                                    <a className="item-element">
                                        <img src={drills}
                                             className="catalog-item-image"/>
                                        <span className="catalog-item-title">Дрели</span>
                                    </a>
                                    <a className="item-element">
                                        <img src={sandersTop}
                                             className="catalog-item-image"/>
                                        <span className="catalog-item-title">Шлифовальные и палировальные</span>
                                    </a>
                                    <a className="item-element">
                                        <img src={drills}
                                             className="catalog-item-image"/>
                                        <span className="catalog-item-title">Дрели</span>
                                    </a>
                                    <a className="item-element">
                                        <img src={drills}
                                             className="catalog-item-image"/>
                                        <span className="catalog-item-title">Дрели</span>
                                    </a>
                                    <a className="item-element">
                                        <img src={drills}
                                             className="catalog-item-image"/>
                                        <span className="catalog-item-title">Дрели</span>
                                    </a>
                                </div>
                            </div>
                            <div className="category btn-template border-none">
                                <a className="category-item" href="#">Акумуляторный инструмент</a>
                                <div className="catalog">
                                    <a className="item-element">eetrrfs</a>
                                    <a className="item-element">eetrrfs</a>
                                    <a className="item-element">eetrrfs</a>
                                    <a className="item-element">eetrrfs</a>
                                    <a className="item-element">eetrrfs</a>
                                    <a className="item-element">eetrrfs</a>
                                    <a className="item-element">eetrrfs</a>
                                    <a className="item-element">eetrrfs</a>
                                    <a className="item-element">eetrrfs</a>
                                </div>
                            </div>
                            <div className="category btn-template border-none">
                                <a className="category-item" href="#">Електроинструмент</a>
                                <div className="catalog">
                                    <a className="item-element">eetrrfs</a>
                                    <a className="item-element">eetrrfs</a>
                                    <a className="item-element">eetrrfs</a>
                                    <a className="item-element">eetrrfs</a>
                                    <a className="item-element">eetrrfs</a>
                                    <a className="item-element">eetrrfs</a>
                                    <a className="item-element">eetrrfs</a>
                                    <a className="item-element">eetrrfs</a>
                                    <a className="item-element">eetrrfs</a>
                                </div>
                            </div>
                            <div className="category btn-template border-none">
                                <a className="category-item" href="#">Сварка</a>
                                <div className="catalog">
                                    <a className="item-element">eetrrfs</a>
                                    <a className="item-element">eetrrfs</a>
                                    <a className="item-element">eetrrfs</a>
                                    <a className="item-element">eetrrfs</a>
                                    <a className="item-element">eetrrfs</a>
                                    <a className="item-element">eetrrfs</a>
                                    <a className="item-element">eetrrfs</a>
                                    <a className="item-element">eetrrfs</a>
                                    <a className="item-element">eetrrfs</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="search-box">
                            <input type="text" placeholder="Search" className="input"/>
                            <div className="search-btn">
                                <i className="fa fa-search" ariaHidden="true"></i>
                            </div>
                        </div>
                    </div>
                    <div className="header-bottom-nav">

                        <button type="button" className="btn btn-primary btn-template border-none"
                                data-toggle="modal"
                                data-target="#exampleModalCenter">
                            <svg className="svg-icon" width={27} height={25} viewBox={"0 0 31 29"}
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.575 18.146c4.159 0 7.561-4.083 7.561-9.073S19.734 0 15.576 0c-4.159 0-7.561 4.083-7.561 9.073s3.402 9.073 7.56 9.073zm0-15.878c2.95 0 5.293 3.025 5.293 6.805s-2.344 6.805-5.293 6.805c-2.948 0-5.292-3.024-5.292-6.805 0-3.78 2.344-6.805 5.292-6.805z"></path>
                                <path
                                    d="M22.456 17.39c-.605-.076-1.21.378-1.21.983-.076.605.378 1.21.983 1.21.227 0 5.897.68 6.502 6.805H2.344c.605-6.125 6.2-6.805 6.502-6.805.605-.076 1.059-.605.983-1.21-.075-.605-.605-1.059-1.21-.983-.075 0-8.619.983-8.619 10.207 0 .605.53 1.134 1.134 1.134h28.731c.605 0 1.135-.529 1.135-1.134.075-9.224-8.393-10.207-8.544-10.207z"></path>
                            </svg>
                            Вход/Регистрация
                        </button>

                        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog"
                             ariaLabelledby="exampleModalCenterTitle" ariaHidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Вход</h5>
                                        <button type="button" className="close" dataDismiss="modal"
                                                ariaLabel="Close">
                                            <span ariaHidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="form-group">
                                                <label forHtml="exampleInputEmail1">Email</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1"
                                                       ariaDescribedby="emailHelp" placeholder="Введите email"/>
                                            </div>
                                            <div className="form-group">
                                                <label forHtml="exampleInputPassword1">Пароль</label>
                                                <input type="password" className="form-control"
                                                       id="exampleInputPassword1"
                                                       placeholder="Пароль"/>
                                            </div>
                                            <div className="form-submit">
                                                <div className="form-group form-check">
                                                    <input type="checkbox" className="form-check-input"
                                                           id="exampleCheck1"/>
                                                    <label className="form-checkLabel" forHtml="exampleCheck1">Запомнить
                                                        меня</label>
                                                </div>
                                                <button type="submit" className="btn btn-template2">Войти</button>
                                            </div>
                                            <div className="">
                                                <h5 className="modal-title">Войти при помоши соц сетей</h5>
                                                <div className="sign-in-soc">
                                                    <button type="submit" className="facebook-sign-in"><img
                                                        src="img/fb-icon.svg"/>Facebook
                                                    </button>
                                                    <button type="submit" className="google-sign-in"><img
                                                        src="img/g-icon.svg"/>Google
                                                    </button>
                                                </div>
                                            </div>


                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Сравнение товаров*/}
                        {/*                <button className="btn btn-template border-none" type="button" data-toggle="collapse"*/}
                        {/*                        data-target="#collapseExample" ariaExpanded="false" aria-controls="collapseExample">/                   <svg data-v-26b4edf1="" className="svg-icon" width="25" height="25" fill="#47474B" viewBox="0 0 20 20"*/}
                        {/*                        xmlns="http://www.w3.org/2000/svg">*/}
                        {/*                       <path data-v-26b4edf1=""*/}
                        {/*                             d="M16.9525 4.53608H10.6186V3.60495C11.3385 3.34961 11.8557 2.66206 11.8557 1.85567C11.8557 0.832454 11.0232 0 10 0C8.97678 0 8.14433 0.832454 8.14433 1.85567C8.14433 2.66206 8.66148 3.34961 9.38144 3.60495V4.53608H3.04755L0 11.2188V11.3532C0 13.2529 1.54553 14.7985 3.44528 14.7985C5.34503 14.7985 6.89056 13.253 6.89056 11.3532V11.2188L4.40722 5.7732H9.38144V16.2887H6.40243L5.16532 20H14.8346L13.5975 16.2887H10.6186V5.7732H15.5928L13.1094 11.2188V11.3532C13.1094 13.2529 14.6549 14.7985 16.5547 14.7985C18.4544 14.7985 20 13.2529 20 11.3532V11.2188L16.9525 4.53608ZM10 1.23711C10.3411 1.23711 10.6186 1.5146 10.6186 1.85567C10.6186 2.19674 10.3411 2.47423 10 2.47423C9.65893 2.47423 9.38144 2.19674 9.38144 1.85567C9.38144 1.5146 9.65893 1.23711 10 1.23711ZM3.44528 13.5614C2.44235 13.5614 1.59398 12.8892 1.32581 11.9718H5.56474C5.29658 12.8892 4.44821 13.5614 3.44528 13.5614ZM5.3101 10.7346H1.58049L3.44532 6.6454L5.3101 10.7346ZM13.1183 18.7629H6.88173L7.2941 17.5258H12.7059L13.1183 18.7629ZM16.5547 6.6454L18.4195 10.7346H14.6899L16.5547 6.6454ZM16.5547 13.5614C15.5518 13.5614 14.7034 12.8892 14.4353 11.9718H18.6742C18.406 12.8892 17.5576 13.5614 16.5547 13.5614Z"*/}
                        {/*                             className="comparison-svg"></path>*/}
                        {/*                   </svg>*/}
                        {/*                 </button>*/}


                        <button type="button" className="btn btn-primary btn-template border-none"
                                data-toggle="modal"
                                data-target="#exampleModalCenter1">
                            <svg data-v-39778b28="" className="svg-icon" width="30" height="25"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path data-v-39778b28=""
                                      d="M10.577 15.962h12.82c.77 0 1.475-.45 1.795-1.154l3.846-8.975a1.807 1.807 0 0 0-.192-1.795c-.384-.512-.961-.833-1.602-.833H6.09c-.385 0-.705.128-1.026.32L3.782.578C3.654.257 3.27 0 2.885 0H.962A.986.986 0 0 0 0 .962c0 .512.449.961.962.961h1.282L8.077 15.32c-.449.578-.705 1.218-.705 1.988 0 .897.384 1.666.897 2.243-.577.577-.897 1.346-.897 2.244A3.174 3.174 0 0 0 10.577 25a3.174 3.174 0 0 0 3.205-3.205c0-.449-.128-.898-.256-1.282h6.923c-.193.384-.257.833-.257 1.282A3.174 3.174 0 0 0 23.397 25a3.174 3.174 0 0 0 3.206-3.205c0-1.795-1.41-3.205-3.142-3.205H10.578a1.286 1.286 0 0 1-1.282-1.282c0-.705.577-1.346 1.282-1.346zM27.244 5.064l-3.847 8.975H9.936L6.09 5.064h21.154zM11.859 21.731c0 .705-.577 1.282-1.282 1.282a1.286 1.286 0 0 1-1.282-1.282c0-.705.577-1.282 1.282-1.282.705 0 1.282.577 1.282 1.282zm12.82 0c0 .705-.576 1.282-1.282 1.282a1.286 1.286 0 0 1-1.282-1.282c0-.705.577-1.282 1.282-1.282.706 0 1.283.577 1.283 1.282z"></path>
                            </svg>
                        </button>

                        {/* Modal  */}
                        {/*<div className="modal fade" id="exampleModalCenter1" tabindex="-1" role="dialog"*/}
                        {/*     ariaLabelledby="exampleModalCenterTitle" ariaHidden="true">*/}
                        {/*    <div className="modal-basket modal-lg modal-dialog modal-dialog-centered"*/}
                        {/*         role="document">*/}
                        {/*        <div className="modal-content">*/}
                        {/*            <div className="modal-header">*/}
                        {/*                <h5 className="modal-title" id="exampleModalLongTitle1">Корзина</h5>*/}
                        {/*                <button type="button" className="close" dataDismiss="modal"*/}
                        {/*                        ariaLabel="Close">*/}
                        {/*                    <span ariaHidden="true">&times;</span>*/}
                        {/*                </button>*/}
                        {/*            </div>*/}
                        {/*            <div className="modal-body">*/}
                        {/*                <div className="select-product d-flex">*/}
                        {/*                    <img src="./img/catalog-img/catalog_172375.jpg"*/}
                        {/*                         className="select-product__image col-md-2" alt=""/>*/}
                        {/*                    <div className="select-product__info col-md-8">*/}
                        {/*                        <h6 className="select-product__title">Бензиновый триммер Foresta*/}
                        {/*                            FC-52 LX + Масло 2-тактное + Смазка Dnipro-M Бензиновый триммер*/}
                        {/*                            Foresta FC-52 LX + Масло 2-тактное + Смазка Dnipro-M</h6>*/}
                        {/*                        <span className="select-product__price">1566 грн.</span>*/}
                        {/*                    </div>*/}
                        {/*                    <div className="select-product__count col-md-2 d-flex">*/}
                        {/*                        <button className="dec">-</button>*/}
                        {/*                        <input type="text" className="select-product__input-count"*/}
                        {/*                               value={1}/>*/}
                        {/*                        <button className="inc">+</button>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*                <div className="select-product d-flex">*/}
                        {/*                    <img src="./img/catalog-img/catalog_172375.jpg"*/}
                        {/*                         className="select-product__image col-md-2" alt=""/>*/}
                        {/*                    <div className="select-product__info col-md-8">*/}
                        {/*                        <h6 className="select-product__title">Бензиновый триммер Foresta*/}
                        {/*                            FC-52 LX + Масло 2-тактное + Смазка Dnipro-M Бензиновый триммер*/}
                        {/*                            Foresta FC-52 LX + Масло 2-тактное + Смазка Dnipro-M</h6>*/}
                        {/*                        <span className="select-product__price">1566 грн.</span>*/}
                        {/*                    </div>*/}
                        {/*                    <div className="select-product__count col-md-2 d-flex">*/}
                        {/*                        <button className="dec">-</button>*/}
                        {/*                        <input type="text" className="select-product__input-count"*/}
                        {/*                               value={1}/>*/}
                        {/*                        <button className="inc">+</button>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*                <div className="select-product d-flex">*/}
                        {/*                    <img src="./img/catalog-img/catalog_172375.jpg"*/}
                        {/*                         className="select-product__image col-md-2" alt=""/>*/}
                        {/*                    <div className="select-product__info col-md-8">*/}
                        {/*                        <h6 className="select-product__title">Бензиновый триммер Foresta*/}
                        {/*                            FC-52 LX + Масло 2-тактное + Смазка Dnipro-M Бензиновый триммер*/}
                        {/*                            Foresta FC-52 LX + Масло 2-тактное + Смазка Dnipro-M</h6>*/}
                        {/*                        <span className="select-product__price">1566 грн.</span>*/}
                        {/*                    </div>*/}
                        {/*                    <div className="select-product__count col-md-2 d-flex">*/}
                        {/*                        <button className="dec">-</button>*/}
                        {/*                        <input type="text" className="select-product__input-count"*/}
                        {/*                               value={1}/>*/}
                        {/*                        <button className="inc">+</button>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*                <div className="select-product d-flex">*/}
                        {/*                    <img src="./img/catalog-img/catalog_172375.jpg"*/}
                        {/*                         className="select-product__image col-md-2" alt=""/>*/}
                        {/*                    <div className="select-product__info col-md-8">*/}
                        {/*                        <h6 className="select-product__title">Бензиновый триммер Foresta а*/}
                        {/*                            Dnipro-M Бензиновый триммер Foresta FC-52 LX + Масло 2-тактное +*/}
                        {/*                            Смазка Dnipro-M</h6>*/}
                        {/*                        <span className="select-product__price">1566 грн.</span>*/}
                        {/*                    </div>*/}
                        {/*                    <div className="select-product__count col-md-2 d-flex">*/}
                        {/*                        <button className="dec">-</button>*/}
                        {/*                        <input type="text" className="select-product__input-count"*/}
                        {/*                               value='1'/>*/}
                        {/*                        <button className="inc">+</button>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*                <div className="select-product d-flex">*/}
                        {/*                    <img src="./img/catalog-img/catalog_172375.jpg"*/}
                        {/*                         className="select-product__image col-md-2" alt=""/>*/}
                        {/*                    <div className="select-product__info col-md-8">*/}
                        {/*                        <h6 className="select-product__title">Бензиновый триммер Foresta*/}
                        {/*                            FC-52 LX + Масло 2-тактное + Смазка Dnipro-M Бензиновый триммер*/}
                        {/*                            Foresta FC-52 LX + Масло 2-тактное + Смазка Dnipro-M</h6>*/}
                        {/*                        <span className="select-product__price">1566 грн.</span>*/}
                        {/*                    </div>*/}
                        {/*                    <div className="select-product__count col-md-2 d-flex">*/}
                        {/*                        <button className="dec">-</button>*/}
                        {/*                        <input type="text" className="select-product__input-count"*/}
                        {/*                               value={1}/>*/}
                        {/*                        <button className="inc">+</button>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*            <div className="modal-footer">*/}
                        {/*                <button type="button" className="btn btn-secondary"*/}
                        {/*                        dataDismiss="modal">Close*/}
                        {/*                </button>*/}
                        {/*                <button type="button" className="btn btn-primary">Save changes</button>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
            <div className="collapse" id="collapseExample">
                <div className="card card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                    Nihil anim
                    keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </div>
            </div>
        </header>
    )
}

export default Header