import './style.css'

export default function App(){
  return (
    <>
    <form className='new-item-form' action="">
      <div className="form-row">
        <label htmlFor="">New item</label>
      </div>
      <button className='btn'>Add</button>
    </form>
    <h1>Todo List</h1>
    <ul className="list">
      <li>
        <label htmlFor="">
          <input type="checkbox" />
          item 1
        </label>
        <button className='btn btn-danger'>Delete</button>
      </li>
      <li>
        <label htmlFor="">
          <input type="checkbox" />
          item 1
        </label>
        <button className='btn btn-danger'>Delete</button>
      </li>
      <li>
        <label htmlFor="">
          <input type="checkbox" />
          item 1
        </label>
        <button className='btn btn-danger'>Delete</button>
      </li>
    </ul>
    </>
  )
}