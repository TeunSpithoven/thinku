export async function getAllRooms() {
    const response = await fetch('http://localhost:3000/api/rooms');
    return await response.text();
}

export async function getRoom(id) {
    const response = await fetch(`http://localhost:3000/api/rooms/${id}`)
    return await response.text();
}