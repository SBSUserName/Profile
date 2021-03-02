import React, {useState, useEffect} from 'react'
import imageExists from "image-exists"
import Default from "../../assets/images/default.png"
import "./profile.scss"

const Profile = ({profile}) => {
    const [photo, setPhoto] = useState()

    useEffect(() => {
        checkForGoogle()
    })

    const checkForGoogle = () => {
        for(let i=0; i<profile.photos.length; i++) {
            if(profile.photos[i].source === "google") {
                imageExists(profile.photos[i].url, image => {
                    if(image) {
                        setPhoto(profile.photos[i].url)
                    } else {
                        checkForLinkedIn()
                    }
                })
            }
        }
        checkForLinkedIn()
    }

    const checkForLinkedIn = () => {
        for(let i=0; i<profile.photos.length; i++) {
            if(profile.photos[i].source === "linkedin") {
                imageExists(profile.photos[i].url, image => {
                    if(image) {
                        setPhoto(profile.photos[i].url)
                    } else {
                        checkForFacebook()
                    }
                })
            }
        }
        checkForFacebook()
    }

    const checkForFacebook = () => {
        for(let i=0; i<profile.photos.length; i++) {
            if(profile.photos[i].source === "facebook") {
                imageExists(profile.photos[i].url, image => {
                    if(image) {
                        setPhoto(profile.photos[i].url)
                    } else {
                        checkForTwitter()
                    }
                })
            }
        }
        checkForTwitter()
    }

    const checkForTwitter = () => {
        for(let i=0; i<profile.photos.length; i++) {
            if(profile.photos[i].source === "twitter") {
                imageExists(profile.photos[i].url, image => {
                    if(image) {
                        setPhoto(profile.photos[i].url)
                    } else {
                        checkForOffice()
                    }
                })
            }
        }
        checkForOffice()
    }

    const checkForOffice = () => {
        for(let i=0; i<profile.photos.length; i++) {
            if(profile.photos[i].source === "twitter") {
                imageExists(profile.photos[i].url, image => {
                    if(image) {
                        setPhoto(profile.photos[i].url)
                    } else {
                        setPhoto(Default)
                    }
                })
            }
        }
    }

    return (
        <div className="profile">
            <div className="image-div">
                <img src={photo} className="img-fluid" alt="profile" />
            </div>

            <h5>{profile.firstName} {profile.lastName}</h5>
        </div>
    )
}

export default Profile
