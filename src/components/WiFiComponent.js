import axios from 'axios';
import { useState } from 'react';

function processArpScanText(text) {
    // Find the start and end indices of the relevant portion
    const startIndex = text.indexOf('(https://github.com/royhills/arp-scan)') + '(https://github.com/royhills/arp-scan)'.length;
    const endIndex = text.indexOf('packets received by filter');

    // console.log(text.substring(startIndex, endIndex));

    // Extract the relevant portion of the text
    const relevantText = text.substring(startIndex, endIndex).trim();

    console.log(relevantText);

    // Split the text into lines
    const lines = relevantText.split('\n');

    // Initialize an array to hold the processed data
    const processedData = [];
    console.log(lines)
    // Process each line to extract IP, MAC, and Title
    lines.forEach(line => {
        const parts = line.trim().split('\t');
        if (parts.length >= 3) {
            const ip = parts[0];
            const mac = parts[1];
            const title = parts.slice(2).join(' ');
            processedData.push([ip, mac, title]);
        }
    });

    return processedData;
}

function WiFiComponent() {

    async function getAllHosts() {
        await axios.get('http://95.84.137.217:3001/all-hosts').then((res) => {
            setHosts(processArpScanText(res.data["result"]));
            // setHosts(res.data["result"]);
        }).catch((e) => {
            setHosts(`error: ${e}`)
        })
    }

    const [hosts, setHosts] = useState([[]])

    return (
        <div>
            {hosts.map(host => {
                return (
                    <p>{host.map(line => { return line })}</p>
                )
            })}
            {/* {hosts} */}
            <button onClick={() => getAllHosts()}>Обновить</button>
        </div>
    );
}

export default WiFiComponent;