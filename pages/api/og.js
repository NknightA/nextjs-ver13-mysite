import { ImageResponse } from '@vercel/og'

export const config = {
    runtime : 'experimental-edge',
};

export default function () {
    return new ImageResponse(
        <div
            style={{
                display: 'flex',
                fontSize: 128,
                background: '#000021',
                width: '100%',
                height: '100%',
            }}>
            Hello!
        </div>
    )
}