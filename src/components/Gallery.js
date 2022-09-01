import React, { useState } from 'react';
import Modal from './Modal/Modal';
import myMelody from './gallery-images/myMelo.jpg';
import Cinnamonroll from './gallery-images/Cinnamoroll.jpg';
import PomPomPurin from './gallery-images/PomPomPurin.jpg';
import Flat from './gallery-images/flatSanrio.jpg';
import Keroppi from './gallery-images/keroppi.jpg';
import Kuromi from './gallery-images/kuromi-sanrio.jpg';
import MySweetPiano from './gallery-images/my-sweet-piano-sanrio.jpg';
import Space from './gallery-images/space-chill.jpg';

const Gallery = () => {

    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [modalTitle, setModalTitle] = useState('');
    const [modalCollection, setModalCollection] = useState('');
    const [modalYear, setModalyear] = useState('');

    const OpenModal = (e) => {
        setShowModal(prev => !prev)
        setModalContent(e.currentTarget.dataset.image)
        setModalTitle(e.currentTarget.dataset.title)
        setModalCollection(e.currentTarget.dataset.collection)
        setModalyear(e.currentTarget.dataset.year)
    }


    return (
        <>
        <Modal showModal={showModal} setShowModal={setShowModal} openModal={OpenModal} image={modalContent} title={modalTitle} collection={modalCollection} year={modalYear}/>
        <div className="gallery noselect">
            <div className="grid-container">

                <div onClick={OpenModal} data-image={myMelody} data-title="My Melody" data-collection="Sanrio Series" data-year="2021" className="image1">
                    <p>My Melody<br/>Sanrio series<br/>2021</p>
                </div>
                

                <div onClick={OpenModal} data-image={Cinnamonroll} data-title="Cinnamoroll" data-collection="Sanrio Series" data-year="2021" className="image2">
                    <p>Cinnamoroll<br/>Sanrio series<br/>2021</p>
                </div>

                <div onClick={OpenModal} data-image={PomPomPurin} data-title="Pompompurin" data-collection="Sanrio Series" data-year="2021" className="image3">
                    <p>Pompompurin<br/>Sanrio series<br/>2021</p>
                </div>

                <div onClick={OpenModal} data-image={Flat}  data-title="Flat" data-collection="Sanrio Series" data-year="2021" className="image4">
                    <p>Flat<br/>Sanrio series<br/>2021</p>
                </div>

                <div onClick={OpenModal} data-image={Kuromi}  data-title="Kuromi" data-collection="Sanrio Series" data-year="2021" className="image5">
                    <p>Kuromi<br/>Sanrio series<br/>2021</p>
                </div>

                <div onClick={OpenModal} data-image={Keroppi} data-title="Keroppi" data-collection="Sanrio Series" data-year="2021" className="image6">
                    <p>Keroppi<br/>Sanrio series<br/>2021</p>
                </div>

                <div onClick={OpenModal} data-image={MySweetPiano} data-title="MySweetPiano" data-collection="Sanrio Series" data-year="2021" className="image7">
                    <p style={{fontSize:'150%'}}>My Sweet Piano<br/>Sanrio series<br/>2021</p>
                </div>

                <div onClick={OpenModal} data-image={Space} data-title="Space" data-collection="Emoji" data-year="2021" className="image8">
                    <p>Space chill<br/><br/>2021</p>
                </div>

                <div onClick={OpenModal} data-image={myMelody} className="image9">
                    <p>My Melody<br/>2021</p>
                </div>

                <div onClick={OpenModal} data-image={myMelody} className="image10">
                    <p>My Melody<br/>2021</p>
                </div>

            </div>
        </div>
        </>
    )
}

export default Gallery
