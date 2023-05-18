import React, {FC} from 'react'


import styles from './Layout.module.scss'
import ResponsiveAppBar from "../components/Header/Header";
import LabelBottomNavigation from "../components/BottomNavigation/Navigation";

interface ILayout {
    children: React.ReactNode,
}

const Layout: FC<ILayout> = ({children}) => {
    return (
        <div className={styles.layout}>
            <ResponsiveAppBar/>
            <div className={styles.center}>{children}</div>
            <LabelBottomNavigation/>
        </div>
    )
}

export default Layout
