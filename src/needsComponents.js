import Vue from 'vue'
import { Button} from 'mint-ui'
import { Tabbar,TabItem } from 'mint-ui';
import { Header } from 'mint-ui';
import { Field } from 'mint-ui';
import { Navbar} from 'mint-ui';
import { Cell } from 'mint-ui';
import { TabContainer, TabContainerItem } from 'mint-ui';
export function requireComponents(){
	Vue.component(Button.name, Button);
	Vue.component(Tabbar.name, Tabbar);
	Vue.component(TabItem.name, TabItem);
	Vue.component(Header.name, Header);
	Vue.component(Field.name, Field);
	Vue.component(Navbar.name, Navbar);
	Vue.component(Cell.name, Cell);
	Vue.component(TabContainer.name, TabContainer);
	Vue.component(TabContainerItem.name, TabContainerItem);
}

