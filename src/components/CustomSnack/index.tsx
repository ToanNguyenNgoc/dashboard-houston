import { Snackbar, Alert } from '@mui/material'


interface CustomSnackProps {
  open?: boolean,
  onClose?: () => void,
  message?: string,
  severity?: "error" | "info" | "success" | "warning"
}

export function CustomSnack(props: CustomSnackProps) {
  const { open, onClose, message, severity } = props
  return (
    <Snackbar
      open={open}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      autoHideDuration={4000}
    >
      <Alert onClose={onClose} severity={severity ?? "info"} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}