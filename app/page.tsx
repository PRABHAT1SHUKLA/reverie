import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const [roomID, setRoomID] = useState('');
  const router = useRouter();

  const handleJoinRoom = (e) => {
    e.preventDefault();
    if (roomID) {
      router.push(`/room/${roomID}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Video Call App</h1>
        <form onSubmit={handleJoinRoom} className="space-y-4">
          <input
            type="text"
            value={roomID}
            onChange={(e) => setRoomID(e.target.value)}
            placeholder="Enter Room ID"
            className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 rounded hover:bg-blue-700 transition duration-300"
          >
            Join Call
          </button>
        </form>
      </div>
    </div>
  );
}
