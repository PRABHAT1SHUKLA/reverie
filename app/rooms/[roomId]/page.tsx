import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

export default function Room() {
  const router = useRouter();
  const { roomID } = router.query;
  const containerRef = useRef(null);

  useEffect(() => {
    if (roomID && containerRef.current) {
      const initZego = async () => {
        const appID = parseInt(process.env.NEXT_PUBLIC_ZEGO_APP_ID);
        const serverSecret = process.env.NEXT_PUBLIC_ZEGO_SERVER_SECRET;
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
          appID,
          serverSecret,
          roomID,
          Date.now().toString(),
          'User' + Math.random().toString()
        );

        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
          container: containerRef.current,
          scenario: {
            mode: ZegoUIKitPrebuilt.VideoConference,
          },
          showPreJoinView: false,
        });
      };

      initZego();
    }
  }, [roomID]);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div
        ref={containerRef}
        className="w-full h-screen max-w-4xl rounded-lg overflow-hidden"
      />
    </div>
  );
}
