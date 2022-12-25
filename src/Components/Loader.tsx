import { Circles } from 'react-loader-spinner'

function Loader() {
    return (
        <Circles
            height="80"
            width="80"
            color="#64ffda"
            ariaLabel="circles-loading"
            wrapperClass="h-screen w-screen flex justify-center items-center"
            visible={true}
        />
    )
}

export default Loader