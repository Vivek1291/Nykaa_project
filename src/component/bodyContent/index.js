import React, { Component } from 'react';
import {Data} from '../../staticData/data.js';
import '../../css/body-content/body-content.scss';
import CustomCarousel from '../customCarousel/index.js';

class BodyContent extends Component {
    render() {
        return (
            <div className="body-content">
                <div className="banner-container"></div>
                <div className="shop-by-category-container section-container">
                    <h2 className="title center">Shop By Category</h2>
                    <div className="category-image-container flex-container flex-horizontal-align">
                        {
                            Data.shop_by_category.map((item, index)=> {
                                return <div className={("category-image center")} key={index}>
                                            <span className=' square'></span>
                                            <img src={item} alt="" />
                                        </div>
                            })
                        }
                    </div>
                </div>
                <div className="editor-picks-container section-container">
                    <CustomCarousel images={Data.editor_picks}/>
                </div>
                <div className="shop-by-offer-container section-container">
                    <h2 className="title center">Shop By Offer</h2>
                    <div className="offer-image-container flex-container flex-horizontal-align">
                        {
                            Data.content_tile.map((item, index)=> {
                                return <div className="offer-image center"  key={index}>
                                            <span className=' square'></span>
                                            <img src={item} alt="" />
                                        </div>
                            })
                        }
                    </div>
                </div>
                <div className="content-tiles-container section-container">
                <h2 className="title center">Content Tiles</h2>
                    <div className="tile-image-container">
                        {
                            Data.shop_by_offer.map((item, index)=> {
                                return <div className="tile-image center"  key={index}>
                                            <span className=' square'></span>
                                            <img src={item} alt="" />
                                        </div>
                            })
                        }
                    </div>
                </div>
                <div className="shop-by-brands-container section-container">
                    <h2 className="title center">Shop By Brand</h2>
                    <div className="brand-image-container flex-container">
                        {
                            [...Array(12)].map((item, index)=> {
                                return <div className="brand-image center" key={index}>
                                            <img src={Data.shop_by_brand} alt="" />
                                        </div>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default BodyContent;