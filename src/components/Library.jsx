import React from 'react'
import { useSelector } from 'react-redux'
import { AiOutlinePlayCircle } from 'react-icons/ai'

function Library() {
    const data = useSelector(state => state.library.stack)
    const songs = data.map((album, index) => {
        if(album.id){
            return (
                <div className="col-lg-4 col-md-6 col-12 album-card" key={album.id}>
                    <div className="row g-0">
                        <div className="col-3">
                            <img height="100%" width="100%" src={album.image} alt="" />
                        </div>
                        <div className="col-9 title" >
                            <div className="row">
                                <div className="col-8"><h5>{album.name}</h5></div>
                                <div className="col-2 mt-2 mr-2 playBtn"><AiOutlinePlayCircle size={30} />
                                </div>
                            </div>
    
                        </div>
    
                    </div>
                </div>
    
            )
        }
        

    })
    return (
        <div className="container">
            <div className="row">
                <h2>Do you want to revist what you've listened?</h2>
                {songs}
            </div>



        </div>
    );

}

export default Library