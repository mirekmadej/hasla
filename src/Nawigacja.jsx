import { Link,Outlet } from "react-router-dom";
function Nawigacja()
{
    return(
        <>
            <nav>
                <button><Link to="/">Hasło</Link> </button>
                <button><Link to='konf'>Konfiguracja</Link></button>
            </nav>
            <Outlet />
        </>
    );
}
export default Nawigacja;