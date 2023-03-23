import { LoadingButton } from "@mui/lab";
import React from "react";
import './load-button.scss'

interface LoadButtonProps {
  title?: string,
  size?: "small" | "large" | "medium",
  color?: "error" | "inherit" | "primary" | "secondary" | "success" | "info" | "warning",
  variant?: "text" | "outlined" | "contained",
  icon?: React.ReactNode,
  load?: boolean,
  type?: "button" | "submit" | "reset",
  onClick?: () => void,
  style?: React.CSSProperties
}

export function LoadButton(props: LoadButtonProps) {
  const { title, size, color, variant, icon, load, type, onClick, style } = props
  const click = () => onClick && onClick()
  return (
    <LoadingButton
      onClick={click}
      loading={load ?? false}
      color={color}
      variant={variant ?? "contained"}
      size={size}
      startIcon={(!load && icon) ? icon : <></>}
      type={type ?? "button"}
      style={style}
    >
      {title}
    </LoadingButton>
  )
}