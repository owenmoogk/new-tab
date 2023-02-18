export default function AddModal(props) {


  function handleModalKeyDown(event){
    if (event.key === 'Enter' || event.key === "NumpadEnter"){
      props.handleSave()
    }
  }

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <h3>Add a new link</h3>
        <br />
        <input placeholder='URL' id='urlInput' onKeyDown={(e) => handleModalKeyDown(e)}></input>
        <br /><br />
        <div id='buttonContainer'>
          <button id='saveButton' onClick={() => props.handleSave()}>Save</button>
          <button id='cancelButton' onClick={() => props.setShowModal(false)}>Cancel</button>
        </div>
      </div>
    </div>
  )
}