import React, { useRef, useEffect } from 'react'
interface Props {
  title: string
  type: string
  placeholder: string
  value: string
  error: string
  changeValue: (value: string) => void
}

const InputAuth = ({
  title,
  type,
  placeholder,
  value,
  error,
  changeValue,
}: Props) => {
  const inputRef = useRef(null)

  useEffect(() => {
    if (inputRef.current && error) {
      (inputRef.current as HTMLInputElement).focus()
    }
  }, [error])
  return (
    <div className={`form-control ${error ? 'error' : ''}`}>
      <label className="label">
        <span className="font-bold text-base">{title}</span>
      </label>
      <input
        ref={inputRef}
        type={type}
        placeholder={placeholder}
        className={`input input-bordered rounded-md ${
          error ? 'bg-white border-error' : 'bg-slate-100 border-none'
        } font-base`}
        value={value}
        onChange={(e) => changeValue(e.target.value)}
        autoComplete="off"
      />
      {error && <div className="text-error text-sm">{error}</div>}
    </div>
  )
}
export default InputAuth
