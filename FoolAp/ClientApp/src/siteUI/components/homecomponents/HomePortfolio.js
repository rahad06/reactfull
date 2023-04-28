import React from 'react';
import GridNav from "../portfolio/GridNav";

function HomePortfolio(props) {
    return (
        
        <div className="d-grid-port">
            <div className="grid-nav">
                <GridNav/>
            </div>
            <div className="proj-all proj-1 sm-port">
                <img src="https://avatars.mds.yandex.net/i?id=55b7282ad8ae3dbe774af233a65bb955-5383195-images-thumbs&n=13" alt=""/>
            </div>
            <div className="proj-all proj-2 sm-port">
                <img src="https://avatars.mds.yandex.net/i?id=18f15b8cc7f121148a85b1eca6f25543-5086932-images-thumbs&n=13" alt=""/>
            </div>
            <div className="proj-all proj-3">
                <img src="https://avatars.mds.yandex.net/i?id=8ac7af69bae6bb8cf6226451c73a91f61800025d-6948927-images-thumbs&n=13" alt=""/>
            </div>
            <div className="proj-all proj-4 sm-port">
                <img src="https://avatars.mds.yandex.net/i?id=763dba2bf098f0d539d56797b9d67e4a2c96d3ea-4801093-images-thumbs&n=13" alt=""/>    
            </div>
            <div className="proj-all proj-5 sm-port">
                <img src="https://avatars.mds.yandex.net/i?id=8610bdbf838292a44564b83937e9c44b1c609eb5-5870029-images-thumbs&n=13" alt=""/>
            </div>
            <div className="proj-all proj-6">
                <img src="https://avatars.mds.yandex.net/i?id=8c87da7567c931a4fa2dac2eb6a270ee-5869526-images-thumbs&n=13" alt=""/>
            </div>
            <div className="proj-all proj-7 sm-port">
                <img src="https://avatars.mds.yandex.net/i?id=e4ca45c1d73aef0caa62087c65e6adbaa02531cf-9072018-images-thumbs&n=13" alt=""/>
            </div>
        </div>
    );
}

export default HomePortfolio;
