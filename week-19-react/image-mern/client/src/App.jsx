import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [file, setFile] = useState()
  const [img, setImage] = useState()
  const handleUpload = (e) => {
    const formdata = new FormData()
    formdata.append('file', file)
    axios.post('http://localhost:3000/upload', formdata)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
  useEffect(() => {
    axios.get('http://localhost:3000/getImage')
      .then((res) => {
        console.log(res)
        setImage(res.data[0].image)
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <div>
      <input type="file" name="" id="" onChange={e => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
      <br />
      <img src={`http://localhost:3000/images/${img}`} alt="" />
    </div>
  )
}

export default App
