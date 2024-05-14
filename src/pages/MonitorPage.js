import axios from 'axios';
import { useEffect, useState } from 'react';
import CPUChart from '../components/CPUChart';


function MonitorPage() {

    const [data, setData] = useState({ cpu: [], ram: [], network: [] })

    const getStats = async () => {
        await axios.get('http://95.84.137.217:3001/get-stats').then(res => {
            console.log(res.data)
            setData(res.data);
        }).catch(e => {
            console.error(e);
        })
    }

    useEffect(() => {
        getStats();
    }, [])

    return (
        <div className="App">
            <CPUChart entryData={data["cpu"]} />
        </div>
    );
}

export default MonitorPage;