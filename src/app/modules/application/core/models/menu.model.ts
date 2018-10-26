export interface MenuItem {
    name: string;
    route: string;
    items: MenuItem[];
}

type Menu = MenuItem;
