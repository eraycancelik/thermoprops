import CalculateButton from './CalculateButton'
import CleanButton from './CleanButton'
import './TableButtons.css'

const TableButtons = () => {
  return (
    <div className='buttonContainer'>
        <CalculateButton />
        <CleanButton />
    </div>
  )
}

export default TableButtons