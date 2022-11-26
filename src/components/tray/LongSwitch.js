import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
//ripped entirely from https://v4.mui.com/components/switches/#CustomizedSwitches.js
const LongSwitch = withStyles((theme) => ({
    root: {
      width: '30%',
      height: 'auto',
      padding: 0,
      display: "flex"
    },
    switchBase: {
      padding: 2,
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.light,
      borderColor: theme.palette.primary.main,
      "&$checked": {
        transform: "translateX(200%)",
        color: theme.palette.secondary.main,
        "& + $track": {
          opacity: 1,
          backgroundColor: theme.palette.secondary.light,
          borderColor: theme.palette.secondary.main
        }
      }
    },
    thumb: {
        width: '100%',
        height: '100%',
        transform: "translateX(0%)"
    },
    track: {
      border: `1px solid ${theme.palette.primary.main}`,
      borderRadius: 1000 / 2,
      opacity: 1,
      backgroundColor: theme.palette.primary.light,
      width: '100%'
    },
    checked: {}
  }))(Switch)


export default LongSwitch
  