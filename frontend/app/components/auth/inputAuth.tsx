interface Props {
  title: string
  type: string
  placeholder: string
  value: string
  changeValue: (value: string) => void
}

const InputAuth = ({ title, type, placeholder, value, changeValue }: Props) => (
  <div className="form-control">
    <label className="label">
      <span className="font-bold text-base">{title}</span>
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className="input input-bordered rounded-md bg-slate-100 border-none font-base"
      value={value}
      onChange={(e) => changeValue(e.target.value)}
    />
    <div className="text-error text-sm">Aqui van los errores</div>
  </div>
)

export default InputAuth
