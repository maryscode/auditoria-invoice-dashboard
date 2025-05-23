function StatusBadge({ status }:{status: string}) {
    let badge;
    switch (status) {
        case 'error':
            badge = <span className='inline-block bg-red-300 py-2 px-4 rounded-3xl text-red-800 font-bold text-sm'>Error</span>;
            break;
        case 'complete':
            badge = <span className='inline-block bg-lime-400 py-2 px-4 rounded-3xl text-lime-800 font-bold text-sm'>Complete</span>;
            break;
        case 'pending':
            badge = <span className='text-gray-500 italic'>Pending...</span>;
            break;            
        default:
            badge = <span className='inline-block bg-gray-300 py-2 px-4 rounded-3xl text-gray-800 font-bold text-sm'>Unknown</span>;
    }
    return badge;
}

export default StatusBadge;