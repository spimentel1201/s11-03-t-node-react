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
      <span className="font-bold">{title}</span>
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className="input input-bordered bg-slate-100 border-none"
      value={value}
      onChange={(e) => changeValue(e.target.value)}
    />
  </div>
)

export default InputAuth
