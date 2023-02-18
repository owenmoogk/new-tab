export default function ShortcutTile(props){

  let url = props.url;

  if (props.override)
  {
    return(
      <div className="shortcut" onClick={() => {props.showModal(true); setTimeout(() => document.getElementById('urlInput').focus(), 10)
    }}>
        <img src={"/new-tab/newButton.png"}></img>
        <br/>
      </div>
    )
  }

  return(
    <a href={!props.delete?"http://"+url:null}>
      <div className="shortcut">
        <img src={"https://sparkling-green-bee.faviconkit.com/"+url+"/256"}></img>
        <br/>
        {props.delete ?
          <img src={"new-tab/modifyButton.jpg"} onClick={() => props.deleteItem(props.index-1)}/>
          :<p className='number'>{props.index}</p>
        }
        
      </div>

    </a>
  )

}