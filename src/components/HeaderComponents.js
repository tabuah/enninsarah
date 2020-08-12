import React, {Component} from 'react';
import hulk_1  from "../image/img/hulk_1.jpg";
import venom_1 from "../image/img/venom_1.jpg";
import venom_2 from "../image/img/venom_2.jpg";


class HeaderComponents extends Component {
    render() {
        return(
      <div>
      <header className="header">
      <div className="container">
        <h1 className="title">Mavel's Fearless</h1>
        <p className="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae
          molestias earum eveniet.
        </p>
        <div className="search-bar">
          <input type="search" placeholder="Search" />
        </div>

        <div className="sample-wallpaper">
        <article className="wallpaper">
        <img src={venom_1} alt="Wallpaper"  />
          </article>

        <article className="wallpaper">
        <img src={hulk_1} alt="Wallpaper" />
        </article>

        <article className="wallpaper">
        <img src={venom_2} alt="Wallpaper" />
        </article>
        </div>
    </div>
    </header>
    </div>
        );  
    }
}
export default HeaderComponents