import { FiArrowLeft } from "react-icons/fi"
import { useHistory } from "react-router-dom";

import '../Styles/Components/sidebar.css'


export default function Side (){
    const { goBack } = useHistory()
    return(
        <aside className="app-sidebar">
            <footer>
                <button type="button" onClick={goBack}>
                    <FiArrowLeft size={24} color="#FFF" />
                </button>
            </footer>
        </aside>
    )
    
}