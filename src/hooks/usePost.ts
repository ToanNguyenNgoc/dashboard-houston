import { useState } from "react"

interface HandleType {
  handleFn: <Data>(data?: Data) => Promise<any>,
  callback?: () => void,
  messageSuccess?: string,
  messageError?: string,
  messageColor?: "error" | "info" | "success" | "warning"
}
interface ResultType {
  load: boolean,
  response: any,
  error: any,
  open: boolean,
  message: string,
  messageColor: "error" | "info" | "success" | "warning"
}

export function usePost() {
  const initial: ResultType = {
    load: false,
    response: null,
    error: null,
    open: false,
    message: '',
    messageColor: "info"
  }
  const [result, setResult] = useState<ResultType>(initial)
  const handle = async ({
    handleFn,
    callback,
    messageSuccess,
    messageError,
    messageColor
  }: HandleType) => {
    setResult({ ...result, load: true })
    try {
      const res = await handleFn()
      setResult({
        ...result,
        response: res,
        load: false,
        message: messageSuccess ?? 'Update success !',
        messageColor: messageColor ?? "success",
        open: true
      })
      if (callback) { callback() }
    } catch (error) {
      setResult({
        ...result,
        load: false,
        error: error,
        message: messageError ?? error?.message,
        messageColor: "error",
        open: true
      })
    }
  }
  const onCloseNoti = () => setResult(initial)
  return {
    handle,
    onCloseNoti,
    result
  }
}