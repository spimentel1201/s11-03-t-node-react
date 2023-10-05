const Navbar = () => (
  <div className="navbar bg-base-100">
    <div className="flex-none gap-2">
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="/logo.png" />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-xl">Veterinaria</a>
    </div>
    <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box mr-8">
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Servicios</a>
      </li>
      <li>
        <a>Adopta</a>
      </li>
      <li>
        <a>Nosotros</a>
      </li>
      <li>
        <a>Contacto</a>
      </li>
    </ul>
  </div>
)

export default Navbar
