import { useEffect, useState } from 'react';
import './App.css';
import ShortcutTile from './Shortcut';
import AddModal from './AddModal';

function App() {

  function getData(){
    if (localStorage.getItem('data')){
      return JSON.parse(localStorage.getItem('data'))
    }
    return []
  }

  const [splash, setSplash] = useState("")
  const [inputValue, setInputValue] = useState("")
  const [data, setData] = useState(getData())
  const [showModal, setShowModal] = useState(false)
  const [modifyMode, setModifyMode] = useState(false)

  function loadSplash(){
		fetch('https://owenmoogk.github.io/assets/splashes.json')
		.then(response => response.json())
		.then(json => {
			let index = getRandomInt(0, json.length-1)
			let item = json[index]
      setSplash(item)
  	});
	}

  function getRandomInt(min, max) {
		min = Math.ceil(min)
		max = Math.floor(max)
		return (Math.floor(Math.random() * (max - min + 1)) + min)
	}

  useEffect(() => {
    loadSplash()
    document.getElementById('searchBar').focus()
  }, []);

  function handleKeyDown(event){
    if (event.key === 'Enter' || event.key === "NumpadEnter"){

      // https://www.regextester.com/93652
      let regex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
      let url = inputValue

      if (regex.test(url)) {

        // https://stackoverflow.com/questions/12214206/location-href-to-a-link-without-http
        // don't know regex :/
        if (!url.match(/^http?:\/\//i) || !url.match(/^https?:\/\//i)) {
          url = 'http://' + url;
        }

        window.location.replace(url)
        return
      }

      let search = encodeURIComponent(url)
      window.location.href = "https://google.com/search?q="+search;
    }
  }

  window.onclick = function(event) {
    if (event.target == document.getElementById("myModal") && showModal) {
      setShowModal(false)
    }
  }

  function handleSave(){
    let newData = [...data]
    if (document.getElementById('urlInput').value){
      newData.push(document.getElementById('urlInput').value)
      setData(newData)
      localStorage.setItem('data', JSON.stringify(newData))
    }
    setShowModal(false)
    document.getElementById('urlInput').value = ""
  }
  
  function deleteItem(index){
    let newData = [...data]
    newData.splice(index, 1)
    setData(newData)
    localStorage.setItem('data', JSON.stringify(newData))
  }

  return (
    <div className="App">

      {/* modify button */}
      <span id='modifyButton' onClick={() => setModifyMode(!modifyMode)}>
        <img src='/new-tab/modifyButton.jpg' style={{width: "100%", height: "100%"}}></img>
      </span>

      {showModal ?
        <AddModal handleSave={handleSave} setShowModal={setShowModal}/>
      : null
      }

      <h1>{splash}</h1>
      <div>
        <input id="searchBar" placeholder='Search Google' onKeyDown={handleKeyDown} value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      </div>
      <div id='shortcuts'>
        {data ? 
          data.map((url, key) => <ShortcutTile url={url} index={key+1} key={key} delete={modifyMode} deleteItem={deleteItem}/>)
          : null
        }
        <ShortcutTile override showModal={setShowModal}/>
      </div>
    </div>
  );
}

export default App;
