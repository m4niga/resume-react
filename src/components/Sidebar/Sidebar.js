import React from 'react'
import * as s from './Sidebar.style'
import { menuData } from '../../utils/menuData'
import { Link } from 'react-router-dom'
import { useRecoilState} from 'recoil';
import { menuSelectedState } from '../../Recoil/Atoms';

const Sidebar = () => {

    const [menuSelected, setMenuSelected] = useRecoilState(menuSelectedState);
    const last = menuData.length - 1;
    const handleSelectMenu = (index) => {
        setMenuSelected(index)
    }

    return (
        <s.SidebarContainer>
            <s.MenuItemsContainer>
                {
                    menuData.map((item,index) => (
                        
                      <Link to={item.to} key={index} 
                          onClick={ () => {handleSelectMenu(index)}  }
                          >
                        <s.MenuItem isSelected={menuSelected} index={index} last={last}> 
                        <s.Icon>
                            {item.icon}
                        </s.Icon>
                            {item.name}
                        </s.MenuItem>
                        </Link>
                    ))
                }
            </s.MenuItemsContainer>
        </s.SidebarContainer>
    )
}

export default Sidebar
