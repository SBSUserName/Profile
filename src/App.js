import Profile from "./components/profile/Profile"
import {useState, useEffect} from "react"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.scss"

function App() {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    axios.get('https://gist.githubusercontent.com/roxcity/300697399059a6f54a983d1e9af5f459/raw/d81a2c42f8de6ca439f3cd3a5b0e809fd34f31bc/users.json')
      .then(res => {
        setProfiles(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  })

  return (
    <div className="profile-photo-app">
      <div className="container">
        <div className="row">
          {profiles.map(profile => {
            return (
              <div className="col-4 profile-box">
                <Profile profile={profile} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
