import Modal from '../components/Modal'
import BackgroundColor from './BackgroundColor';
import PrimaryColor from './PrimaryColor';
import {primaryColors, backgroundColors} from './data';
import './theme.css'

const Theme = () => {
  return (
    <Modal className="theme_modal">
        <h3>Customize Your Theme</h3>
        <small>Change the primary color to your preference.</small>
        <div className="theme_primary-wrapper">
            <h5>Primary Color</h5>
            <div className="theme_primary-colors">
                {primaryColors.map(pColor => <PrimaryColor key ={pColor.className} className={pColor.className} />)}
            </div>
        </div>
        <div className="theme_background-wrapper">
            <h5>Background Color</h5>
            <div className="theme_background-colors">
                {
                    backgroundColors.map(bColor => <BackgroundColor key={bColor.className} className={bColor.className} />)
                }
            </div>
        </div>
    </Modal>
  )
}

export default Theme