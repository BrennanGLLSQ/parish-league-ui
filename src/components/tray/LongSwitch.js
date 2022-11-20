import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";

const LongSwitch = withStyles((theme) => ({
    root: {
      width: 36,
      height: 16,
      padding: 0,
      display: "flex"
    },
    switchBase: {
      padding: 2,
      color: theme.palette.grey[500],
      "&$checked": {
        transform: "translateX(42px)",
        color: theme.palette.common.white,
        "& + $track": {
          opacity: 1,
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main
        }
      }
    },
    thumb: {
        width: 24,
        height: 24
    },
    track: {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 36 / 2,
      opacity: 1,
      backgroundColor: theme.palette.common.white
    },
    checked: {}
  }))(Switch)


export default LongSwitch
  