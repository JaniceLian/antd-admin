import React from 'react'
import { classnames, config } from 'utils'
import styles from './Footer.less'

const Footer = ({darkTheme}) => (<div className={classnames(styles.footer, { [styles.light]: !darkTheme })}>
  {config.footerText}
</div>)

export default Footer
