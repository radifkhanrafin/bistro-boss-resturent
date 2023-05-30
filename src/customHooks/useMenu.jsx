import { useEffect, useState } from "react";


const useMenu = () => {
    const [menu, SetMenu] = useState([])
    const [loading, SetLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => {
                SetMenu(data)
                SetLoading(false)
            })

    }, []);
    return [menu, loading];
};

export default useMenu;