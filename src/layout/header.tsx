import { Link as GatsbyLink } from 'gatsby'
import React, { FC } from 'react'
import Headroom from 'react-headroom'

import { makeStyles, Theme } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'

import WbSunnyIcon from '@material-ui/icons/WbSunny'
import Brightness3Icon from '@material-ui/icons/Brightness3'
import GitHubIcon from '@material-ui/icons/GitHub'

import useSiteMetadata from '../hooks/useSiteMetadata'
import Search from '../components/search'

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.primary.main
        : theme.palette.background.paper,
    color: theme.palette.common.white,
  },
  toolbar: {},
  title: {
    flexGrow: 1,
    fontFamily: 'Fira Code',
  },
  link: {
    textDecoration: 'none',
  },
}))

export interface HeaderProps {
  siteTitle?: string
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

const Header: FC<HeaderProps> = ({ siteTitle = '', onToggleTheme, theme }) => {
  const classes = useStyles()
  const { social } = useSiteMetadata()

  return (
    <Headroom>
      <AppBar component="header" position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.title}>
            <Link
              to="/"
              component={GatsbyLink}
              color="inherit"
              className={classes.link}
            >
              {siteTitle}
            </Link>
          </Typography>
          <Search />
          <IconButton color="inherit" onClick={onToggleTheme}>
            {theme === 'light' ? <Brightness3Icon /> : <WbSunnyIcon />}
          </IconButton>
          <IconButton color="inherit" href={social.github} target="_blank">
            <GitHubIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Headroom>
  )
}

export default Header
